import invariant from 'tiny-invariant';

import {assertAvailableChannel} from '@/i18n/tools/assert-available-channel';
import {assertAvailableLocale} from '@/i18n/tools/assert-available-locale';
import {formatLocale} from '@/i18n/tools/format-locale';
import {isDefined} from '@/lib/tools/is-defined';
import {splitPathname} from '@/lib/tools/split-pathname';

import type {Handler} from './create-middleware';

export const CUSTOM_REQUEST_HEADERS = {
	CHANNEL: 'X-Channel',
	LOCALE: 'X-Locale',
};

export const setBasePathHeadersHandler: Handler = function setBasePathHeaders({
	req,
	EarlyReturnResponse,
}) {
	const segments = splitPathname(req.nextUrl.pathname);

	const [channelSegment] = segments;
	invariant(isDefined(channelSegment), 'Missing channel segment');
	assertAvailableChannel(channelSegment);

	const [, localeSegment] = segments;
	invariant(isDefined(localeSegment), 'Missing locale segment');
	assertAvailableLocale(localeSegment);

	const formattedLocale = formatLocale(localeSegment);

	const updatedHeaders = new Headers(req.headers);
	updatedHeaders.set(CUSTOM_REQUEST_HEADERS.CHANNEL, channelSegment);
	updatedHeaders.set(CUSTOM_REQUEST_HEADERS.LOCALE, formattedLocale);

	EarlyReturnResponse.next({
		request: {headers: updatedHeaders},
	});
};
