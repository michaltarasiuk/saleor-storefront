import 'server-only';

import {createIntl, createIntlCache} from '@formatjs/intl';
import {cache} from 'react';

import type {AvailableLocale} from './consts';
import {DEFAULT_LOCALE} from './consts';
import {getLocale} from './context/get-locale';
import {loadCompiledMessages} from './tools/load-compiled-messages';

const getIntlFn = cache(async (locale: AvailableLocale) => {
	const messages = await loadCompiledMessages(locale);

	return createIntl(
		{locale, defaultLocale: DEFAULT_LOCALE, messages},
		createIntlCache(),
	);
});

export async function getIntl(locale?: AvailableLocale) {
	return getIntlFn(locale ?? getLocale());
}
