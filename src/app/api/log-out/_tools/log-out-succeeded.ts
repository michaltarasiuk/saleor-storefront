import {deleteAllCookies} from '@/modules/account/tools/cookies';

export async function logOutSucceeded() {
	deleteAllCookies();

	return new Response(null, {
		status: 200,
	});
}
