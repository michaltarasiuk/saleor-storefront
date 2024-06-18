'use client';

import * as RadioGroup from '@radix-ui/react-radio-group';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {cn} from '@/lib/tools/cn';

import {Money} from '../../../../../../_components/Money';
import {DeliveryDays} from './DeliveryDays';

const ShippingMethodRadioItem_ShippingMethod = graphql(/* GraphQL */ `
	fragment ShippingMethodRadioItem_ShippingMethod on ShippingMethod {
		id
		name
		price {
			currency
			amount
		}
		...DeliveryDays_ShippingMethod
	}
`);

interface Props {
	readonly shippingMethod: FragmentType<
		typeof ShippingMethodRadioItem_ShippingMethod
	>;
}

export function ShippingMethodRadioItem({shippingMethod}: Props) {
	const {id, name, price, ...restShippingMethodFragment} = getFragment(
		ShippingMethodRadioItem_ShippingMethod,
		shippingMethod,
	);

	return (
		<label
			className={cn(
				'relative flex gap-2 border-b border-b-faded-black p-4 last:border-b-0',
			)}>
			<div className={cn('flex')}>
				<RadioGroup.Item
					value={id}
					className={cn(
						'flex h-[18px] w-[18px] items-center justify-center rounded-full border border-faded-black transition-colors before:absolute before:inset-[-1px] before:border before:border-transparent data-[state=checked]:border-blue data-[state=checked]:bg-blue data-[state="checked"]:before:border-blue',
					)}>
					<RadioGroup.Indicator
						className={cn(
							'block h-[6px] w-[6px] rounded-full bg-white',
						)}
					/>
				</RadioGroup.Item>
			</div>
			<div className={cn('flex w-full justify-between')}>
				<div className={cn('flex flex-col')}>
					<span className={cn('text-sm text-white')}>{name}</span>
					<DeliveryDays shippingMethod={restShippingMethodFragment} />
				</div>
				<div>
					<Money
						value={price.amount}
						currency={price.currency}
						bold
					/>
				</div>
			</div>
		</label>
	);
}
