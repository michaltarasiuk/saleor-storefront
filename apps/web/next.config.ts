import optimizeLocales from '@react-aria/optimize-locales-plugin';
import {withSentryConfig} from '@sentry/nextjs';
import type {NextConfig} from 'next';

import {client} from '@/graphql/client';
import {graphql} from '@/graphql/codegen';
import type {NextConfigQuery} from '@/graphql/codegen/graphql';

import {env} from './env';

const NextConfigQueryDocument = graphql(`
  query NextConfig {
    channels {
      slug
      isActive
    }
  }
`);

function getDefaultChannel(channels: NextConfigQuery['channels']) {
  const channel = (channels ?? [])
    .filter(channel => channel.isActive)
    .find(channel => channel.slug === env.DEFAULT_CHANNEL_SLUG);

  if (!channel) {
    throw new Error(
      `Default channel "${env.DEFAULT_CHANNEL_SLUG}" not found among active channels.`
    );
  }
  return channel;
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
      const defaultChannel = getDefaultChannel(channels);
      return [
        {
          source: '/:locale',
          destination: '/:locale' + `/${defaultChannel.slug}`,
          permanent: true,
        },
      ];
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
