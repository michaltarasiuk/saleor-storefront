import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  experimental: {
    nodeMiddleware: true,
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
  transpilePackages: ['@stylexjs/open-props'],
  images: {
    remotePatterns: [{hostname: 'avatars.githubusercontent.com'}],
  },
  webpack(config, {dev}) {
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: '@lingui/loader',
      },
    });
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
export default nextConfig;
