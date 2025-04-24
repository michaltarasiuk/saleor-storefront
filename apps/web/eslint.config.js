import {fileURLToPath} from 'node:url';

import {includeIgnoreFile} from '@eslint/compat';
import {nextJsConfig} from '@repo/eslint-config/next-js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import pluginLingui from 'eslint-plugin-lingui';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  ...pluginQuery.configs['flat/recommended'],
  pluginLingui.configs['flat/recommended'],
  includeIgnoreFile(gitignorePath),
];
