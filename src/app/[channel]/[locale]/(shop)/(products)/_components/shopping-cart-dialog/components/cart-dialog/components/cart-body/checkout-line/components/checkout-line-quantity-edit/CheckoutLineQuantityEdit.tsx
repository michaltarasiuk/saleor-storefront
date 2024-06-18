import {cn} from '@/lib/tools/cn';

import {EditQuantityButton} from './EditQuantityButton.tsx';
import {useCheckoutLineQuantityEdit} from './use-checkout-line-quantity-edit/index.ts';

interface Props {
	readonly lineId: string;
	readonly value: number;
	readonly onDelete: () => void;
}

export function CheckoutLineQuantityEdit({lineId, value, onDelete}: Props) {
	const {optimisticQuantity, decreaseQuantity, increaseQuantity, isPending} =
		useCheckoutLineQuantityEdit(lineId, value);

	if (optimisticQuantity === 0) {
		onDelete();
	}
	return (
		<form
			className={cn(
				'flex min-w-min items-center justify-between rounded-full border border-input',
			)}>
			<EditQuantityButton
				type="decrease"
				formAction={decreaseQuantity}
				disabled={isPending}
			/>
			<p className={cn('px-2 text-sm')}>{optimisticQuantity}</p>
			<EditQuantityButton
				type="increase"
				formAction={increaseQuantity}
				disabled={isPending}
			/>
		</form>
	);
}
