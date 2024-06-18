import {useMemo} from 'react';

import {useLocale} from '@/i18n/context/locale-context';
import {isCountryCode} from '@/i18n/tools/is-country-code';

export function useCountryOptions(countryCodes: readonly string[]) {
	const locale = useLocale();

	return useMemo(() => {
		const intlDisplayNames = new Intl.DisplayNames(locale, {
			type: 'region',
		});

		return countryCodes.flatMap((value) => {
			if (!isCountryCode(value)) {
				return [];
			}

			const label = intlDisplayNames.of(value);

			if (!label) {
				return [];
			}

			return [
				{
					label,
					value,
				},
			];
		});
	}, [countryCodes, locale]);
}
