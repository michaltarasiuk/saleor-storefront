import {graphql} from '@/graphql/generated';
import type {RefreshAccessTokenMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';

const RefreshAccessTokenMutation = graphql(/* GraphQL */ `
	mutation RefreshAccessTokenMutation($refreshToken: String!) {
		tokenRefresh(refreshToken: $refreshToken) {
			token
			errors {
				field
				message
				code
			}
		}
	}
`);

export async function refreshAccessToken(
	variables: RefreshAccessTokenMutationMutationVariables,
) {
	return await fetchMutationData(RefreshAccessTokenMutation, variables);
}
