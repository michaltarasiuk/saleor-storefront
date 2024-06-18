'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {FormattedMessage} from '@/i18n/react-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {AddressFields} from '../../../_components/address-fields';
import {BackwardLink} from '../../../_components/BackwardLink';
import {Form} from '../../../_components/Form';
import {SubmitButton} from '../../../_components/SubmitButton';
import type {AddressFieldsSchema} from '../../../_hooks/use-address-fields-schema';
import {useAddressFieldsSchema as useBillingAddressFieldsSchema} from '../../../_hooks/use-address-fields-schema';
import {useBillingAddressSubmit} from './use-billing-address-submit';

const BillingAddressForm_ChannelFragment = graphql(/* GraphQL */ `
	fragment BillingAddressForm_ChannelFragment on Channel {
		...AddressFields_ChannelFragment
	}
`);

const BillingAddressForm_AddressValidationDataFragment = graphql(/* GraphQL */ `
	fragment BillingAddressForm_AddressValidationDataFragment on AddressValidationData {
		postalCodeMatchers
		postalCodeExamples
		...AddressFields_AddressValidationDataFragment
	}
`);

interface Props {
	readonly channel: FragmentType<typeof BillingAddressForm_ChannelFragment>;
	readonly addressValidationData: FragmentType<
		typeof BillingAddressForm_AddressValidationDataFragment
	>;
	readonly defaultValues: Partial<AddressFieldsSchema>;
}

export function BillingAddressForm({
	channel,
	addressValidationData,
	defaultValues,
}: Props) {
	const channelFragment = getFragment(
		BillingAddressForm_ChannelFragment,
		channel,
	);
	const addressValidationDataFragment = getFragment(
		BillingAddressForm_AddressValidationDataFragment,
		addressValidationData,
	);

	const billingAddressFieldsSchema = useBillingAddressFieldsSchema(
		addressValidationDataFragment,
	);
	const form = useForm<AddressFieldsSchema>({
		resolver: zodResolver(billingAddressFieldsSchema),
		defaultValues,
	});
	const {billingAddressSubmit, pending} = useBillingAddressSubmit(form);

	const disabled = form.formState.isSubmitting || pending;

	return (
		<Form form={form} onSubmit={form.handleSubmit(billingAddressSubmit)}>
			<AddressFields
				channel={channelFragment}
				addressValidationData={addressValidationDataFragment}
				disabled={disabled}
			/>
			<div className={cn('flex items-center justify-between')}>
				<BackwardLink
					href={formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING)}>
					<FormattedMessage
						defaultMessage="Return to shipping"
						id="Akc1Gk"
					/>
				</BackwardLink>
				<div className={cn('w-fit')}>
					<SubmitButton disabled={disabled}>
						<FormattedMessage
							defaultMessage="Continue to payment"
							id="+g+0OK"
						/>
					</SubmitButton>
				</div>
			</div>
		</Form>
	);
}
