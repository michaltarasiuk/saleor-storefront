import {useCallback, useTransition} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {ShippingMethodSchema} from '../consts/shipping-method-schema';
import {updateCheckoutDeliveryMethodAction} from './update-checkout-delivery-method-action';

export function useShippingMethodSubmit(
	form: UseFormReturn<ShippingMethodSchema>,
) {
	const intlRouter = useIntlRouter();
	const [pending, startTransition] = useTransition();

	const shippingMethodSubmit = useCallback(
		async ({deliveryMethodId}: ShippingMethodSchema) => {
			try {
				const isDirty = form.getFieldState('deliveryMethodId').isDirty;
				if (isDirty) {
					const {errors} =
						(await updateCheckoutDeliveryMethodAction(
							deliveryMethodId,
						)) ?? {};

					if (!errors?.length) {
						startTransition(() => {
							intlRouter.push(
								formatPathname(...APP_ROUTES.CHECKOUT.BILLING),
							);
							intlRouter.refresh();
						});
					}
				}
			} catch (error) {
				console.error(error);
			}
		},
		[form, intlRouter],
	);

	return {
		shippingMethodSubmit,
		pending,
	};
}
