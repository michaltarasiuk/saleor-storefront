import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';

import type {getBasePath} from '../context/get-base-path';

export function basePathToQueryVariables(
	...params: ReturnType<typeof getBasePath>
) {
	const [channel, locale] = params;
	const languageCode = localeToLangCode(locale);

	return {channel, languageCode};
}
