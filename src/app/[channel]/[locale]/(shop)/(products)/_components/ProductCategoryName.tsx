import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {cn} from '@/lib/tools/cn';

const ProductCategoryName_CategoryFragment = graphql(/* GraphQL */ `
	fragment ProductCategoryName_CategoryFragment on Category {
		__typename
		id
		name
		translation(languageCode: $languageCode) {
			__typename
			id
			name
		}
	}
`);

interface Props {
	readonly category: FragmentType<
		typeof ProductCategoryName_CategoryFragment
	>;
}

export function ProductCategoryName({category}: Props) {
	const {name} = applyTranslation(
		getFragment(ProductCategoryName_CategoryFragment, category),
	);
	return <span className={cn('text-gray-400')}>{name}</span>;
}
