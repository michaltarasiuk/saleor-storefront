import type {AnyVariables} from '@urql/core';
import {useSearchParams} from 'next/navigation';
import {useEffect, useMemo} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {usePagination} from '@/lib/hooks/use-pagination';
import {getPaginationSearchParams} from '@/lib/tools/get-pagination-search-params';
import {updatePaginationSearchParams} from '@/lib/tools/update-pagination-search-params';

export function usePaginationVariables<QueryVariables extends AnyVariables>({
	queryVariables,
	defaultPageSize,
	updateSearchParams,
	restoreFromUrl,
}: {
	readonly queryVariables: QueryVariables;
	readonly defaultPageSize: number;
	readonly updateSearchParams: boolean;
	readonly restoreFromUrl: boolean;
}) {
	const searchParams = useSearchParams();

	const [data, dispatch] = usePagination(() =>
		restoreFromUrl
			? getPaginationSearchParams(searchParams, defaultPageSize)
			: {first: defaultPageSize},
	);
	const newSearchParams = useMemo(
		() => updatePaginationSearchParams(searchParams, data.currentVariables),
		[data.currentVariables, searchParams],
	);
	useUpdateSearchParmsOnMount({
		newSearchParams,
		shouldUpdate: updateSearchParams,
	});

	const currentVariables = useMemo(
		() => ({...data.currentVariables, ...queryVariables}),
		[data.currentVariables, queryVariables],
	);
	const variablesArray = useMemo(
		() =>
			data.variablesArray.map((variables) => ({
				...variables,
				...queryVariables,
			})),
		[data.variablesArray, queryVariables],
	);
	return [{currentVariables, variablesArray}, dispatch] as const;
}

function useUpdateSearchParmsOnMount({
	newSearchParams,
	shouldUpdate,
}: {
	readonly newSearchParams: URLSearchParams;
	readonly shouldUpdate: boolean;
}) {
	const router = useIntlRouter();

	useEffect(() => {
		if (shouldUpdate) {
			router.push(`/${APP_ROUTES.PRODUCTS}/?${newSearchParams}`);
		}
	}, [router, newSearchParams, shouldUpdate]);
}
