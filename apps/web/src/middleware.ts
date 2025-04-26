import {match as matchLocale} from '@formatjs/intl-localematcher';
import {prependSegment, splitPathname} from '@repo/utils/pathname';
import Negotiator from 'negotiator';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {linguiConfigHelpers} from './i18n/utils';

export function middleware(request: NextRequest) {
  const pathnameLocaleStatus = determineLocaleStatusInPathname(
    request.nextUrl.pathname
  );
  if (pathnameLocaleStatus === 'valid') {
    return NextResponse.next();
  }

  const preferredLocale =
    getPreferredLocale(request.headers) ?? linguiConfigHelpers.defaultLocale;
  const updatedUrlWithLocale = new URL(
    prependSegment(request.nextUrl.pathname, preferredLocale),
    request.nextUrl.origin
  );

  return pathnameLocaleStatus === 'missing'
    ? NextResponse.rewrite(updatedUrlWithLocale)
    : NextResponse.redirect(updatedUrlWithLocale);
}

function determineLocaleStatusInPathname(
  pathname: string,
  locales = linguiConfigHelpers.locales
) {
  const [localeFromPath] = splitPathname(pathname);
  if (!localeFromPath) {
    return 'missing';
  }
  return locales.includes(localeFromPath) ? 'valid' : 'invalid';
}

function getPreferredLocale(
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
