import {createServerContext, useContext} from 'react';

import type {AvailableLocale} from '../consts';
import {DEFAULT_LOCALE} from '../consts';

export const LocaleContext = createServerContext<AvailableLocale>(
	'LocaleContext',
	DEFAULT_LOCALE,
);

export function useLocale() {
	return useContext(LocaleContext);
}
