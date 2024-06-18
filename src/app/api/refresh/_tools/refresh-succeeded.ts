import {serialize} from 'cookie';

import {createAccessToken} from '@/modules/account/tools/cookies';

export async function refreshSucceeded(refreshedAccessToken: string) {
	const accessToken = await createAccessToken(refreshedAccessToken);

	return new Response(null, {
		status: 200,
		headers: {
			...(accessToken && {
				'Set-Cookie': serialize(...accessToken),
			}),
		},
	});
}
