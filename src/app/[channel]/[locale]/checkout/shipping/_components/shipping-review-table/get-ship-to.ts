import type {ShippingReviewTable_CheckoutFragmentFragment} from '@/graphql/generated/graphql';
import {capitalize} from '@/lib/tools/capitalize';

type ShippingAddress = NonNullable<
	ShippingReviewTable_CheckoutFragmentFragment['shippingAddress']
>;

export function getShipTo({
	streetAddress1,
	city,
	countryArea,
	postalCode,
	country,
}: ShippingAddress) {
	return [
		streetAddress1,
		[capitalize(city), countryArea, postalCode].filter(Boolean).join(' '),
		country.code,
	]
		.filter(Boolean)
		.join(', ');
}
