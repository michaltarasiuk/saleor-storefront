import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

export function refreshAccessToken() {
	return fetch(formatPathname(...APP_ROUTES.API.REFRESH), {
		method: 'POST',
	});
}
