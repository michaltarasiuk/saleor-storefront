import {URLSearchParams} from 'url';

import {PAGINATION_SEARCH_PARAM_NAMES} from './get-pagination-search-params';
import {isDefined} from './is-defined';

export function getPageSize(searchParams: URLSearchParams): number | undefined;
export function getPageSize(
	searchParams: URLSearchParams,
	defaultPageSize: number,
): number;
export function getPageSize(
	searchParams: URLSearchParams,
	defaultPageSize?: number,
) {
	const pageSize =
		searchParams.get(PAGINATION_SEARCH_PARAM_NAMES.FIRST) ??
		searchParams.get(PAGINATION_SEARCH_PARAM_NAMES.LAST);

	return isDefined(pageSize) ? Number(pageSize) : defaultPageSize;
}

if (import.meta.vitest) {
	const {test, expect} = import.meta.vitest;

	test('to be parsed page size', () => {
		const searchParams = new URLSearchParams([['first', '15']]);
		expect(getPageSize(searchParams)).toBe(15);
	});

	test('to be default when page size is not defined', () => {
		const searchParams = new URLSearchParams();
		expect(getPageSize(searchParams, 10)).toBe(10);
	});
}
