import {graphql} from '@/graphql/generated';
import type {GetCollectionIdsQueryVariables} from '@/graphql/generated/graphql';
import {fetchQueryData} from '@/lib/tools/get-client';
import {isDefined} from '@/lib/tools/is-defined';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../_consts';
import {MAX_PAGE_SIZE} from '../_consts';

const GetCollectionIds = graphql(/* GraphQL */ `
	query GetCollectionIds($first: Int!, $slugs: [String!]!, $channel: String) {
		collections(first: $first, filter: {slugs: $slugs}, channel: $channel) {
			edges {
				node {
					id
				}
			}
		}
	}
`);

export async function getCollectionIds(
	searchParams: URLSearchParams,
	{channel}: Pick<GetCollectionIdsQueryVariables, 'channel'>,
) {
	const collectionSlugs = searchParams.getAll(
		PRODUCTS_PAGE_SEARCH_PARAM_NAMES.COLLECTION,
	);
	if (!collectionSlugs.length) {
		return undefined;
	}
	const {collections} = await fetchQueryData(GetCollectionIds, {
		first: Math.min(collectionSlugs.length, MAX_PAGE_SIZE),
		slugs: collectionSlugs,
		...(isDefined(channel) && {channel}),
	});
	return collections?.edges.map(({node: {id}}) => id);
}
