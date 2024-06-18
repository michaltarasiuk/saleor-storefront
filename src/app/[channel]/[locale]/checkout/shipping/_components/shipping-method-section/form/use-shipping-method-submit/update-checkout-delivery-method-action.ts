'use server';

import {graphql} from '@/graphql/generated';
import type {UpdateCheckoutDeliveryMethodMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

const UpdateCheckoutDeliveryMethodMutation = graphql(/* GraphQL */ `
	mutation UpdateCheckoutDeliveryMethodMutation(
		$id: ID!
		$deliveryMethodId: ID!
	) {
		checkoutDeliveryMethodUpdate(
			id: $id
			deliveryMethodId: $deliveryMethodId
		) {
			errors {
				field
				code
			}
		}
	}
`);

export async function updateCheckoutDeliveryMethodAction(
	deliveryMethodId: UpdateCheckoutDeliveryMethodMutationMutationVariables['deliveryMethodId'],
) {
	const {checkoutDeliveryMethodUpdate} = await fetchMutationData(
		UpdateCheckoutDeliveryMethodMutation,
		{
			deliveryMethodId,
			id: getCheckoutId() ?? raise('Checkout id is not defined'),
		},
	);
	return checkoutDeliveryMethodUpdate;
}
