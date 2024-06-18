import type {AvailableLocale} from '../consts';
import {isCountryCode} from './is-country-code';

export function localeToCountryCode(locale: AvailableLocale) {
	const region = new Intl.Locale(locale).region;

	return isCountryCode(region) ? region : null;
}
