import {createEnv} from '@t3-oss/env-nextjs';
import {z} from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
    NEXT_RUNTIME: z.enum(['nodejs', 'edge']).default('nodejs'),
    APP_TOKEN: z.string(),
    DEFAULT_CHANNEL_SLUG: z.string(),
    CI: z.enum(['1', '0']).default('0').transform(Number),
  },
  client: {
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: z.url(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    APP_TOKEN: process.env.APP_TOKEN,
    DEFAULT_CHANNEL_SLUG: process.env.DEFAULT_CHANNEL_SLUG,
    CI: process.env.CI,
  },
});
