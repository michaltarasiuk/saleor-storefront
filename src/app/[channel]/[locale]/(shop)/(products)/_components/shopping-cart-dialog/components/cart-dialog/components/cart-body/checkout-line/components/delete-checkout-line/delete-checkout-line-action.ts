'use server';

import {graphql} from '@/graphql/generated';
import {fetchMutationData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

const DeleteCheckoutLinesMutation = graphql(/* GraphQL */ `
	mutation DeleteCheckoutLinesMutation($id: ID!, $linesIds: [ID!]!) {
		checkoutLinesDelete(id: $id, linesIds: $linesIds) {
			errors {
				field
				code
			}
		}
	}
`);

export async function deleteCheckoutLineAction(lineId: string) {
	return (
		await fetchMutationData(
			DeleteCheckoutLinesMutation,
			{
				linesIds: [lineId],
				id: getCheckoutId() ?? raise('Checkout id is not defined'),
			},
			{
				fetchOptions: {
					cache: 'no-cache',
				},
			},
		)
	).checkoutLinesDelete;
}
