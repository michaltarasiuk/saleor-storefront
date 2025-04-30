import optimizeLocales from '@react-aria/optimize-locales-plugin';
import {joinPathname} from '@repo/utils/pathname';
import {withSentryConfig} from '@sentry/nextjs';
import type {NextConfig} from 'next';

import {client} from '@/graphql/client';
import {graphql} from '@/graphql/codegen';
import type {NextConfigQuery} from '@/graphql/codegen/graphql';
import {linguiConfigHelpers} from '@/i18n/config';

import {env} from './env';

const NextConfigQueryDocument = graphql(`
  query NextConfig {
    channels {
      slug
      isActive
    }
  }
`);

function findDefaultChannel(channels: NextConfigQuery['channels']) {
  const defaultChannel = (channels ?? [])
    .filter(channel => channel.isActive)
    .find(channel => channel.slug === env.DEFAULT_CHANNEL_SLUG);

  if (!defaultChannel) {
    throw new Error(
      `Default channel "${env.DEFAULT_CHANNEL_SLUG}" not found in the list of active channels.`
    );
  }
  return defaultChannel;
}

export default async function () {
  const {channels} = await client
    .setHeader('Authorization', `Bearer ${env.APP_TOKEN}`)
    .request(NextConfigQueryDocument);

  const nextConfig: NextConfig = {
    experimental: {
      nodeMiddleware: true,
      swcPlugins: [['@lingui/swc-plugin', {}]],
    },
    transpilePackages: ['@stylexjs/open-props'],
    images: {
      remotePatterns: [{hostname: 'avatars.githubusercontent.com'}],
    },
    webpack(config, {dev, isServer}) {
      config.module.rules.push({
        test: /\.po$/,
        use: {
          loader: '@lingui/loader',
        },
      });
      if (!isServer) {
        config.plugins.push(optimizeLocales.webpack({locales: []}));
      }

      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules(?!\/@stylexjs\/open-props)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              parserOpts: {
                plugins: ['typescript', 'jsx'],
              },
              plugins: [
                [
                  '@stylexjs/babel-plugin',
                  {
                    dev,
                    runtimeInjection: false,
                    genConditionalClasses: true,
                    treeshakeCompensation: true,
                    unstable_moduleResolution: {
                      type: 'commonJS',
                    },
                  },
                ],
              ],
            },
          },
        ],
      });
      return config;
    },
    async redirects() {
      const defaultChannel = findDefaultChannel(channels);
      return linguiConfigHelpers.locales.map(locale => ({
        source: joinPathname(locale),
        destination: joinPathname(locale, defaultChannel.slug),
        permanent: true,
      }));
    },
  };

  return withSentryConfig(nextConfig, {
    org: 'saleor-he',
    project: 'javascript-nextjs',
    silent: !env.CI,
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',
    disableLogger: true,
    automaticVercelMonitors: true,
  });
}
