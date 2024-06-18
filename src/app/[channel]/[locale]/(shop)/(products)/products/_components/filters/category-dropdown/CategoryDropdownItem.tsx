import {useSearchParams} from 'next/navigation';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {toggleSearchParam} from '@/lib/tools/toggle-search-param';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../../../_consts';
import {FiltersDropdownItem} from '../filters-dropdown/FiltersDropdownItem';

const CategoryDropdownItem_CategoryFragment = graphql(`
	fragment CategoryDropdownItem_CategoryFragment on Category {
		__typename
		id
		name
		translation(languageCode: $languageCode) {
			name
		}
		slug
	}
`);

interface Props {
	readonly category: FragmentType<
		typeof CategoryDropdownItem_CategoryFragment
	>;
}

export function CategoryDropdownItem({category}: Props) {
	const {name, slug} = applyTranslation(
		getFragment(CategoryDropdownItem_CategoryFragment, category),
	);
	const intlRouter = useIntlRouter();

	const searchParams = useSearchParams();

	return (
		<FiltersDropdownItem
			checked={searchParams.has(
				PRODUCTS_PAGE_SEARCH_PARAM_NAMES.CATEGORY,
				slug,
			)}
			onSelect={() => {
				intlRouter.push(
					`${formatPathname(APP_ROUTES.PRODUCTS)}?${toggleSearchParam(
						searchParams,
						PRODUCTS_PAGE_SEARCH_PARAM_NAMES.CATEGORY,
						slug,
					)}`,
				);
			}}>
			{name}
		</FiltersDropdownItem>
	);
}
