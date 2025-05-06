import {getConfig as getLinguiConfig} from '@lingui/conf';
import optimizeLocales from '@react-aria/optimize-locales-plugin';
import {formatPathname} from '@repo/utils/pathname';
import {withSentryConfig} from '@sentry/nextjs';
import type {NextConfig} from 'next';

import {client} from '@/graphql/client';
import {graphql} from '@/graphql/codegen';
import type {StoreConfigQuery} from '@/graphql/codegen/graphql';

import {env} from './env';

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
  transpilePackages: ['@stylexjs/open-props'],
  images: {
    remotePatterns: env.IMAGE_REMOTE_HOSTNAMES.map(hostname => ({
      hostname,
    })),
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
    const {channels} = await getStoreConfig();
    const defaultChannel = getDefaultChannel(channels);

    return getLinguiConfig().locales.map(locale => ({
      source: formatPathname(locale),
      destination: formatPathname(locale, defaultChannel.slug),
      permanent: true,
    }));
  },
};

export default withSentryConfig(nextConfig, {
  org: 'saleor-he',
  project: 'javascript-nextjs',
  silent: !env.CI,
  widenClientFileUpload: true,
  tunnelRoute: '/monitoring',
  disableLogger: true,
  automaticVercelMonitors: true,
});

function getStoreConfig() {
  const StoreConfigQuery = graphql(`
    query StoreConfig {
      channels {
        slug
        isActive
      }
    }
  `);
  return client
    .setHeader('Authorization', `Bearer ${env.APP_TOKEN}`)
    .request(StoreConfigQuery);
}

function getDefaultChannel(channels: StoreConfigQuery['channels']) {
  for (const channel of channels ?? []) {
    if (channel.isActive && channel.slug === env.DEFAULT_CHANNEL_SLUG) {
      return channel;
    }
  }
  throw new Error('DEFAULT_CHANNEL_SLUG does not match any active channel.');
}
