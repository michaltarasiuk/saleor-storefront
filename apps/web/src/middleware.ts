import {match as matchLocale} from '@formatjs/intl-localematcher';
import {prependSegment, splitPathname} from '@repo/utils/pathname';
import Negotiator from 'negotiator';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {linguiConfigHelpers} from './i18n/utils';
import {assertNever} from '@repo/utils/assert-never';

export function middleware(request: NextRequest) {
  const {status} = determineLocaleStatusInPathname(request.nextUrl.pathname);

  let response: NextResponse;
  switch (status) {
    case 'valid':
      response = NextResponse.next();
      break;
    case 'invalid':
      response = NextResponse.redirect(createLocalizedUrl(request));
      break;
    case 'missing':
      response = NextResponse.rewrite(createLocalizedUrl(request));
      break;
    default:
      assertNever(status);
  }
  return response;
}

function createLocalizedUrl(request: NextRequest) {
  const userPreferredLocale = getPreferredLocale(request.headers);
  const localizedPathname = prependSegment(
    request.nextUrl.pathname,
    userPreferredLocale ?? linguiConfigHelpers.defaultLocale
  );
  return new URL(localizedPathname, request.nextUrl.origin);
}

function determineLocaleStatusInPathname(
  pathname: string,
  locales = linguiConfigHelpers.locales
) {
  const [localeFromPath] = splitPathname(pathname);

  let status: 'valid' | 'invalid' | 'missing';
  if (!localeFromPath) {
    status = 'missing';
  } else if (!locales.includes(localeFromPath)) {
    status = 'invalid';
  } else {
    status = 'valid';
  }
  return {status};
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
