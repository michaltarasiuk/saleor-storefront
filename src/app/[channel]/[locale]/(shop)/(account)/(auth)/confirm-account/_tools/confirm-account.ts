import {graphql} from '@/graphql/generated';
import type {ConfirmAccountMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';

const ConfirmAccountMutation = graphql(/* GraphQL */ `
	mutation ConfirmAccountMutation($email: String!, $token: String!) {
		confirmAccount(email: $email, token: $token) {
			user {
				isActive
			}
			errors {
				field
				code
			}
		}
	}
`);

export async function confirmAccount(
	variables: ConfirmAccountMutationMutationVariables,
) {
	return fetchMutationData(ConfirmAccountMutation, variables);
}
