import {createEnv} from '@t3-oss/env-nextjs';
import {z} from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
    NEXT_RUNTIME: z.enum(['nodejs', 'edge']).default('nodejs'),
    CI: z.enum(['1', '0']).default('0').transform(Number),
  },
  client: {
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: z.string().url(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    CI: process.env.CI,
  },
});
