import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {FormattedPrice} from '@/i18n/components/FormattedPrice';

const ProductPriceRange_PricingInfoFragment = graphql(/* GraphQL */ `
	fragment ProductPriceRange_PricingInfoFragment on ProductPricingInfo {
		priceRange {
			start {
				gross {
					currency
					amount
				}
			}
			stop {
				gross {
					currency
					amount
				}
			}
		}
	}
`);

interface Props {
	readonly pricingInfo: FragmentType<
		typeof ProductPriceRange_PricingInfoFragment
	>;
}

export function ProductPriceRange({pricingInfo}: Props) {
	const {priceRange} = getFragment(
		ProductPriceRange_PricingInfoFragment,
		pricingInfo,
	);
	if (!(priceRange && priceRange.start && priceRange.stop)) {
		return undefined;
	}
	const {start, stop} = priceRange;

	const isPriceDifferent =
		start.gross.currency !== stop.gross.currency ||
		start.gross.amount !== stop.gross.amount;

	return (
		<span>
			<FormattedPrice
				currency={start.gross.currency}
				value={start.gross.amount}
			/>
			{isPriceDifferent && (
				<>
					{' - '}
					<FormattedPrice
						currency={stop.gross.currency}
						value={stop.gross.amount}
					/>
				</>
			)}
		</span>
	);
}
