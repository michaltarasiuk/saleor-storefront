import {match as matchLocale} from '@formatjs/intl-localematcher';
import {joinPathname, splitPathname} from '@repo/utils/pathname';
import Negotiator from 'negotiator';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {linguiConfigHelpers} from './i18n/utils';

export function middleware(request: NextRequest) {
  const {status} = checkLocaleInPathname(request.nextUrl.pathname);
  if (status !== 'matched') {
    const detectedLocale = detectLocaleFromAcceptLanguageHeader(
      request.headers
    );
    const updatedUrlWithLocale = new URL(
      joinPathname(
        detectedLocale ?? linguiConfigHelpers.defaultLocale,
        ...splitPathname(request.nextUrl.pathname)
      ),
      request.nextUrl.origin
    );
    return status === 'invalid'
      ? NextResponse.redirect(updatedUrlWithLocale)
      : NextResponse.rewrite(updatedUrlWithLocale);
  }
  return NextResponse.next();
}

function checkLocaleInPathname(
  pathname: string,
  locales = linguiConfigHelpers.locales
) {
  const [localeFromPath] = splitPathname(pathname);
  if (!localeFromPath) {
    return {status: 'unspecified'} as const;
  }
  return locales.includes(localeFromPath)
    ? ({status: 'matched'} as const)
    : ({status: 'invalid'} as const);
}

function detectLocaleFromAcceptLanguageHeader(
  headers: Headers,
  defaultLocale = linguiConfigHelpers.defaultLocale,
  locales = linguiConfigHelpers.locales
) {
  const acceptLanguageHeader = headers.get('accept-language');
  if (!acceptLanguageHeader) {
    return;
  }
  const negotiator = new Negotiator({
    headers: {
      'accept-language': acceptLanguageHeader,
    },
  });
  const requestedLocales = negotiator.languages();
  const sortedLocales = locales.toSorted((a, b) => b.length - a.length);
  try {
    return matchLocale(requestedLocales, sortedLocales, defaultLocale);
  } catch {
    return;
  }
}

export const config = {
  runtime: 'nodejs',
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - monitoring (used by Sentry)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|monitoring).*)',
  ],
};
