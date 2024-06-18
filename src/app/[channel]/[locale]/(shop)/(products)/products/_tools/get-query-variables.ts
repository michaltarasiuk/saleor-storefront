import type {ProductItems_ProductsQueryQueryVariables} from '@/graphql/generated/graphql';
import {getBasePath} from '@/i18n/context/get-base-path';
import {basePathToQueryVariables} from '@/i18n/tools/base-path-to-query-variables';
import type {PageVariablesKey} from '@/lib/hooks/use-pagination';
import {isDefined} from '@/lib/tools/is-defined';

import {getCategoryIds} from './get-category-ids';
import {getCollectionIds} from './get-collection-ids';

export type QueryVariables = Omit<
	ProductItems_ProductsQueryQueryVariables,
	PageVariablesKey
>;

export async function getQueryVariables(
	searchParams: URLSearchParams,
): Promise<QueryVariables> {
	const basePath = getBasePath();

	const [channel] = basePath;

	const [categoryIds, collectionIds] = await Promise.all([
		getCategoryIds(searchParams),
		getCollectionIds(searchParams, {channel}),
	]);
	return {
		...basePathToQueryVariables(...basePath),
		...(isDefined(categoryIds) && {categoryIds}),
		...(isDefined(collectionIds) && {collectionIds}),
	};
}
