import type {AnyVariables} from '@urql/core';
import {startTransition, useCallback, useRef} from 'react';

import type {PageInfo} from '@/graphql/generated/graphql';
import {isDefined} from '@/lib/tools/is-defined';

import {PAGINATION_SEARCH_PARAM_NAMES} from '../tools/get-pagination-search-params';
import {usePaginationVariables} from './use-pagination-variables';

export function usePaginationActions<QueryVariables extends AnyVariables>(
	...params: Parameters<typeof usePaginationVariables<QueryVariables>>
) {
	const [data, dispatch] = usePaginationVariables(...params);

	const pageInfoRef = useRef<PageInfo>();

	const handlePrevPage = useCallback(
		(pageSize: number) => {
			if (!pageInfoRef.current) {
				return;
			}
			const {hasPreviousPage, startCursor} = pageInfoRef.current;

			if (hasPreviousPage && isDefined(startCursor)) {
				startTransition(() => {
					dispatch({type: 'prev', before: startCursor, pageSize});
				});
			}
		},
		[dispatch],
	);
	const handleNextPage = useCallback(
		(pageSize: number) => {
			if (!pageInfoRef.current) {
				return;
			}
			const {hasNextPage, endCursor} = pageInfoRef.current;

			if (hasNextPage && isDefined(endCursor)) {
				startTransition(() => {
					dispatch({type: 'next', after: endCursor, pageSize});
				});
			}
		},
		[dispatch],
	);
	const currentPageSize =
		PAGINATION_SEARCH_PARAM_NAMES.FIRST in data.currentVariables
			? data.currentVariables.first
			: data.currentVariables.last;

	const handlePageSizeChange = useCallback(
		(pageSize: number) => {
			if (pageSize !== currentPageSize) {
				startTransition(() => {
					dispatch({type: 'changePageSize', pageSize});
				});
			}
		},
		[currentPageSize, dispatch],
	);
	const onNextPage = useCallback((pageInfo: PageInfo) => {
		pageInfoRef.current = pageInfo;
	}, []);

	return [
		data,
		{handlePrevPage, handleNextPage, handlePageSizeChange, onNextPage},
	] as const;
}
