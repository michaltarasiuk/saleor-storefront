import {GraphQLClient} from 'graphql-request';

import {env} from '@/env';

export const client = new GraphQLClient(env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);
