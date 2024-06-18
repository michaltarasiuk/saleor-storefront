'use server';

import {graphql} from '@/graphql/generated';
import type {AddressInput} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

const UpdateCheckoutBillingAddressMutation = graphql(/* GraphQL */ `
	mutation UpdateCheckoutBillingAddressMutation(
		$id: ID!
		$billingAddress: AddressInput!
	) {
		checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {
			errors {
				field
				code
			}
		}
	}
`);

export async function updateCheckoutBillingAddressAction(
	billingAddress: AddressInput,
) {
	const {checkoutBillingAddressUpdate} = await fetchMutationData(
		UpdateCheckoutBillingAddressMutation,
		{
			billingAddress,
			id: getCheckoutId() ?? raise('Checkout id is not defined'),
		},
		{
			fetchOptions: {
				cache: 'no-cache',
			},
		},
	);
	return checkoutBillingAddressUpdate;
}
