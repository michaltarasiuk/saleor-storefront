import 'server-only';

import {headers} from 'next/headers';
import invariant from 'tiny-invariant';

import {assertAvailableLocale} from '@/i18n/tools/assert-available-locale';
import {isDefined} from '@/lib/tools/is-defined';

import {CUSTOM_REQUEST_HEADERS} from '../set-base-path-headers-handler';

export function readLocaleHeader() {
	const locale = headers().get(CUSTOM_REQUEST_HEADERS.LOCALE);
	invariant(isDefined(locale), "Locale isn't defined");
	assertAvailableLocale(locale);

	return locale;
}
