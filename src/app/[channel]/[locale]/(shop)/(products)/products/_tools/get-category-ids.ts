import {graphql} from '@/graphql/generated';
import {fetchQueryData} from '@/lib/tools/get-client';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../_consts';
import {MAX_PAGE_SIZE} from '../_consts';

const GetCategoryIds = graphql(/* GraphQL */ `
	query GetCategoryIds($first: Int!, $slugs: [String!]!) {
		categories(first: $first, filter: {slugs: $slugs}) {
			edges {
				node {
					id
				}
			}
		}
	}
`);

export async function getCategoryIds(searchParams: URLSearchParams) {
	const categorySlugs = searchParams.getAll(
		PRODUCTS_PAGE_SEARCH_PARAM_NAMES.CATEGORY,
	);
	if (!categorySlugs.length) {
		return undefined;
	}
	const {categories} = await fetchQueryData(GetCategoryIds, {
		first: Math.min(categorySlugs.length, MAX_PAGE_SIZE),
		slugs: categorySlugs,
	});
	return categories?.edges.map(({node: {id}}) => id);
}
