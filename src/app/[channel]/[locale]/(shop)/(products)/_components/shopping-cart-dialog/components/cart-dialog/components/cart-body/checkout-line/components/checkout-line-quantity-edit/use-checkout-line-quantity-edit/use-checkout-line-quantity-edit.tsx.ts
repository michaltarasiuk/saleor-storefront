import {useRouter} from 'next/navigation';
import {useCallback, useMemo, useState} from 'react';

import {checkoutLineQuantityEditAction} from './checkout-line-quantity-edit-action';

export function useCheckoutLineQuantityEdit(lineId: string, value: number) {
	const [quantity, setQuantity] = useState(value);
	const [isPending, setIsPending] = useState(false);

	const router = useRouter();

	const updateQuantity = useCallback(
		async (quantity: number) => {
			setIsPending(true);

			try {
				await checkoutLineQuantityEditAction({
					lineId,
					quantity,
				});
				setQuantity(quantity);

				router.refresh();
			} catch (error) {
				console.error(error);
			} finally {
				setIsPending(false);
			}
		},
		[router, lineId],
	);

	return {
		optimisticQuantity: quantity,
		...useMemo(
			() => ({
				increaseQuantity: () => updateQuantity(quantity + 1),
				decreaseQuantity: () => updateQuantity(quantity - 1),
			}),
			[quantity, updateQuantity],
		),
		isPending,
	};
}
