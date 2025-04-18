import {match as matchLocale} from '@formatjs/intl-localematcher';
import {joinPathname, splitPathname} from '@repo/utils/pathname';
import Negotiator from 'negotiator';
import {NextRequest, NextResponse} from 'next/server';

import {linguiConfigHelpers} from './i18n/utils';

export function middleware(request: NextRequest) {
  const localeValidationResult = validateLocaleInPathname(
    request.nextUrl.pathname
  );
  if (localeValidationResult.status !== 'matched') {
    const localeByAcceptLanguageHeader = getLocaleByAcceptLanguageHeader(
      request.headers
    );
    const nextUrlWithLocale = new URL(
      joinPathname(
        localeByAcceptLanguageHeader ?? linguiConfigHelpers.defaultLocale,
        ...splitPathname(request.nextUrl.pathname)
      ),
      request.nextUrl.origin
    );
    return localeValidationResult.status === 'invalid'
      ? NextResponse.redirect(nextUrlWithLocale)
      : NextResponse.rewrite(nextUrlWithLocale);
  }
  return NextResponse.next();
}

function validateLocaleInPathname(
  nextUrlPathName: string,
  availableLocales = linguiConfigHelpers.supportedLocales
) {
  const [requestedLocale] = splitPathname(nextUrlPathName);
  if (!requestedLocale) {
    return {status: 'unspecified'} as const;
  }
  if (!availableLocales.includes(requestedLocale)) {
    return {status: 'invalid'} as const;
  }
  return {status: 'matched'} as const;
}

function getLocaleByAcceptLanguageHeader(
  requestHeaders: Headers,
  defaultLocale = linguiConfigHelpers.defaultLocale,
  availableLocales = linguiConfigHelpers.supportedLocales
) {
  const acceptLanguageHeader = requestHeaders.get('accept-language');
  if (!acceptLanguageHeader) {
    return;
  }
  const negotiator = new Negotiator({
    headers: {
      'accept-language': acceptLanguageHeader,
    },
  });
  const requestedLocales = negotiator.languages();
  // https://github.com/formatjs/formatjs/issues/4469
  const sortedLocales = availableLocales.toSorted(
    (a, b) => b.length - a.length
  );
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
