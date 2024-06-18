import Image from 'next/image';

import type {FragmentType} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {graphql} from '@/graphql/generated/gql';
import {cn} from '@/lib/tools/cn';
import {useConcatenatedAttributeValues} from '@/modules/checkout/hooks/use-concatenated-attribute-values';

import {Money} from '../../Money';
import {CheckoutLineQuantityEdit} from './components/checkout-line-quantity-edit';
import {DeleteCheckoutLine} from './components/delete-checkout-line';

const CheckoutLine_CheckoutFragment = graphql(/* GraphQL */ `
	fragment CheckoutLine_CheckoutFragment on Checkout {
		displayGrossPrices
	}
`);

const CheckoutLine_CheckoutLineFragment = graphql(/* GraphQL */ `
	fragment CheckoutLine_CheckoutLineFragment on CheckoutLine {
		id
		quantity
		totalPrice {
			currency
			net {
				amount
			}
			gross {
				amount
			}
		}
		variant {
			product {
				name
				translation(languageCode: $languageCode) {
					name
				}
				attributes {
					values {
						name
						translation(languageCode: $languageCode) {
							name
						}
					}
				}
				media {
					url
					alt
				}
			}
		}
	}
`);

interface Props {
	readonly checkout: FragmentType<typeof CheckoutLine_CheckoutFragment>;
	readonly checkoutLine: FragmentType<
		typeof CheckoutLine_CheckoutLineFragment
	>;
	readonly onDelete: (id: string) => void;
}

export function CheckoutLine({checkout, checkoutLine, onDelete}: Props) {
	const {displayGrossPrices} = getFragment(
		CheckoutLine_CheckoutFragment,
		checkout,
	);
	const {
		id,
		quantity,
		totalPrice,
		variant: {
			product: {name, translation, attributes, media},
		},
	} = getFragment(CheckoutLine_CheckoutLineFragment, checkoutLine);

	const concatenatedAttributeValues =
		useConcatenatedAttributeValues(attributes);

	const image = media?.at(0);

	return (
		<div className={cn('flex justify-between border-b px-1 py-4')}>
			<div className={cn('flex gap-2')}>
				<div className={cn('relative h-16 w-16 rounded-md border')}>
					<div className={cn('absolute -right-2 -top-3')}>
						<DeleteCheckoutLine
							lineId={id}
							onDelete={() => onDelete(id)}
						/>
					</div>
					{image && (
						<Image
							src={image.url}
							alt={image.alt}
							height={64}
							width={64}
						/>
					)}
				</div>
				<div className={cn('flex flex-col justify-center')}>
					<span>{translation?.name ?? name}</span>
					<p className={cn('text-sm text-neutral-500')}>
						{concatenatedAttributeValues}
					</p>
				</div>
			</div>
			<div className={cn('flex flex-col items-end justify-between')}>
				<Money
					value={
						displayGrossPrices
							? totalPrice.gross.amount
							: totalPrice.net.amount
					}
					currency={totalPrice.currency}
					sm
				/>
				<CheckoutLineQuantityEdit
					lineId={id}
					value={quantity}
					onDelete={() => onDelete(id)}
				/>
			</div>
		</div>
	);
}
