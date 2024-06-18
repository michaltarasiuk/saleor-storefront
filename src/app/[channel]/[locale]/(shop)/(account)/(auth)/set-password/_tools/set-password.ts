import {graphql} from '@/graphql/generated';
import type {SetPasswordMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';

const SetPasswordMutation = graphql(/* GraphQL */ `
	mutation SetPasswordMutation(
		$email: String!
		$token: String!
		$password: String!
	) {
		setPassword(email: $email, token: $token, password: $password) {
			token
			refreshToken
			csrfToken
			errors {
				field
				code
			}
		}
	}
`);

export async function setPassword(
	variables: SetPasswordMutationMutationVariables,
) {
	return (
		await fetchMutationData(SetPasswordMutation, variables, {
			fetchOptions: {
				cache: 'no-cache',
			},
		})
	).setPassword;
}
