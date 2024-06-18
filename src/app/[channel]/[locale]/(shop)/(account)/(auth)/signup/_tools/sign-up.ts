import {graphql} from '@/graphql/generated';
import type {SignUpMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';

const SignUpMutation = graphql(/* GraphQL */ `
	mutation SignUpMutation(
		$email: String!
		$password: String!
		$channel: String!
		$redirectUrl: String!
	) {
		accountRegister(
			input: {
				email: $email
				password: $password
				channel: $channel
				redirectUrl: $redirectUrl
			}
		) {
			user {
				email
			}
			errors {
				field
				code
			}
			requiresConfirmation
		}
	}
`);

export async function signUp(variables: SignUpMutationMutationVariables) {
	return fetchMutationData(SignUpMutation, variables);
}
