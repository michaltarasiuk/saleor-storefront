import optimizeLocales from '@react-aria/optimize-locales-plugin';
import {withSentryConfig} from '@sentry/nextjs';
import type {NextConfig} from 'next';

import {env} from './env';

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
