import type {CamelCase, ScreamingSnakeCase} from 'type-fest';

import type {AddressInput} from '@/graphql/generated/graphql';

export const ADDRESS_FIELDS: {
	readonly [FieldKey in ScreamingSnakeCase<
		keyof Pick<
			AddressInput,
			| 'country'
			| 'firstName'
			| 'lastName'
			| 'streetAddress1'
			| 'streetAddress2'
			| 'city'
			| 'countryArea'
			| 'postalCode'
		>
	>]: CamelCase<FieldKey>;
} = {
	COUNTRY: 'country',
	FIRST_NAME: 'firstName',
	LAST_NAME: 'lastName',
	STREET_ADDRESS1: 'streetAddress1',
	STREET_ADDRESS2: 'streetAddress2',
	CITY: 'city',
	COUNTRY_AREA: 'countryArea',
	POSTAL_CODE: 'postalCode',
};

export const ADDRESS_FIELDS_NAMES = Object.values(
	ADDRESS_FIELDS,
) as ReadonlyArray<(typeof ADDRESS_FIELDS)[keyof typeof ADDRESS_FIELDS]>;
