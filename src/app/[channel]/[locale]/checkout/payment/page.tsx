import {redirect} from 'next/navigation';

import {graphql} from '@/graphql/generated';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {fetchQueryData} from '@/lib/tools/get-client';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

import {Breadcrumbs} from '../_components/breadcrumbs';
import {getRedirectUrl} from '../_tools/get-redirect-url';
import {goToRoot} from '../_tools/go-to-root';

const PaymentPage_CheckoutQuery = graphql(/* GraphQL */ `
	query PaymentPage_CheckoutQuery($id: ID!) {
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
		}
	}
`);

export default async function PaymentPage() {
	const {checkout} = await fetchQueryData(
		PaymentPage_CheckoutQuery,
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
		formatPathname(...APP_ROUTES.CHECKOUT.PAYMENT),
	);
	if (redirectUrl) redirect(redirectUrl);

	return (
		<div className={cn('space-y-7')}>
			<Breadcrumbs checkout={checkout} />
		</div>
	);
}
