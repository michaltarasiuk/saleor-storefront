import type {AvailableLocale} from '../consts';
import {AVAILABLE_LOCALES} from '../consts';

export function isAvailableLocale(locale: string): locale is AvailableLocale {
	// See for type assertion: https://stackoverflow.com/a/56745484
	return (AVAILABLE_LOCALES as readonly string[]).includes(locale);
}
