'use server';

import {graphql} from '@/graphql/generated';
import type {UpdateCheckoutEmailMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

const UpdateCheckoutEmailMutation = graphql(/* GraphQL */ `
	mutation UpdateCheckoutEmailMutation($id: ID!, $email: String!) {
		checkoutEmailUpdate(id: $id, email: $email) {
			errors {
				field
				code
			}
		}
	}
`);

export async function updateCheckoutEmailAction(
	email: UpdateCheckoutEmailMutationMutationVariables['email'],
) {
	const {checkoutEmailUpdate} = await fetchMutationData(
		UpdateCheckoutEmailMutation,
		{
			email,
			id: getCheckoutId() ?? raise('Checkout id is not defined'),
		},
		{
			fetchOptions: {
				cache: 'no-cache',
			},
		},
	);
	return checkoutEmailUpdate;
}
