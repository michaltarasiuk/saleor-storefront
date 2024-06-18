'use server';

import {graphql} from '@/graphql/generated';
import type {CheckoutLineUpdateInput} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

const UpdateCheckoutLinesMutation = graphql(/* GraphQL */ `
	mutation UpdateCheckoutLinesMutation(
		$checkoutId: ID!
		$lines: [CheckoutLineUpdateInput!]!
	) {
		checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {
			errors {
				field
				code
			}
		}
	}
`);

type LineUpdateInput = Pick<CheckoutLineUpdateInput, 'lineId' | 'quantity'>;

export async function checkoutLineQuantityEditAction(
	lineUpdateInput: LineUpdateInput,
) {
	return (
		await fetchMutationData(
			UpdateCheckoutLinesMutation,
			{
				checkoutId:
					getCheckoutId() ?? raise('Checkout id is not defined'),
				lines: [lineUpdateInput],
			},
			{
				fetchOptions: {
					cache: 'no-cache',
				},
			},
		)
	).checkoutLinesUpdate;
}
