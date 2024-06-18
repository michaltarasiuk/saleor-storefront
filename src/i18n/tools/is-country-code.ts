import {CountryCode} from '@/graphql/generated/graphql';
import {capitalize} from '@/lib/tools/capitalize';

export function isCountryCode(value: unknown): value is CountryCode {
	return typeof value === 'string' && capitalize(value) in CountryCode;
}
