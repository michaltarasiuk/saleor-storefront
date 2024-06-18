import {Suspense} from 'react';

import {isDefined} from '@/lib/tools/is-defined';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

import {CartDialog} from './components/cart-dialog';
import {EmptyCartDialog} from './components/EmptyCartDialog';
import {ShoppingCartButton} from './components/ShoppingCartButton';

export function ShoppingCartDialog() {
	const checkoutId = getCheckoutId();

	return (
		<Suspense fallback={<ShoppingCartButton disabled />}>
			{!isDefined(checkoutId) ? (
				<EmptyCartDialog />
			) : (
				<CartDialog id={checkoutId} />
			)}
		</Suspense>
	);
}
