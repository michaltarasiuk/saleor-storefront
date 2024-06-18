import invariant from 'tiny-invariant';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {IntlLink} from '@/i18n/components/IntlLink';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {PRODUCT_PAGE_SEARCH_PARAM_NAMES} from '../../product/[slug]/_consts';
import {ProductCategoryName} from '../ProductCategoryName';
import {ProductPriceRange} from '../ProductPriceRange';
import {ProductThumbnail} from '../ProductThumbnail';

const ProductItem_ProductFragment = graphql(/* GraphQL */ `
	fragment ProductItem_ProductFragment on Product {
		__typename
		id
		name
		slug
		translation(languageCode: $languageCode) {
			__typename
			id
			name
		}
		thumbnail(format: WEBP, size: 4096) {
			...ProductThumbnail_ImageFragment
		}
		pricing {
			...ProductPriceRange_PricingInfoFragment
		}
		category {
			...ProductCategoryName_CategoryFragment
		}
		variants {
			__typename
			id
		}
	}
`);

interface Props {
	readonly product: FragmentType<typeof ProductItem_ProductFragment>;
}

export function ProductItem({product}: Props) {
	const {name, slug, thumbnail, pricing, category, variants} =
		applyTranslation(getFragment(ProductItem_ProductFragment, product));
	const searchParams = new URLSearchParams();

	if (variants && variants.length === 1) {
		const [variant] = variants;
		invariant(variant, 'Product variant is not defined');

		searchParams.set(PRODUCT_PAGE_SEARCH_PARAM_NAMES.VARIANT, variant.id);
	}

	return (
		<li>
			<IntlLink
				href={{
					pathname: formatPathname(APP_ROUTES.PRODUCT, slug),
					query: searchParams.toString(),
				}}>
				{thumbnail && <ProductThumbnail thumbnail={thumbnail} />}
				<div className={cn('flex flex-col gap-1 text-sm')}>
					<div className={cn('mt-2 flex justify-between')}>
						<h4 className={cn('font-semibold')}>{name}</h4>
						{pricing && <ProductPriceRange pricingInfo={pricing} />}
					</div>
					{category && <ProductCategoryName category={category} />}
				</div>
			</IntlLink>
		</li>
	);
}
