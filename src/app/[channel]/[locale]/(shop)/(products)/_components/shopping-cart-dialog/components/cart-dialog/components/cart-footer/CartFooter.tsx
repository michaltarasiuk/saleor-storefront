import type {FragmentType} from '@/graphql/generated/fragment-masking';
import {getFragment} from '@/graphql/generated/fragment-masking';
import {graphql} from '@/graphql/generated/gql';

import {ProceedToCheckout} from './components/ProceedToCheckout';
import {CartTotal} from './components/total';

const CartFooter_CheckoutFragment = graphql(/* GraphQL */ `
	fragment CartFooter_CheckoutFragment on Checkout {
		...CartTotal_CheckoutFragment
	}
`);

interface Props {
	readonly checkout: FragmentType<typeof CartFooter_CheckoutFragment>;
}

export function CartFooter({checkout}: Props) {
	return (
		<div>
			<CartTotal
				checkout={getFragment(CartFooter_CheckoutFragment, checkout)}
			/>
			<ProceedToCheckout />
		</div>
	);
}
