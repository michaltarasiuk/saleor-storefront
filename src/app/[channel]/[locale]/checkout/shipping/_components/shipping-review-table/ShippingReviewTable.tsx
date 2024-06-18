import invariant from 'tiny-invariant';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';

import {getShipTo} from './get-ship-to';
import {ShippingReviewRow} from './ShippingReviewRow';

const ShippingReviewTable_CheckoutFragment = graphql(/* GraphQL */ `
	fragment ShippingReviewTable_CheckoutFragment on Checkout {
		email
		shippingAddress {
			streetAddress1
			city
			countryArea
			postalCode
			country {
				code
			}
		}
	}
`);

interface Props {
	readonly checkout: FragmentType<
		typeof ShippingReviewTable_CheckoutFragment
	>;
}

export async function ShippingReviewTable({checkout}: Props) {
	const {email, shippingAddress} = getFragment(
		ShippingReviewTable_CheckoutFragment,
		checkout,
	);
	invariant(email);
	invariant(shippingAddress);

	const intl = await getIntl(getLocale());

	return (
		<div
			role="table"
			aria-label="Review"
			className={cn('rounded-md border border-faded-black px-4 py-1')}>
			<ShippingReviewRow
				name={intl.formatMessage({
					defaultMessage: 'Contact',
					id: 'zFegDD',
				})}
				value={email}
			/>
			<Divider />
			<ShippingReviewRow
				name={intl.formatMessage({
					defaultMessage: 'Ship to',
					id: '+JsDiH',
				})}
				value={getShipTo(shippingAddress)}
			/>
		</div>
	);
}

function Divider() {
	return <div className={cn('border-t border-faded-black')} />;
}
