import {DEFAULT_LOCALE} from '@/i18n/consts';
import {isCountryCode} from '@/i18n/tools/is-country-code';
import {localeToCountryCode} from '@/i18n/tools/locale-to-country-code';
import {raise} from '@/lib/tools/raise';

const defaultCountryCode = localeToCountryCode(DEFAULT_LOCALE);

export function findCountryCode(...values: readonly unknown[]) {
	const countryCode = values.find(isCountryCode) ?? defaultCountryCode;
	return countryCode ?? raise('Country code is not defined');
}
