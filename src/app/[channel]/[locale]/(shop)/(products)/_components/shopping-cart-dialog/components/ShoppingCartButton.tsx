import {ShoppingCartIcon} from 'lucide-react';
import type {ComponentProps} from 'react';

import type {FragmentType} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {graphql} from '@/graphql/generated/gql';
import {FormattedMessage} from '@/i18n/react-intl';
import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

const ShoppingCartButton_CheckoutFragment = graphql(/* GraphQL */ `
	fragment ShoppingCartButton_CheckoutFragment on Checkout {
		quantity
	}
`);

interface ShoppingCartButtonProps
	extends Omit<
		ComponentProps<typeof IconButton>,
		'variant' | 'label' | 'children'
	> {
	readonly checkout?: FragmentType<
		typeof ShoppingCartButton_CheckoutFragment
	>;
}

export function ShoppingCartButton({
	checkout,
	...restProps
}: ShoppingCartButtonProps) {
	const quantity = checkout
		? getFragment(ShoppingCartButton_CheckoutFragment, checkout).quantity
		: null;

	return (
		<IconButton
			variant="ghost"
			className={cn('relative')}
			label={
				<FormattedMessage defaultMessage="Shopping cart" id="wjh10D" />
			}
			{...restProps}>
			<ShoppingCartIcon className={cn('h-5 w-5')} />
			{quantity && <Quantity value={quantity} />}
		</IconButton>
	);
}

interface QuantityProps {
	readonly value: number;
}

function Quantity({value}: QuantityProps) {
	return (
		<div
			className={cn(
				'absolute right-0 top-0 flex -translate-y-1/2 translate-x-1/2 items-center justify-center rounded bg-blue px-0.5 text-white',
				value.toString().length === 1 && 'px-1',
			)}>
			{value}
		</div>
	);
}
