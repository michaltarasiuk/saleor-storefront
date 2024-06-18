import {isCountryCode} from '@/i18n/tools/is-country-code';

export function extractCountryCode({
	country,
}:
	| {
			readonly country?: unknown;
	  }
	| undefined = {}) {
	if (isCountryCode(country)) return country;
	return null;
}
