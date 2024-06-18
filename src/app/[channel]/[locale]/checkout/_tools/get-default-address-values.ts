import type {
	Address,
	ChoiceValue,
	CountryCode,
	Node,
	ObjectWithMetadata,
} from '@/graphql/generated/graphql';
import {capitalize} from '@/lib/tools/capitalize';

import type {AddressFieldsSchema} from '../_hooks/use-address-fields-schema';

type AddressValues = Partial<
	Omit<Address, keyof Node | keyof ObjectWithMetadata>
>;

interface Input {
	readonly addressValues: AddressValues;
	readonly countryCode: CountryCode;
	readonly cityChoices: ReadonlyArray<ChoiceValue>;
	readonly countryAreaChoices: ReadonlyArray<ChoiceValue>;
}

type DefaultAddressValues = Partial<AddressFieldsSchema>;

export function getDefaultAddressValues({
	addressValues,
	countryCode,
	cityChoices,
	countryAreaChoices,
}: Input): DefaultAddressValues {
	const city = cityChoices.at(0)?.raw;
	const countryArea = countryAreaChoices.at(0)?.raw;

	return {
		...addressValues,
		...(countryCode && {country: countryCode}),
		...(addressValues?.city && {city: capitalize(addressValues.city)}),
		...(city && {city}),
		...(countryArea && {countryArea}),
	};
}
