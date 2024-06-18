import {useQuery} from '@urql/next';

import {graphql} from '@/graphql/generated';
import type {ProductItems_ProductsQueryQueryVariables} from '@/graphql/generated/graphql';

import {ProductItem} from '../../../_components/product-item';

export const ProductItems_ProductsQuery = graphql(/* GraphQL */ `
	query ProductItems_ProductsQuery(
		$first: Int
		$after: String
		$last: Int
		$before: String
		$channel: String
		$categoryIds: [ID!]
		$collectionIds: [ID!]
		$languageCode: LanguageCodeEnum!
	) {
		products(
			first: $first
			after: $after
			last: $last
			before: $before
			filter: {categories: $categoryIds, collections: $collectionIds}
			channel: $channel
		) {
			edges {
				node {
					id
					...ProductItem_ProductFragment
				}
			}
			pageInfo {
				hasNextPage
				endCursor
				hasPreviousPage
				startCursor
			}
		}
	}
`);

interface Props {
	readonly variables: ProductItems_ProductsQueryQueryVariables;
}

export function ProductItems({variables}: Props) {
	const [{data}] = useQuery({query: ProductItems_ProductsQuery, variables});

	return data?.products?.edges.map(({node}) => (
		<ProductItem key={node.id} product={node} />
	));
}
