import Image from 'next/image';

import type {FragmentType} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {graphql} from '@/graphql/generated/gql';
import {cn} from '@/lib/tools/cn';
import {useConcatenatedAttributeValues} from '@/modules/checkout/hooks/use-concatenated-attribute-values';

import {Money} from '../../../../Money';
import {Quantity} from './Quantity';

const Line_CheckoutFragment = graphql(/* GraphQL */ `
	fragment Line_CheckoutFragment on Checkout {
		displayGrossPrices
	}
`);

const Line_CheckoutLineFragment = graphql(/* GraphQL */ `
	fragment Line_CheckoutLineFragment on CheckoutLine {
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
	readonly checkout: FragmentType<typeof Line_CheckoutFragment>;
	readonly checkoutLine: FragmentType<typeof Line_CheckoutLineFragment>;
}

export function Line({checkout, checkoutLine}: Props) {
	const {displayGrossPrices} = getFragment(Line_CheckoutFragment, checkout);
	const {
		quantity,
		totalPrice,
		variant: {
			product: {name, translation, attributes, media},
		},
	} = getFragment(Line_CheckoutLineFragment, checkoutLine);

	const concatenatedAttributeValues =
		useConcatenatedAttributeValues(attributes);

	const image = media?.at(0);

	return (
		<div className={cn('flex items-center justify-between')}>
			<div className={cn('flex items-center gap-2')}>
				<div
					className={cn(
						'relative rounded-lg border border-faded-black bg-subdued-foreground',
					)}>
					<div className={cn('absolute -right-2 -top-2')}>
						<Quantity value={quantity} />
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
				<div className={cn('flex flex-col')}>
					<p className={cn('text-sm font-semibold text-white')}>
						{translation?.name ?? name}
					</p>
					<p className={cn('text-xs text-grey-light')}>
						{concatenatedAttributeValues}
					</p>
				</div>
			</div>
			<Money
				value={
					displayGrossPrices
						? totalPrice.gross.amount
						: totalPrice.net.amount
				}
				currency={totalPrice.currency}
			/>
		</div>
	);
}
