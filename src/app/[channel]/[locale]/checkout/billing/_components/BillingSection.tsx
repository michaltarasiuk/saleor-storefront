import invariant from 'tiny-invariant';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import type {CountryCode} from '@/graphql/generated/graphql';
import {getBasePath} from '@/i18n/context/get-base-path';
import {FormattedMessage} from '@/i18n/react-intl';
import {localeToCountryCode} from '@/i18n/tools/locale-to-country-code';
import {cn} from '@/lib/tools/cn';
import {fetchQueryData} from '@/lib/tools/get-client';

import {Heading} from '../../_components/Heading';
import {findCountryCode} from '../../_tools/find-country-code';
import {getDefaultAddressValues} from '../../_tools/get-default-address-values';
import {BillingAddressForm} from './billing-address-form';

const BillingSection_ChannelQuery = graphql(/* GraphQL */ `
	query BillingSection_ChannelQuery($channel: String!) {
		channel(slug: $channel) {
			...BillingAddressForm_ChannelFragment
		}
	}
`);

const BillingSection_AddressValidationRulesQuery = graphql(/* GraphQL */ `
	query BillingSection_AddressValidationRulesQuery(
		$countryCode: CountryCode!
	) {
		addressValidationRules(countryCode: $countryCode) {
			cityChoices {
				raw
			}
			countryAreaChoices {
				raw
			}
			...BillingAddressForm_AddressValidationDataFragment
		}
	}
`);

const BillingSection_CheckoutFragment = graphql(/* GraphQL */ `
	fragment BillingSection_CheckoutFragment on Checkout {
		email
		billingAddress {
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
	readonly checkout: FragmentType<typeof BillingSection_CheckoutFragment>;
	readonly country: CountryCode | null;
}

export async function BillingSection({checkout, country}: Props) {
	const {email, billingAddress} = getFragment(
		BillingSection_CheckoutFragment,
		checkout,
	);

	const [channelParam, localeParam] = getBasePath();
	const countryCode = findCountryCode(
		country,
		billingAddress?.country.code,
		localeToCountryCode(localeParam),
	);

	const [{channel}, {addressValidationRules}] = await Promise.all([
		fetchQueryData(BillingSection_ChannelQuery, {
			channel: channelParam,
		}),
		fetchQueryData(BillingSection_AddressValidationRulesQuery, {
			countryCode,
		}),
	]);
	invariant(channel && addressValidationRules);

	return (
		<section className={cn('space-y-3')}>
			<Heading>
				<FormattedMessage
					defaultMessage="Billing address"
					id="6orx1c"
				/>
			</Heading>
			<BillingAddressForm
				defaultValues={{
					...(email && {email}),
					...getDefaultAddressValues({
						countryCode,
						addressValues: billingAddress ?? {},
						...addressValidationRules,
					}),
				}}
				channel={channel}
				addressValidationData={addressValidationRules}
			/>
		</section>
	);
}
