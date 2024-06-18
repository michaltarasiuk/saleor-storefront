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
import {InformationSection} from './_components/InformationSection';

const InformationPage_CheckoutQuery = graphql(/* GraphQL */ `
	query InformationPage_Query($id: ID!) {
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
			...InformationSection_CheckoutFragment
		}
	}
`);

interface Props {
	readonly searchParams?: {
		readonly country?: string;
	};
}

export default async function InformationPage({searchParams}: Props) {
	const {checkout} = await fetchQueryData(
		InformationPage_CheckoutQuery,
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
		formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION),
	);
	if (redirectUrl) redirect(redirectUrl);

	return (
		<div className={cn('space-y-7')}>
			<Breadcrumbs checkout={checkout} />
			<InformationSection
				checkout={checkout}
				country={extractCountryCode(searchParams)}
			/>
		</div>
	);
}
