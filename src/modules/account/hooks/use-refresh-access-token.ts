import {cache, use} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {refreshAccessToken} from '../tools/refresh-access-token';

const refreshAccessTokenFn = cache(refreshAccessToken);

export function useRefreshAccessToken() {
	const response = use(refreshAccessTokenFn());
	const intlRouter = useIntlRouter();

	if (response.ok) {
		intlRouter.refresh();
	} else {
		intlRouter.push(formatPathname(APP_ROUTES.LOGIN));
	}
}
