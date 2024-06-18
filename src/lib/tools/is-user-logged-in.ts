import 'server-only';

import {hasAccessToken} from '@/modules/account/tools/cookies';

export function isUserLoggedIn() {
	return hasAccessToken();
}
