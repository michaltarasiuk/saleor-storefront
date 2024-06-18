import {ciEquals} from '@/lib/tools/ci-equals';

import {AVAILABLE_LOCALES} from '../consts';

export function isAvailableCiLocale(preferredLocale: string) {
	return AVAILABLE_LOCALES.some((locale) =>
		ciEquals(locale, preferredLocale),
	);
}
