import {cookies} from 'next/headers';

import {isDefined} from '@/lib/tools/is-defined';
import {COOKIE_NAMES} from '@/modules/account/consts';

import {deactivateAllTokens} from './_tools/deactivate-all-tokens';
import {logOutFailed} from './_tools/log-out-failed';
import {logOutSucceeded} from './_tools/log-out-succeeded';

export async function POST() {
	const accessToken = cookies().get(COOKIE_NAMES.ACCESS_TOKEN);

	if (!isDefined(accessToken)) {
		return logOutFailed('Missing access token');
	}
	try {
		await deactivateAllTokens(accessToken.value);
		return logOutSucceeded();
	} catch {
		return logOutFailed('Failed to log out');
	}
}
