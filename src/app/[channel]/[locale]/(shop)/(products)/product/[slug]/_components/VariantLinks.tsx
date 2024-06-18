import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {cn} from '@/lib/tools/cn';

import {PRODUCT_PAGE_SEARCH_PARAM_NAMES} from '../_consts';
import {VariantLink} from './VariantLink';

const VariantLinks_ProductFragment = graphql(/* GraphQL */ `
	fragment VariantLinks_ProductFragment on Product {
		variants {
			__typename
			id
			...VariantLink_ProductVariantFragment
		}
	}
`);

interface Props {
	readonly product: FragmentType<typeof VariantLinks_ProductFragment>;
	readonly searchParams: URLSearchParams;
}

export function VariantLinks({product, searchParams}: Props) {
	const {variants} = getFragment(VariantLinks_ProductFragment, product);

	return (
		<ul className={cn('flex gap-3')}>
			{variants?.map((variant) => (
				<li key={variant.id}>
					<VariantLink
						variant={variant}
						disabled={searchParams.has(
							PRODUCT_PAGE_SEARCH_PARAM_NAMES.VARIANT,
							variant.id,
						)}
					/>
				</li>
			))}
		</ul>
	);
}
