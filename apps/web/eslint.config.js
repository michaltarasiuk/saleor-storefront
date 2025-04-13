import {nextJsConfig} from '@repo/eslint-config/next-js';
import linguiPlugin from 'eslint-plugin-lingui';

/** @type {import("eslint").Linter.Config} */
export default [...nextJsConfig, linguiPlugin.configs['flat/recommended']];
