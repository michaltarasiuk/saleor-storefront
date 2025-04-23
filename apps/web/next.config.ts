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
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options
  org: 'saleor-he',
  project: 'javascript-nextjs',
  // Only print logs for uploading source maps in CI
  silent: !env.CI,
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,
  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: '/monitoring',
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
