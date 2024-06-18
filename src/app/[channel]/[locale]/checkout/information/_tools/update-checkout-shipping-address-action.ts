'use server';

import {graphql} from '@/graphql/generated';
import type {AddressInput} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

const UpdateCheckoutShippingAddressMutation = graphql(/* GraphQL */ `
	mutation UpdateCheckoutShippingAddressMutation(
		$id: ID!
		$shippingAddress: AddressInput!
	) {
		checkoutShippingAddressUpdate(
			id: $id
			shippingAddress: $shippingAddress
		) {
			errors {
				field
				code
			}
		}
	}
`);

export async function updateCheckoutShippingAddressAction(
	shippingAddress: AddressInput,
) {
	const {checkoutShippingAddressUpdate} = await fetchMutationData(
		UpdateCheckoutShippingAddressMutation,
		{
			shippingAddress,
			id: getCheckoutId() ?? raise('Checkout id is not defined'),
		},
		{
			fetchOptions: {
				cache: 'no-cache',
			},
		},
	);
	return checkoutShippingAddressUpdate;
}
