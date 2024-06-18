import {useCallback, useTransition} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import type {AddressInput} from '@/graphql/generated/graphql';
import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {ADDRESS_FIELDS_NAMES} from '../../../../_consts';
import {updateCheckoutBillingAddressAction} from '../../../../_tools/update-checkout-billing-address-action';
import {updateCheckoutEmailAction} from '../../../_tools/update-checkout-email-action';
import {updateCheckoutShippingAddressAction} from '../../../_tools/update-checkout-shipping-address-action';
import type {InformationFieldsSchema} from './use-information-fields-schema';

export function useInformationSubmit(
	form: UseFormReturn<InformationFieldsSchema>,
) {
	const intlRouter = useIntlRouter();
	const [pending, startTransition] = useTransition();

	const informationSubmit = useCallback(
		async ({
			email,
			useShippingAsBillingAddress,
			streetAddress2,
			...restAddressFields
		}: InformationFieldsSchema) => {
			try {
				const addressInput: AddressInput = {
					...(streetAddress2 && {streetAddress2}),
					...restAddressFields,
				};

				const hasDirtyAddressField = ADDRESS_FIELDS_NAMES.some(
					(addressFieldName) =>
						form.getFieldState(addressFieldName).isDirty,
				);
				if (hasDirtyAddressField) {
					const {errors} =
						(await updateCheckoutShippingAddressAction(
							addressInput,
						)) ?? {};
					if (errors?.length) return;
				}

				if (useShippingAsBillingAddress) {
					const {errors} =
						(await updateCheckoutBillingAddressAction(
							addressInput,
						)) ?? {};
					if (errors?.length) return;
				}

				if (form.getFieldState('email').isDirty) {
					const {errors} =
						(await updateCheckoutEmailAction(email)) ?? {};
					if (errors?.length) return;
				}

				startTransition(() => {
					intlRouter.push(
						formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING),
					);
					intlRouter.refresh();
				});
			} catch (error) {
				console.error(error);
			}
		},
		[form, intlRouter],
	);

	return {
		pending,
		informationSubmit,
	};
}
