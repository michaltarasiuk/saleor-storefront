import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {APP_ROUTES} from '@/lib/consts';
import {isDefined} from '@/lib/tools/type-guards/is-defined';

import {confirmAccount} from './_tools/confirm-account';

export async function GET({nextUrl: {origin, searchParams}}: NextRequest) {
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (isDefined(email) && isDefined(token)) {
    const response = await confirmAccount({email, token});
    const {user} = response.confirmAccount ?? {};

    if (user?.isActive) {
      return NextResponse.redirect(new URL(APP_ROUTES.LOGIN, origin));
    }
  }
  return NextResponse.next();
}