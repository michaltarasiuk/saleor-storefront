import invariant from 'tiny-invariant';

import type {AvailableLocale} from '../consts';
import {isAvailableLocale} from './is-available-locale';

export function assertAvailableLocale(
	locale: string,
): asserts locale is AvailableLocale {
	invariant(isAvailableLocale(locale), `${locale} locale not available`);
}
