import {useSearchParams} from 'next/navigation';
import {useCallback, useTransition} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {useBasePathRelative} from '@/lib/hooks/use-base-path-relative';

export const COUNTRY_SEARCH_PARAM_NAME = 'country';

export function useSetCountrySearchParam() {
	const basePathRelative = useBasePathRelative();
	const searchParams = useSearchParams();
	const intlRouter = useIntlRouter();
	const [routeIsPending, startTransition] = useTransition();

	const setCountrySearchParam = useCallback(
		(value: string) => {
			const newSearchParams = new URLSearchParams(
				searchParams.toString(),
			);
			newSearchParams.set(COUNTRY_SEARCH_PARAM_NAME, value);

			startTransition(() => {
				intlRouter.push(
					basePathRelative + '?' + newSearchParams.toString(),
				);
				intlRouter.refresh();
			});
		},
		[basePathRelative, intlRouter, searchParams],
	);

	return {
		routeIsPending,
		setCountrySearchParam,
	};
}
