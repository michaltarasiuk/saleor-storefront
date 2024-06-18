import type {ReadonlyURLSearchParams} from 'next/navigation';

import type {PageVariables} from '../hooks/use-pagination';
import {deletePaginationSearchParams} from './delete-pagination-search-params';
import {PAGINATION_SEARCH_PARAM_NAMES} from './get-pagination-search-params';
import {isDefined} from './is-defined';

export function updatePaginationSearchParams(
	searchParams: ReadonlyURLSearchParams,
	pageVariables: PageVariables,
) {
	const updatedSearchParams = new URLSearchParams(searchParams);

	deletePaginationSearchParams(updatedSearchParams);

	if (PAGINATION_SEARCH_PARAM_NAMES.FIRST in pageVariables) {
		const {first, after} = pageVariables;

		updatedSearchParams.set(
			PAGINATION_SEARCH_PARAM_NAMES.FIRST,
			first.toString(),
		);
		if (isDefined(after)) {
			updatedSearchParams.set(PAGINATION_SEARCH_PARAM_NAMES.AFTER, after);
		}
	} else if (PAGINATION_SEARCH_PARAM_NAMES.LAST in pageVariables) {
		const {last, before} = pageVariables;

		updatedSearchParams.set(
			PAGINATION_SEARCH_PARAM_NAMES.LAST,
			last.toString(),
		);
		if (isDefined(before)) {
			updatedSearchParams.set(
				PAGINATION_SEARCH_PARAM_NAMES.BEFORE,
				before,
			);
		}
	}
	return updatedSearchParams;
}
