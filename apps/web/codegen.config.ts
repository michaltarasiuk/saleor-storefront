import type {CodegenConfig} from '@graphql-codegen/cli';

import {env} from './env';

const config: CodegenConfig = {
  overwrite: true,
  schema: env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: ['src/**/*.{ts,tsx}', 'next.config.ts'],
  generates: {
    'src/graphql/codegen/': {
      preset: 'client',
      plugins: [],
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};

export default config;
