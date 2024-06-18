import {graphql} from '@/graphql/generated';
import type {ConfirmEmailChangeMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';
import {getAccessToken} from '@/modules/account/tools/cookies';

const ConfirmEmailChangeMutation = graphql(/* GraphQL */ `
	mutation ConfirmEmailChangeMutation($channel: String!, $token: String!) {
		confirmEmailChange(channel: $channel, token: $token) {
			errors {
				field
				code
			}
		}
	}
`);

export async function confirmEmailChange(
	variables: ConfirmEmailChangeMutationMutationVariables,
) {
	const accessToken = getAccessToken();

	return (
		await fetchMutationData(ConfirmEmailChangeMutation, variables, {
			fetchOptions: {
				headers: {
					...(accessToken?.value && {
						Authorization: `Bearer ${accessToken.value}`,
					}),
				},
			},
		})
	).confirmEmailChange;
}
