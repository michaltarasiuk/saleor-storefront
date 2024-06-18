import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/is-defined';
import {readChannelHeader} from '@/middleware/tools/read-channel-header';

import {confirmEmailChange} from './_tools/confirm-email-change';

export async function GET({nextUrl: {origin, searchParams}}: NextRequest) {
	const token = searchParams.get('token');

	if (isDefined(token)) {
		const {errors} =
			(await confirmEmailChange({
				channel: readChannelHeader(),
				token,
			})) ?? {};

		if (errors?.length) {
			return NextResponse.next();
		} else {
			return NextResponse.redirect(
				new URL(
					formatPathname(
						...APP_ROUTES.DASHBOARD.ACCOUNT.USER_DETAILS,
					),
					origin,
				),
			);
		}
	}
	return NextResponse.next();
}
