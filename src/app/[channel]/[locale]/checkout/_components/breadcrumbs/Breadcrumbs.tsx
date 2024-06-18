import {ChevronRightIcon} from 'lucide-react';

import type {FragmentType} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {graphql} from '@/graphql/generated/gql';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import type {PropsWithChildren} from '@/lib/types/react';

import {BreadcrumbLink} from './BreadcrumbLink';

const Breadcrumbs_CheckoutFragment = graphql(/* GraphQL */ `
	fragment Breadcrumbs_CheckoutFragment on Checkout {
		shippingAddress {
			__typename
		}
		deliveryMethod {
			__typename
		}
		billingAddress {
			__typename
		}
	}
`);

interface Props {
	readonly checkout: FragmentType<typeof Breadcrumbs_CheckoutFragment>;
}

export async function Breadcrumbs({checkout}: Props) {
	const {shippingAddress, deliveryMethod, billingAddress} = getFragment(
		Breadcrumbs_CheckoutFragment,
		checkout,
	);
	const intl = await getIntl(getLocale());

	return (
		<nav aria-label="Breadcrumb">
			<ol className={cn('flex gap-2')}>
				<Breadcrumb>
					<BreadcrumbLink
						href={formatPathname(
							...APP_ROUTES.CHECKOUT.INFORMATION,
						)}>
						{intl.formatMessage({
							defaultMessage: 'Information',
							id: 'E80WrK',
						})}
					</BreadcrumbLink>
					<BreadcrumbSeparator />
				</Breadcrumb>
				<Breadcrumb>
					<BreadcrumbLink
						href={formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING)}
						disabled={!shippingAddress}>
						{intl.formatMessage({
							defaultMessage: 'Shipping',
							id: 'PRlD0A',
						})}
					</BreadcrumbLink>
					<BreadcrumbSeparator />
				</Breadcrumb>
				<Breadcrumb>
					<BreadcrumbLink
						href={formatPathname(...APP_ROUTES.CHECKOUT.BILLING)}
						disabled={!shippingAddress || !deliveryMethod}>
						{intl.formatMessage({
							defaultMessage: 'Billing',
							id: 'Tbo377',
						})}
					</BreadcrumbLink>
					<BreadcrumbSeparator />
				</Breadcrumb>
				<Breadcrumb>
					<BreadcrumbLink
						href={formatPathname(...APP_ROUTES.CHECKOUT.PAYMENT)}
						disabled={
							!shippingAddress ||
							!deliveryMethod ||
							!billingAddress
						}>
						{intl.formatMessage({
							defaultMessage: 'Payment',
							id: 'NmK6zy',
						})}
					</BreadcrumbLink>
				</Breadcrumb>
			</ol>
		</nav>
	);
}

function Breadcrumb({children}: PropsWithChildren) {
	return <li className={cn('flex items-center gap-2')}>{children}</li>;
}

function BreadcrumbSeparator() {
	return <ChevronRightIcon size={15} className={cn('text-grey')} />;
}
