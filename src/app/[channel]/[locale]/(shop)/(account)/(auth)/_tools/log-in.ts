import {graphql} from '@/graphql/generated';
import type {LogInMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';

const LogInMutation = graphql(/* GraphQL */ `
	mutation LogInMutation($email: String!, $password: String!) {
		tokenCreate(email: $email, password: $password) {
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

export async function logIn(variables: LogInMutationMutationVariables) {
	return fetchMutationData(LogInMutation, variables, {
		fetchOptions: {cache: 'no-cache'},
	});
}
