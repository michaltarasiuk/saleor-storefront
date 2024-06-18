import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

import {ProductPriceRange} from '../../../_components/ProductPriceRange';
import {ProductThumbnail} from '../../../_components/ProductThumbnail';
import {PRODUCT_PAGE_SEARCH_PARAM_NAMES} from '../_consts';
import {AddToCartButton} from './AddToCartButton';
import {VariantLinks} from './VariantLinks';

interface ProductDescription {
	readonly blocks: readonly {
		readonly data: {
			readonly text: string;
		};
	}[];
}

function praseProductDescription(description: string) {
	const parsedDescription = JSON.parse(description) as ProductDescription;

	return parsedDescription.blocks.map(({data: {text}}) => text).join(' ');
}

const Product_ProductFragment = graphql(/* GraphQL */ `
	fragment Product_ProductFragment on Product {
		__typename
		id
		name
		description
		translation(languageCode: $languageCode) {
			__typename
			id
			name
			description
		}
		isAvailable
		thumbnail(format: WEBP, size: 4096) {
			...ProductThumbnail_ImageFragment
		}
		pricing {
			...ProductPriceRange_PricingInfoFragment
		}
		variants {
			__typename
			id
		}
		...VariantLinks_ProductFragment
	}
`);

interface Props {
	readonly product: FragmentType<typeof Product_ProductFragment>;
	readonly searchParams: URLSearchParams;
}

export function Product({product, searchParams}: Props) {
	const productItem = applyTranslation(
		getFragment(Product_ProductFragment, product),
	);
	const {thumbnail, pricing, description, variants} = productItem;

	const variantId = searchParams.get(PRODUCT_PAGE_SEARCH_PARAM_NAMES.VARIANT);

	return (
		<div className={cn('mt-6 flex gap-8')}>
			<div className={cn('flex-1')}>
				{thumbnail && <ProductThumbnail thumbnail={thumbnail} />}
			</div>
			<div className={cn('flex flex-1 flex-col gap-8')}>
				<h1 className={cn('text-3xl font-bold')}>{productItem.name}</h1>
				<span className={cn('-mt-2 inline-block text-sm')}>
					{pricing && <ProductPriceRange pricingInfo={pricing} />}
				</span>
				{variants && variants.length > 1 && (
					<VariantLinks
						product={productItem}
						searchParams={searchParams}
					/>
				)}
				{isDefined(description) && (
					<p
						dangerouslySetInnerHTML={{
							__html: praseProductDescription(description),
						}}
					/>
				)}
				<div className={cn('-mt-1.5 w-fit')}>
					<AddToCartButton variantId={variantId} />
				</div>
			</div>
		</div>
	);
}
