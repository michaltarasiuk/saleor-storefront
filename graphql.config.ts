import dotenv from 'dotenv';
import type {IGraphQLConfig} from 'graphql-config';
import {z} from 'zod';

const WebAppEnvironmentVariablesSchema = z.object({
  NEXT_PUBLIC_GRAPHQL_ENDPOINT: z.url(),
});

const webAppEnvironmentVariables = {};
dotenv.config({
  processEnv: webAppEnvironmentVariables,
  path: './apps/web/.env.local',
});

const parsedWebAppEnvironmentVariables = WebAppEnvironmentVariablesSchema.parse(
  webAppEnvironmentVariables
);

const config: IGraphQLConfig = {
  projects: {
    web: {
      schema: parsedWebAppEnvironmentVariables.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
      documents: 'apps/web/src/**/*.{ts,tsx}',
    },
  },
};
export default config;
