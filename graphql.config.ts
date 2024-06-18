import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import type {IGraphQLConfig} from 'graphql-config';
import invariant from 'tiny-invariant';

dotenvExpand.expand(dotenv.config({path: './.env.local'}));

const schema = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
invariant(schema, 'Schema is not defined.');

const config: IGraphQLConfig = {
	schema,
	documents: 'src/**/*.{ts,tsx}',
};

export default config;
