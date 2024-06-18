import {useQuery} from '@urql/next';
import type {UnionToIntersection} from 'type-fest';

import {graphql} from '@/graphql/generated';
import type {CategoryDropdownItems_CategoriesQueryQueryVariables} from '@/graphql/generated/graphql';
import {useHandleNextPage} from '@/lib/hooks/use-handle-next-page';
import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';

import {LoadMoreFilters} from '../LoadMoreFilters';
import {CategoryDropdownItem} from './CategoryDropdownItem';

const CategoryDropdownItems_CategoriesQuery = graphql(/* GraphQL */ `
	query CategoryDropdownItems_CategoriesQuery(
		$first: Int
		$after: String
		$languageCode: LanguageCodeEnum!
	) {
		categories(first: $first, after: $after) {
			edges {
				node {
					__typename
					id
					...CategoryDropdownItem_CategoryFragment
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
	readonly variables: CategoryDropdownItems_CategoriesQueryQueryVariables;
	readonly isLastPage: boolean;
} & Pick<
	UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
	'handleNextPage' | 'onNextPage'
>;

export function CategoryDropdownItems({
	variables,
	isLastPage,
	...actions
}: Props) {
	const [{data}] = useQuery({
		query: CategoryDropdownItems_CategoriesQuery,
		variables,
	});
	const {edges, pageInfo} = data?.categories ?? {};

	useHandleNextPage({...(pageInfo && {pageInfo}), isLastPage, ...actions});

	return (
		<>
			{edges?.map(({node}) => (
				<CategoryDropdownItem key={node.id} category={node} />
			))}
			{isLastPage && pageInfo?.hasNextPage && (
				<LoadMoreFilters {...actions} />
			)}
		</>
	);
}
