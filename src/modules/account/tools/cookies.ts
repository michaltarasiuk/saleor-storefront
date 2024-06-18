import 'server-only';

import type {CookieSerializeOptions, serialize} from 'cookie';
import {cookies} from 'next/headers';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {COOKIE_NAMES} from '../consts';

export function getAccessToken() {
	return cookies().get(COOKIE_NAMES.ACCESS_TOKEN);
}

export function hasAccessToken() {
	return cookies().has(COOKIE_NAMES.ACCESS_TOKEN);
}

export function createAccessToken(
	value: string,
	options?: Pick<CookieSerializeOptions, 'expires'>,
) {
	return [
		COOKIE_NAMES.ACCESS_TOKEN,
		value,
		{
			secure: true,
			path: formatPathname(APP_ROUTES.ROOT),
			httpOnly: true,
			sameSite: 'lax',
			...options,
		},
	] satisfies Parameters<typeof serialize>;
}

export async function setAccessToken(value: string) {
	const accessToken = await createAccessToken(value);

	if (accessToken) {
		cookies().set(...accessToken);
	}
}

export function createRefreshToken(
	value: string,
	options?: Pick<CookieSerializeOptions, 'expires'>,
) {
	return [
		COOKIE_NAMES.REFRESH_TOKEN,
		value,
		{
			secure: true,
			httpOnly: true,
			sameSite: 'strict',
			path: formatPathname(...APP_ROUTES.API.REFRESH),
			...options,
		},
	] satisfies Parameters<typeof serialize>;
}

export function setRefreshToken(value: string) {
	cookies().set(...createRefreshToken(value));
}

export function deleteAllCookies() {
	cookies().set(...createAccessToken('', {expires: new Date(0)}));
	cookies().set(...createRefreshToken('', {expires: new Date(0)}));
}
