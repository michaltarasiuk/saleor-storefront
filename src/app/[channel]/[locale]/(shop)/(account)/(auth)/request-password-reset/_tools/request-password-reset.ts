import {graphql} from '@/graphql/generated';
import type {RequestPasswordResetMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';

const RequestPasswordResetMutation = graphql(/* GraphQL */ `
	mutation RequestPasswordResetMutation(
		$email: String!
		$redirectUrl: String!
		$channel: String!
	) {
		requestPasswordReset(
			email: $email
			redirectUrl: $redirectUrl
			channel: $channel
		) {
			errors {
				field
				code
			}
		}
	}
`);

export async function requestPasswordReset(
	variables: RequestPasswordResetMutationMutationVariables,
) {
	return fetchMutationData(RequestPasswordResetMutation, variables);
}
