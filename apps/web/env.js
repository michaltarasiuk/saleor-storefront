import {createEnv} from '@t3-oss/env-nextjs';
import {z} from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
    NEXT_RUNTIME: z.enum(['nodejs', 'edge']),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
  },
});
