import type {AnyVariables, DocumentInput, OperationContext} from '@urql/core';
import {createClient, fetchExchange} from '@urql/core';
import {registerUrql} from '@urql/next/rsc';
import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env/env-local';

function makeClient() {
	return createClient({
		url: GRAPHQL_ENDPOINT,
		exchanges: [fetchExchange],
	});
}

export const {getClient} = registerUrql(makeClient);

export async function fetchQueryData<
	Data,
	Variables extends AnyVariables = AnyVariables,
>(
	query: DocumentInput<Data, Variables>,
	variables: Variables,
	context?: Partial<OperationContext>,
) {
	const {error, data} = await getClient().query(query, variables, context);
	invariant(!error && data, error?.message);

	return data;
}

export async function fetchMutationData<
	Data,
	Variables extends AnyVariables = AnyVariables,
>(
	query: DocumentInput<Data, Variables>,
	variables: Variables,
	context?: Partial<OperationContext>,
) {
	const {error, data} = await getClient().mutation(query, variables, context);
	invariant(!error && data, error?.message);

	return data;
}
