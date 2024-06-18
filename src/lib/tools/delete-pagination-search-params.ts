import {PAGINATION_SEARCH_PARAM_NAMES} from './get-pagination-search-params';

export function deletePaginationSearchParams(searchParams: URLSearchParams) {
	Object.values(PAGINATION_SEARCH_PARAM_NAMES).forEach((name) =>
		searchParams.delete(name),
	);
}

if (import.meta.vitest) {
	const {test, expect} = import.meta.vitest;

	test('delete pagination search params', () => {
		const searchParams = new URLSearchParams([
			['category', 'audiobooks'],
			['first', '10'],
		]);
		deletePaginationSearchParams(searchParams);

		expect(Array.from(searchParams.entries())).toEqual([
			['category', 'audiobooks'],
		]);
	});
}
