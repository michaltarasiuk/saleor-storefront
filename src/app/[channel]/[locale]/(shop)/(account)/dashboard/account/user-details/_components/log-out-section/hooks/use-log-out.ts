import {useCallback} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {refreshAccessToken} from '@/modules/account/tools/refresh-access-token';

async function logOut() {
	return await fetch(formatPathname(...APP_ROUTES.API.LOG_OUT), {
		method: 'POST',
	});
}

export function useLogOut() {
	const intlRouter = useIntlRouter();

	return useCallback(async () => {
		const response = await logOut();

		if (!response.ok) {
			const refreshResult = await refreshAccessToken();

			if (refreshResult.ok) {
				await logOut();
			}
		}
		intlRouter.push(formatPathname(APP_ROUTES.PRODUCTS));
	}, [intlRouter]);
}
