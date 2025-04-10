import fs from 'fs';
import path from 'path';

import {env} from './env.js';

const projectRoot = path.dirname(new URL(import.meta.url).pathname);
const monorepoRoot = path.join(projectRoot, '../../');

function getPackageIncludePaths(packageName, nodeModulePaths) {
  let packagePath = null;
  for (const nodeModulePath of nodeModulePaths) {
    const packageJsonPath = path.resolve(
      nodeModulePath,
      packageName,
      'package.json'
    );
    if (fs.existsSync(packageJsonPath)) {
      packagePath = path.dirname(packageJsonPath);
      break;
    }
  }
  if (!packagePath) {
    throw new Error(`Could not find package ${packageName}`);
  }
  return [
    path.join(packagePath, '**/*.{js,mjs}'),
    '!' + path.join(packagePath, 'node_modules/**/*.{js,mjs}'),
  ];
}

const openPropsIncludePaths = getPackageIncludePaths('@stylexjs/open-props', [
  path.join(projectRoot, 'node_modules'),
  path.join(monorepoRoot, 'node_modules'),
]);

export default {
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: [
        'app/**/*.{js,jsx,ts,tsx}',
        'components/**/*.{js,jsx,ts,tsx}',
        '../../packages/**/*.{js,jsx,ts,tsx}',
        ...openPropsIncludePaths,
      ],
      babelConfig: {
        babelrc: false,
        parserOpts: {
          plugins: ['typescript', 'jsx'],
        },
        plugins: [
          [
            '@stylexjs/babel-plugin',
            {
              dev: env.NODE_ENV !== 'production',
              runtimeInjection: false,
              genConditionalClasses: true,
              treeshakeCompensation: true,
              unstable_moduleResolution: {type: 'commonJS'},
              aliases: {
                '@/*': [path.join(projectRoot, '*')],
              },
            },
          ],
        ],
      },
      useCSSLayers: true,
    },
    autoprefixer: {},
  },
};
