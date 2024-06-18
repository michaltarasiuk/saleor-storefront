import {redirect} from 'next/navigation';

import {graphql} from '@/graphql/generated';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {fetchQueryData} from '@/lib/tools/get-client';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

import {Breadcrumbs} from '../_components/breadcrumbs';
import {extractCountryCode} from '../_tools/extract-country-code';
import {getRedirectUrl} from '../_tools/get-redirect-url';
import {goToRoot} from '../_tools/go-to-root';
import {BillingSection} from './_components/BillingSection';

const BillingPage_CheckoutQuery = graphql(/* GraphQL */ `
	query BillingPage_CheckoutQuery($id: ID!) {
		checkout(id: $id) {
			quantity
			shippingAddress {
				__typename
			}
			deliveryMethod {
				__typename
			}
			billingAddress {
				__typename
			}
			...Breadcrumbs_CheckoutFragment
			...BillingSection_CheckoutFragment
		}
	}
`);

interface Props {
	readonly searchParams?: {
		readonly country?: string;
	};
}

export default async function BillingPage({searchParams}: Props) {
	const {checkout} = await fetchQueryData(
		BillingPage_CheckoutQuery,
		{
			id: getCheckoutId() ?? goToRoot(),
		},
		{
			fetchOptions: {
				cache: 'no-cache',
			},
		},
	);
	if (!checkout?.quantity) goToRoot();

	const redirectUrl = getRedirectUrl(
		checkout,
		formatPathname(...APP_ROUTES.CHECKOUT.BILLING),
	);
	if (redirectUrl) redirect(redirectUrl);

	return (
		<div className={cn('space-y-7')}>
			<Breadcrumbs checkout={checkout} />
			<BillingSection
				checkout={checkout}
				country={extractCountryCode(searchParams)}
			/>
		</div>
	);
}
