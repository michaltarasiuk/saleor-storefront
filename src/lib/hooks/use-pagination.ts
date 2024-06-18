import {useReducer} from 'react';
import invariant from 'tiny-invariant';

import {PAGINATION_SEARCH_PARAM_NAMES} from '../tools/get-pagination-search-params';

interface NextPageVariables {
	readonly first: number;
	readonly after?: string;
}
interface PrevPageVariables {
	readonly last: number;
	readonly before?: string;
}
export type PageVariables = NextPageVariables | PrevPageVariables;

export type PageVariablesKey = keyof PageVariables;

type Init = () => PageVariables;

export function usePagination(init: Init) {
	const [{pageSize, pageSizeToVariables}, dispatch] = useReducer(
		paginationReducer,
		undefined,
		() => initState(init),
	);
	const variablesState = pageSizeToVariables[pageSize];
	invariant(
		variablesState,
		`Not found variables state for "${pageSize}" page`,
	);

	const {currentIdx, variablesArray} = variablesState;

	const currentVariables = variablesArray[currentIdx];
	invariant(currentVariables, `Not found variables for "${currentIdx}" idx`);

	return [{currentVariables, variablesArray}, dispatch] as const;
}

interface PageVariablesState {
	readonly currentIdx: number;
	readonly variablesArray: readonly PageVariables[];
}
interface State {
	readonly pageSize: number;
	readonly pageSizeToVariables: {
		readonly [pageSize: number]: PageVariablesState;
	};
}

type Action = (
	| {readonly type: 'next'; readonly after: string}
	| {readonly type: 'prev'; readonly before: string}
	| {readonly type: 'changePageSize'}
) & {readonly pageSize: number};

function initState(init: Init): State {
	const pageVariables = init();

	const pageSize =
		PAGINATION_SEARCH_PARAM_NAMES.LAST in pageVariables
			? pageVariables.last
			: pageVariables.first;

	return {
		pageSize,
		pageSizeToVariables: {
			[pageSize]: {
				currentIdx: 0,
				variablesArray: [pageVariables],
			},
		},
	};
}

function paginationReducer(
	{pageSizeToVariables}: State,
	action: Action,
): State {
	const {currentIdx, variablesArray} =
		pageSizeToVariables[action.pageSize] ??
		initPageVariablesState(action.pageSize);

	let newVariablesState: PageVariablesState;

	switch (action.type) {
		case 'next': {
			const nextIdx = currentIdx + 1;

			if (variablesArray[nextIdx]) {
				newVariablesState = {currentIdx: nextIdx, variablesArray};
				break;
			}
			const {pageSize, after} = action;

			newVariablesState = {
				currentIdx: nextIdx,
				variablesArray: [...variablesArray, {first: pageSize, after}],
			};
			break;
		}
		case 'prev': {
			const prevIdx = currentIdx - 1;

			if (variablesArray[prevIdx]) {
				newVariablesState = {currentIdx: prevIdx, variablesArray};
				break;
			}
			const {pageSize, before} = action;

			newVariablesState = {
				currentIdx: 0,
				variablesArray: [{last: pageSize, before}, ...variablesArray],
			};
			break;
		}
		case 'changePageSize': {
			newVariablesState = {currentIdx: 0, variablesArray};
			break;
		}
		default: {
			action satisfies never;
			invariant(false, 'Dispatched unknown action');
		}
	}
	return {
		pageSize: action.pageSize,
		pageSizeToVariables: {
			...pageSizeToVariables,
			[action.pageSize]: newVariablesState,
		},
	};
}

function initPageVariablesState(pageSize: number): PageVariablesState {
	return {currentIdx: 0, variablesArray: [{first: pageSize}]};
}
