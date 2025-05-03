import {createEnv} from '@t3-oss/env-nextjs';
import {z} from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
    NEXT_RUNTIME: z.enum(['nodejs', 'edge']).default('nodejs'),
    APP_TOKEN: z.string(),
    CI: z.enum(['1', '0']).default('0').transform(Number),
    DEFAULT_CHANNEL_SLUG: z.string(),
    IMAGE_REMOTE_HOSTNAMES: z.string().transform(v => v.split(',')),
  },
  client: {
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    APP_TOKEN: process.env.APP_TOKEN,
    CI: process.env.CI,
    DEFAULT_CHANNEL_SLUG: process.env.DEFAULT_CHANNEL_SLUG,
    IMAGE_REMOTE_HOSTNAMES: process.env.IMAGE_REMOTE_HOSTNAMES,
  },
});
