import {match as matchLocale} from '@formatjs/intl-localematcher';
import {joinPathname, splitPathname} from '@repo/utils/pathname';
import Negotiator from 'negotiator';
import {NextRequest, NextResponse} from 'next/server';

export function middleware(request: NextRequest) {
  const localeByPathname = getLocaleByPathname(request.nextUrl.pathname);
  if (!localeByPathname) {
    const isLocaleUnavailable = localeByPathname === false;
    const nextUrlWithLocale = new URL(
      joinPathname(
        getLocaleByAcceptLanguageHeader(request.headers),
        ...splitPathname(request.nextUrl.pathname)
      ),
      request.nextUrl
    );
    return isLocaleUnavailable
      ? NextResponse.redirect(nextUrlWithLocale)
      : NextResponse.rewrite(nextUrlWithLocale);
  }
  return NextResponse.next();
}

/**
 * @returns Locale if found, `false` if no available locale is found, or `undefined` if the locale is not defined.
 */
function getLocaleByPathname(
  nextUrlPathName: string,
  availableLocales = new Set(['en'])
): string | false | undefined {
  const requestedLocale = splitPathname(nextUrlPathName).at(0);
  if (!requestedLocale) {
    return;
  }
  try {
    new Intl.Locale(requestedLocale);
  } catch {
    return;
  }
  const availableLocaleRe = new RegExp(
    availableLocales.values().toArray().join('|')
  );
  if (!availableLocaleRe.test(requestedLocale)) {
    return false;
  }
  return requestedLocale;
}

function getLocaleByAcceptLanguageHeader(
  requestHeaders: Headers,
  sourceLocale = 'en',
  availableLocales = new Set(['en'])
) {
  const acceptLanguageHeader = requestHeaders.get('accept-language');
  if (!acceptLanguageHeader) {
    return sourceLocale;
  }
  const negotiator = new Negotiator({
    headers: {
      'accept-language': acceptLanguageHeader,
    },
  });
  const requestedLocales = negotiator.languages();
  // https://github.com/formatjs/formatjs/issues/4469
  const sortedLocales = availableLocales
    .values()
    .toArray()
    .sort((a, b) => b.length - a.length);
  try {
    return matchLocale(requestedLocales, sortedLocales, sourceLocale);
  } catch {
    return sourceLocale;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
