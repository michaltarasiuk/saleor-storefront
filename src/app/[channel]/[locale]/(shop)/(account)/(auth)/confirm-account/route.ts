import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {APP_ROUTES} from '@/lib/consts';
import {isDefined} from '@/lib/tools/is-defined';

import {confirmAccount} from './_tools/confirm-account';

export async function GET({nextUrl: {origin, searchParams}}: NextRequest) {
	const email = searchParams.get('email');
	const token = searchParams.get('token');

	if (isDefined(email) && isDefined(token)) {
		const {user} =
			(await confirmAccount({email, token})).confirmAccount ?? {};

		if (user?.isActive) {
			return NextResponse.redirect(new URL(APP_ROUTES.LOGIN, origin));
		}
	}
	return NextResponse.next();
}
