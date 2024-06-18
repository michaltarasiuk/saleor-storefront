import {useQuery} from '@urql/next';
import type {UnionToIntersection} from 'type-fest';

import type {ProductItems_ProductsQueryQueryVariables} from '@/graphql/generated/graphql';
import {FormattedMessage} from '@/i18n/react-intl';
import {useHandleNextPage} from '@/lib/hooks/use-handle-next-page';
import type {usePaginationActions} from '@/lib/hooks/use-pagination-actions';
import {cn} from '@/lib/tools/cn';

import {USE_PAGINATION} from '../../_consts';
import {DEFAULT_PAGE_SIZE} from '../../_consts';
import {PageNavButton} from './PageNavButton';
import {ProductItems_ProductsQuery} from './ProductItems';

type Props = {
	readonly variables: ProductItems_ProductsQueryQueryVariables;
} & Pick<
	UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
	'handlePrevPage' | 'handleNextPage' | 'onNextPage'
>;

export function PageNav({variables, ...actions}: Props) {
	// This request gets deduplicated
	const [{data}] = useQuery({query: ProductItems_ProductsQuery, variables});

	const {pageInfo} = data?.products ?? {};

	// Update page info for page nav handlers (`handleNextPage` and `handlePrevPage`)
	useHandleNextPage({
		...(pageInfo && {pageInfo}),
		isLastPage: true,
		...actions,
	});
	const pageSize = variables.first ?? variables.last ?? DEFAULT_PAGE_SIZE;

	return USE_PAGINATION ? (
		<div className={cn('flex w-full justify-between')}>
			<PageNavButton
				disabled={!pageInfo?.hasPreviousPage}
				onClick={() => actions.handlePrevPage(pageSize)}>
				<FormattedMessage defaultMessage="Previous page" id="k9hDFZ" />
			</PageNavButton>
			<PageNavButton
				disabled={!pageInfo?.hasNextPage}
				onClick={() => actions.handleNextPage(pageSize)}>
				<FormattedMessage defaultMessage="Next page" id="rBj9Ib" />
			</PageNavButton>
		</div>
	) : (
		<PageNavButton
			disabled={!pageInfo?.hasNextPage}
			onClick={() => actions.handleNextPage(pageSize)}>
			<FormattedMessage defaultMessage="Load more" id="00LcfG" />
		</PageNavButton>
	);
}
