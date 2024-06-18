import type {FragmentType} from '@/graphql/generated/fragment-masking';
import {getFragment} from '@/graphql/generated/fragment-masking';
import {graphql} from '@/graphql/generated/gql';
import type {DeliveryDays_ShippingMethodFragment} from '@/graphql/generated/graphql';
import {FormattedMessage} from '@/i18n/react-intl';
import {cn} from '@/lib/tools/cn';
import {isDefined} from '@/lib/tools/is-defined';

const DeliveryDays_ShippingMethod = graphql(/* GraphQL */ `
	fragment DeliveryDays_ShippingMethod on ShippingMethod {
		minimumDeliveryDays
		maximumDeliveryDays
	}
`);

interface Props {
	readonly shippingMethod: FragmentType<typeof DeliveryDays_ShippingMethod>;
}

export function DeliveryDays({shippingMethod}: Props) {
	const {minimumDeliveryDays, maximumDeliveryDays} = getFragment(
		DeliveryDays_ShippingMethod,
		shippingMethod,
	);

	return (
		<p className={cn('text-sm text-grey-light')}>
			<FormattedMessage
				defaultMessage="{type, select,
          range {{minimumDeliveryDays} to {maximumDeliveryDays} business days}
          minimum {minimum {minimumDeliveryDays} business days}
          maximum {maximum {maximumDeliveryDays} business days}
          other {unknown business days}
        }"
				id="tXQ9ea"
				values={{
					type: getMessageType(
						minimumDeliveryDays,
						maximumDeliveryDays,
					),
					minimumDeliveryDays,
					maximumDeliveryDays,
				}}
			/>
		</p>
	);
}

function getMessageType(
	minimumDeliveryDays: DeliveryDays_ShippingMethodFragment['minimumDeliveryDays'],
	maximumDeliveryDays: DeliveryDays_ShippingMethodFragment['maximumDeliveryDays'],
) {
	if (isDefined(minimumDeliveryDays) && isDefined(maximumDeliveryDays)) {
		return 'range';
	} else if (isDefined(minimumDeliveryDays)) {
		return 'minimum';
	} else if (isDefined(maximumDeliveryDays)) {
		return 'maximum';
	}
	return 'other';
}
