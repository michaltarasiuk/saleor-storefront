'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import type {ElementRef} from 'react';
import {useForm} from 'react-hook-form';

import type {FragmentType} from '@/graphql/generated';
import {getFragment} from '@/graphql/generated';
import {graphql} from '@/graphql/generated/gql';
import {FormattedMessage, useIntl} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {useRefMountCallback} from '@/lib/hooks/use-ref-mount-callback';
import {cn} from '@/lib/tools/cn';
import {deferInputFocus} from '@/lib/tools/defer-input-focus';

import {AddressFields} from '../../../_components/address-fields';
import {FormItem} from '../../../_components/address-fields/components/Form';
import {Checkbox} from '../../../_components/Checkbox';
import {Form} from '../../../_components/Form';
import {Heading} from '../../../_components/Heading';
import {SubmitButton} from '../../../_components/SubmitButton';
import {TextField} from '../../../_components/TextField';
import {FIELDS} from './fields';
import type {InformationFieldsSchema} from './hooks/use-information-fields-schema';
import {useInformationFieldsSchema} from './hooks/use-information-fields-schema';
import {useInformationSubmit} from './hooks/use-information-submit';

const InformationForm_ChannelFragment = graphql(/* GraphQL */ `
	fragment InformationForm_ChannelFragment on Channel {
		...AddressFields_ChannelFragment
	}
`);

const InformationForm_AddressValidationDataFragment = graphql(/* GraphQL */ `
	fragment InformationForm_AddressValidationDataFragment on AddressValidationData {
		postalCodeMatchers
		postalCodeExamples
		...AddressFields_AddressValidationDataFragment
	}
`);

interface Props {
	readonly channel: FragmentType<typeof InformationForm_ChannelFragment>;
	readonly addressValidationData: FragmentType<
		typeof InformationForm_AddressValidationDataFragment
	>;
	readonly defaultValues: Partial<InformationFieldsSchema>;
}

export function InformationForm({
	channel,
	addressValidationData,
	defaultValues,
}: Props) {
	const channelFragment = getFragment(
		InformationForm_ChannelFragment,
		channel,
	);
	const addressValidationDataFragment = getFragment(
		InformationForm_AddressValidationDataFragment,
		addressValidationData,
	);

	const informationFieldsSchema = useInformationFieldsSchema(
		addressValidationDataFragment,
	);
	const form = useForm<InformationFieldsSchema>({
		resolver: zodResolver(informationFieldsSchema),
		defaultValues,
	});
	const {informationSubmit, pending} = useInformationSubmit(form);

	const intl = useIntl();
	const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

	const disabled = form.formState.isSubmitting || pending;

	return (
		<Form form={form} onSubmit={form.handleSubmit(informationSubmit)}>
			<section className={cn('space-y-3')}>
				<Heading>
					<FormattedMessage defaultMessage="Contact" id="zFegDD" />
				</Heading>
				<FormField
					name={FIELDS.EMAIL}
					control={form.control}
					render={({field: {ref, ...restField}}) => (
						<FormItem>
							<FormFieldControl>
								<TextField
									ref={refMountCallback(ref, deferInputFocus)}
									type="email"
									placeholder={intl.formatMessage({
										defaultMessage: 'Email',
										id: 'sy+pv5',
									})}
									autoComplete="email"
									disabled={disabled}
									required
									{...restField}
								/>
							</FormFieldControl>
							<FormFieldErrorMessage>
								<ErrorText />
							</FormFieldErrorMessage>
						</FormItem>
					)}
				/>
			</section>
			<section className={cn('space-y-3')}>
				<Heading>
					<FormattedMessage
						defaultMessage="Shipping address"
						id="ZpVtCa"
					/>
				</Heading>
				<AddressFields
					channel={channelFragment}
					addressValidationData={addressValidationDataFragment}
					disabled={disabled}
				/>
				<FormField
					name={FIELDS.USE_SHIPPING_AS_BILLING_ADDRESS}
					control={form.control}
					render={({field: {value = false, onChange}}) => (
						<Checkbox
							checked={value}
							onCheckedChange={onChange}
							disabled={disabled}>
							<FormattedMessage
								defaultMessage="Use shipping address as billing address"
								id="2htJqw"
							/>
						</Checkbox>
					)}
				/>
			</section>
			<div className={cn('self-end')}>
				<SubmitButton disabled={disabled}>
					<FormattedMessage
						defaultMessage="Continue to shipping"
						id="DgnS8R"
					/>
				</SubmitButton>
			</div>
		</Form>
	);
}
