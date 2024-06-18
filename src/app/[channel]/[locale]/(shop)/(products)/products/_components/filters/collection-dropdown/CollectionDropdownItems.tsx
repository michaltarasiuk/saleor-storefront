import {useQuery} from '@urql/next';
import type {UnionToIntersection} from 'type-fest';

import {graphql} from '@/graphql/generated';
import type {CollectionDropdownItems_CategoriesQueryQueryVariables} from '@/graphql/generated/graphql';
import {useHandleNextPage} from '@/lib/hooks/use-handle-next-page';
import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';

import {LoadMoreFilters} from '../LoadMoreFilters';
import {CollectionDropdownItem} from './CollectionDropdownItem';

const CollectionDropdownItems_CategoriesQuery = graphql(/* GraphQL */ `
	query CollectionDropdownItems_CategoriesQuery(
		$first: Int
		$after: String
		$channel: String
		$languageCode: LanguageCodeEnum!
	) {
		collections(first: $first, after: $after, channel: $channel) {
			edges {
				node {
					__typename
					id
					...CollectionDropdownItem_CategoryFragment
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

type Props = {
	readonly variables: CollectionDropdownItems_CategoriesQueryQueryVariables;
	readonly isLastPage: boolean;
} & Pick<
	UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
	'handleNextPage' | 'onNextPage'
>;

export function CollectionDropdownItems({
	variables,
	isLastPage,
	...actions
}: Props) {
	const [{data}] = useQuery({
		query: CollectionDropdownItems_CategoriesQuery,
		variables,
	});
	const {edges, pageInfo} = data?.collections ?? {};

	useHandleNextPage({...(pageInfo && {pageInfo}), isLastPage, ...actions});

	return (
		<>
			{edges?.map(({node}) => (
				<CollectionDropdownItem key={node.id} collection={node} />
			))}
			{isLastPage && pageInfo?.hasNextPage && (
				<LoadMoreFilters {...actions} />
			)}
		</>
	);
}
