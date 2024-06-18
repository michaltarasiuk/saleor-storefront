import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';

import {Heading} from '../../../_components/Heading';
import {ShippingMethodForm} from './form';

const ShippingMethodSection_CheckoutFragment = graphql(/* GraphQL */ `
	fragment ShippingMethodSection_CheckoutFragment on Checkout {
		...ShippingMethodForm_CheckoutFragment
	}
`);

interface Props {
	readonly checkout: FragmentType<
		typeof ShippingMethodSection_CheckoutFragment
	>;
}

export async function ShippingMethodSection({checkout}: Props) {
	const intl = await getIntl(getLocale());

	return (
		<section className={cn('space-y-3')}>
			<Heading>
				{intl.formatMessage({
					defaultMessage: 'Shipping method',
					id: '4RD+CZ',
				})}
			</Heading>
			<ShippingMethodForm
				checkout={getFragment(
					ShippingMethodSection_CheckoutFragment,
					checkout,
				)}
			/>
		</section>
	);
}
