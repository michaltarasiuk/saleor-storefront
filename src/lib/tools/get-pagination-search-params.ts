import type {PageVariables} from '../hooks/use-pagination';
import {isDefined} from './is-defined';

export const PAGINATION_SEARCH_PARAM_NAMES = {
	FIRST: 'first',
	AFTER: 'after',
	LAST: 'last',
	BEFORE: 'before',
} as const;

export function getPaginationSearchParams(
	searchParams: URLSearchParams,
	defaultPageSize: number,
): PageVariables {
	const firstParam = searchParams.get(PAGINATION_SEARCH_PARAM_NAMES.FIRST);

	if (isDefined(firstParam)) {
		const after = searchParams.get(PAGINATION_SEARCH_PARAM_NAMES.AFTER);

		return {first: Number(firstParam), ...(isDefined(after) && {after})};
	}
	const lastParam = searchParams.get(PAGINATION_SEARCH_PARAM_NAMES.LAST);

	if (isDefined(lastParam)) {
		const before = searchParams.get(PAGINATION_SEARCH_PARAM_NAMES.BEFORE);

		return {last: Number(lastParam), ...(isDefined(before) && {before})};
	}
	return {first: defaultPageSize};
}
