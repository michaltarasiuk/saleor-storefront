import {nextJsConfig} from '@repo/eslint-config/next-js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import pluginLingui from 'eslint-plugin-lingui';

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  ...pluginQuery.configs['flat/recommended'],
  pluginLingui.configs['flat/recommended'],
];
