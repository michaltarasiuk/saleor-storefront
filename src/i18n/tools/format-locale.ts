import invariant from 'tiny-invariant';

import {ciEquals} from '@/lib/tools/ci-equals';
import {isDefined} from '@/lib/tools/is-defined';

import {AVAILABLE_LOCALES} from '../consts';

export function formatLocale(locale: string) {
	const formattedLocale = AVAILABLE_LOCALES.find((l) => ciEquals(l, locale));
	invariant(isDefined(formattedLocale), `Couldn't format "${locale}" locale`);

	return formattedLocale;
}
