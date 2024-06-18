'use server';

import {graphql} from '@/graphql/generated';
import type {ChangePasswordMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';
import {getAccessToken} from '@/modules/account/tools/cookies';

const ChangePasswordMutation = graphql(/* GraphQL */ `
	mutation ChangePasswordMutation(
		$newPassword: String!
		$oldPassword: String!
	) {
		passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
			errors {
				field
				code
			}
		}
	}
`);

export async function changePasswordAction(
	variables: ChangePasswordMutationMutationVariables,
) {
	const accessToken = getAccessToken();

	return (
		await fetchMutationData(ChangePasswordMutation, variables, {
			fetchOptions: {
				headers: {
					...(accessToken?.value && {
						Authorization: `Bearer ${accessToken.value}`,
					}),
				},
				cache: 'no-cache',
			},
		})
	).passwordChange;
}
