import {deleteAllCookies} from '@/modules/account/tools/cookies';

export function refreshFailed(statusText: string) {
	deleteAllCookies();

	return new Response(null, {
		status: 401,
		statusText,
		headers: {
			// TODO:
			// 'WWW-Authenticate': ''
		},
	});
}
