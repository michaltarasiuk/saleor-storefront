'use server';

import {graphql} from '@/graphql/generated';
import type {CreateCheckoutMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchMutationData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';

import {setCheckoutId} from './cookies';

const CreateCheckoutMutation = graphql(/* GraphQL */ `
	mutation CreateCheckoutMutation(
		$lines: [CheckoutLineInput!]!
		$channel: String!
		$languageCode: LanguageCodeEnum!
		$email: String
	) {
		checkoutCreate(
			input: {
				channel: $channel
				lines: $lines
				languageCode: $languageCode
				email: $email
			}
		) {
			checkout {
				id
			}
			errors {
				field
				code
			}
		}
	}
`);

export async function createCheckoutAction(
	variables: CreateCheckoutMutationMutationVariables,
) {
	const {checkout, errors} =
		(
			await fetchMutationData(CreateCheckoutMutation, variables, {
				fetchOptions: {
					cache: 'no-cache',
				},
			})
		).checkoutCreate ?? {};

	if (errors?.length) {
		return {
			errors,
		};
	}
	setCheckoutId(checkout?.id ?? raise('Checkout id is not defined'));

	return null;
}
