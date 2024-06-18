import {cookies} from 'next/headers';

import {isDefined} from '@/lib/tools/is-defined';
import {COOKIE_NAMES} from '@/modules/account/consts';

import {refreshAccessToken} from './_tools/refresh-access-token';
import {refreshFailed} from './_tools/refresh-failed';
import {refreshSucceeded} from './_tools/refresh-succeeded';

export async function POST() {
	const refreshToken = cookies().get(COOKIE_NAMES.REFRESH_TOKEN);

	if (!isDefined(refreshToken)) {
		return refreshFailed('Missing refresh token');
	}
	try {
		const {tokenRefresh} = await refreshAccessToken({
			refreshToken: refreshToken.value,
		});
		const {errors, token} = tokenRefresh ?? {};

		if (errors?.length || !isDefined(token)) {
			return refreshFailed('Failed to refresh access token');
		}
		return refreshSucceeded(token);
	} catch {
		return refreshFailed('Failed to refresh access token');
	}
}
