import {match} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import {AVAILABLE_LOCALES, DEFAULT_LOCALE} from '@/i18n/consts';
import {isAvailableCiLocale} from '@/i18n/tools/is-available-ci-locale';
import {ciEquals} from '@/lib/tools/ci-equals';
import {isDefined} from '@/lib/tools/is-defined';

export function negotiateCiLocale(headers: Headers, preferredLocale?: string) {
	const preferredLocales = new Negotiator({
		headers: Object.fromEntries(headers),
	}).languages();

	let locale: string;

	try {
		const requestedLocales =
			isDefined(preferredLocale) && isAvailableCiLocale(preferredLocale)
				? [preferredLocale, ...preferredLocales]
				: preferredLocales;

		// Destructure `AVAILABLE_LOCALES` to avoid readonly issue
		locale = match(
			requestedLocales,
			[...AVAILABLE_LOCALES],
			DEFAULT_LOCALE,
		);
	} catch {
		locale = DEFAULT_LOCALE;
	}
	return isDefined(preferredLocale) && ciEquals(preferredLocale, locale)
		? preferredLocale
		: locale;
}
