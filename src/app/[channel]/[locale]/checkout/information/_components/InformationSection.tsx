import invariant from 'tiny-invariant';

import type {FragmentType} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {graphql} from '@/graphql/generated/gql';
import type {CountryCode} from '@/graphql/generated/graphql';
import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToCountryCode} from '@/i18n/tools/locale-to-country-code';
import {fetchQueryData} from '@/lib/tools/get-client';

import {findCountryCode} from '../../_tools/find-country-code';
import {getDefaultAddressValues} from '../../_tools/get-default-address-values';
import {InformationForm} from './information-form';

const InformationSection_ChannelQuery = graphql(/* GraphQL */ `
	query InformationSection_ChannelQuery($channel: String!) {
		channel(slug: $channel) {
			...InformationForm_ChannelFragment
		}
	}
`);

const InformationSection_AddressValidationRulesQuery = graphql(/* GraphQL */ `
	query InformationSection_AddressValidationRulesQuery(
		$countryCode: CountryCode!
	) {
		addressValidationRules(countryCode: $countryCode) {
			cityChoices {
				raw
			}
			countryAreaChoices {
				raw
			}
			...InformationForm_AddressValidationDataFragment
		}
	}
`);

const InformationSection_CheckoutFragment = graphql(/* GraphQL */ `
	fragment InformationSection_CheckoutFragment on Checkout {
		email
		shippingAddress {
			country {
				code
				country
			}
			firstName
			lastName
			streetAddress1
			streetAddress2
			city
			countryArea
			postalCode
		}
	}
`);

interface Props {
	readonly checkout: FragmentType<typeof InformationSection_CheckoutFragment>;
	readonly country: CountryCode | null;
}

export async function InformationSection({checkout, country}: Props) {
	const {email, shippingAddress} = getFragment(
		InformationSection_CheckoutFragment,
		checkout,
	);

	const [channelParam, localeParam] = getBasePath();
	const countryCode = findCountryCode(
		country,
		shippingAddress?.country.code,
		localeToCountryCode(localeParam),
	);

	const [{channel}, {addressValidationRules}] = await Promise.all([
		fetchQueryData(InformationSection_ChannelQuery, {
			channel: channelParam,
		}),
		fetchQueryData(InformationSection_AddressValidationRulesQuery, {
			countryCode,
		}),
	]);
	invariant(channel && addressValidationRules);

	return (
		<InformationForm
			defaultValues={{
				...(email && {email}),
				...getDefaultAddressValues({
					countryCode,
					addressValues: shippingAddress ?? {},
					...addressValidationRules,
				}),
			}}
			channel={channel}
			addressValidationData={addressValidationRules}
		/>
	);
}
