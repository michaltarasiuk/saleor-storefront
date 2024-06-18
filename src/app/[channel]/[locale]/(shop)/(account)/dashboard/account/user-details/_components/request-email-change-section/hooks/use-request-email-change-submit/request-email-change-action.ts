'use server';

import {graphql} from '@/graphql/generated';
import type {RequestEmailChangeMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';
import {getAccessToken} from '@/modules/account/tools/cookies';

const RequestEmailChangeMutation = graphql(/* GraphQL */ `
	mutation RequestEmailChangeMutation(
		$channel: String!
		$newEmail: String!
		$password: String!
		$redirectUrl: String!
	) {
		requestEmailChange(
			channel: $channel
			newEmail: $newEmail
			password: $password
			redirectUrl: $redirectUrl
		) {
			errors {
				field
				code
			}
		}
	}
`);

export async function requestEmailChangeAction(
	variables: RequestEmailChangeMutationMutationVariables,
) {
	const accessToken = getAccessToken();

	return (
		await fetchMutationData(RequestEmailChangeMutation, variables, {
			headers: {
				...(accessToken?.value && {
					Authorization: `Bearer ${accessToken.value}`,
				}),
			},
			cache: 'no-cache',
		})
	).requestEmailChange;
}
