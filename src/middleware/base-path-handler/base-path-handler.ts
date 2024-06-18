import {formatLocale} from '@/i18n/tools/format-locale';
import {formatPathname} from '@/lib/tools/format-pathname';
import {splitPathname} from '@/lib/tools/split-pathname';

import type {Handler} from '../create-middleware';
import {negotiateChannel} from './negotiate-channel';
import {negotiateCiLocale} from './negotiate-ci-locale';

export const basePathHandler: Handler = function basePathHandler({
	req,
	EarlyReturnResponse,
}) {
	const segments = splitPathname(req.nextUrl.pathname);

	const [, localeSegment] = segments;
	const preferredLocale = negotiateCiLocale(req.headers, localeSegment);
	const locale = formatLocale(preferredLocale);

	const [channelSegment] = segments;
	const channel = negotiateChannel(locale, channelSegment);

	if (channelSegment !== channel || localeSegment !== preferredLocale) {
		const updatedUrl = req.nextUrl.clone();
		updatedUrl.pathname = formatPathname(channel, locale, ...segments);
		EarlyReturnResponse.redirect(updatedUrl);
	}
	if (preferredLocale !== locale) {
		const updatedUrl = req.nextUrl.clone();
		updatedUrl.pathname = formatPathname(
			channel,
			locale,
			...segments.slice(2),
		);
		EarlyReturnResponse.rewrite(updatedUrl);
	}
};
