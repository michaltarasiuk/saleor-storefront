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
  switch (pathnameLocaleStatus) {
    case 'missing':
    case 'invalid': {
      const preferredLocale = getPreferredLocale(request.headers);
      const updatedUrlWithLocale = new URL(
        prependSegment(
          request.nextUrl.pathname,
          preferredLocale ?? linguiConfigHelpers.defaultLocale
        ),
        request.nextUrl.origin
      );

      let response: NextResponse;
      if (pathnameLocaleStatus === 'missing') {
        response = NextResponse.rewrite(updatedUrlWithLocale);
      } else {
        response = NextResponse.redirect(updatedUrlWithLocale);
      }
      return response;
    }
    default:
      return NextResponse.next();
  }
}

function determineLocaleStatusInPathname(
  pathname: string,
  locales = linguiConfigHelpers.locales
) {
  const [localeFromPath] = splitPathname(pathname);
  let status: 'valid' | 'invalid' | 'missing';
  if (!localeFromPath) {
    status = 'missing';
  } else if (locales.includes(localeFromPath)) {
    status = 'valid';
  } else {
    status = 'invalid';
  }
  return status;
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
