import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {IntlLink} from '@/i18n/components/IntlLink';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {buttonStyles} from '@/lib/components/ui/Button';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {PRODUCT_PAGE_SEARCH_PARAM_NAMES} from '../_consts';

const VariantLink_ProductVariantFragment = graphql(/* GraphQL */ `
	fragment VariantLink_ProductVariantFragment on ProductVariant {
		__typename
		id
		name
		translation(languageCode: $languageCode) {
			__typename
			id
			name
		}
		product {
			__typename
			id
			slug
		}
	}
`);

interface Props {
	readonly variant: FragmentType<typeof VariantLink_ProductVariantFragment>;
	readonly disabled: boolean;
}

export function VariantLink({variant, disabled}: Props) {
	const {id, name, product} = applyTranslation(
		getFragment(VariantLink_ProductVariantFragment, variant),
	);
	const searchParams = new URLSearchParams();

	searchParams.set(PRODUCT_PAGE_SEARCH_PARAM_NAMES.VARIANT, id);

	return (
		<IntlLink
			href={{
				pathname: formatPathname(APP_ROUTES.PRODUCT, product.slug),
				query: searchParams.toString(),
			}}
			className={cn(
				buttonStyles({variant: 'outline'}),
				disabled && 'bg-blue-100',
			)}>
			{name}
		</IntlLink>
	);
}
