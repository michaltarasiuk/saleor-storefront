export function getCanonicalLocales(locale?: string | readonly string[]) {
	return Intl.getCanonicalLocales(locale);
}
