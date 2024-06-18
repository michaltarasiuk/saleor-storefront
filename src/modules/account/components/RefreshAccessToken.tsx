'use client';

import {useRefreshAccessToken} from '../hooks/use-refresh-access-token';

export function RefreshAccessToken() {
	useRefreshAccessToken();

	return null;
}
