import {useFormContext} from 'react-hook-form';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {useIntl} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {cn} from '@/lib/tools/cn';

import {ADDRESS_FIELDS} from '../../_consts';
import type {AddressFieldsSchema} from '../../_hooks/use-address-fields-schema';
import {TextField} from '../TextField';
import {CityFormField} from './components/CityFormField';
import {CountrySelect} from './components/country-select';
import {CountryAreaFormField} from './components/CountryAreaFormField';
import {FormGroup, FormItem} from './components/Form';

const AddressFields_ChannelFragment = graphql(/* GraphQL */ `
	fragment AddressFields_ChannelFragment on Channel {
		...CountrySelect_ChannelFragment
	}
`);

const AddressFields_AddressValidationDataFragment = graphql(/* GraphQL */ `
	fragment AddressFields_AddressValidationDataFragment on AddressValidationData {
		...CityFormField_AddressValidationDataFragment
		...CountryAreaFormField_AddressValidationDataFragment
	}
`);

interface Props {
	readonly channel: FragmentType<typeof AddressFields_ChannelFragment>;
	readonly addressValidationData: FragmentType<
		typeof AddressFields_AddressValidationDataFragment
	>;
	readonly disabled: boolean;
}

export function AddressFields({
	channel,
	addressValidationData,
	disabled,
}: Props) {
	const channelFragment = getFragment(AddressFields_ChannelFragment, channel);
	const addressValidationDataFragment = getFragment(
		AddressFields_AddressValidationDataFragment,
		addressValidationData,
	);

	const form = useFormContext<AddressFieldsSchema>();
	const intl = useIntl();

	return (
		<div className={cn('flex flex-col gap-3.5')}>
			<CountrySelect channel={channelFragment} disabled={disabled} />
			<FormGroup className={cn('grid-cols-2')}>
				<FormField
					name={ADDRESS_FIELDS.FIRST_NAME}
					control={form.control}
					render={({field}) => (
						<FormItem>
							<FormFieldControl>
								<TextField
									placeholder={intl.formatMessage({
										defaultMessage: 'Firstname',
										id: 'qTs7Lh',
									})}
									disabled={disabled}
									required
									{...field}
								/>
							</FormFieldControl>
							<FormFieldErrorMessage>
								<ErrorText />
							</FormFieldErrorMessage>
						</FormItem>
					)}
				/>
				<FormField
					name={ADDRESS_FIELDS.LAST_NAME}
					control={form.control}
					render={({field}) => (
						<FormItem>
							<FormFieldControl>
								<TextField
									placeholder={intl.formatMessage({
										defaultMessage: 'Lastname',
										id: '/Knt5/',
									})}
									disabled={disabled}
									required
									{...field}
								/>
							</FormFieldControl>
							<FormFieldErrorMessage>
								<ErrorText />
							</FormFieldErrorMessage>
						</FormItem>
					)}
				/>
			</FormGroup>
			<FormField
				name={ADDRESS_FIELDS.STREET_ADDRESS1}
				control={form.control}
				render={({field}) => (
					<FormItem>
						<FormFieldControl>
							<TextField
								placeholder={intl.formatMessage({
									defaultMessage: 'Address',
									id: 'e6Ph5+',
								})}
								disabled={disabled}
								required
								{...field}
							/>
						</FormFieldControl>
						<FormFieldErrorMessage>
							<ErrorText />
						</FormFieldErrorMessage>
					</FormItem>
				)}
			/>
			<FormField
				name={ADDRESS_FIELDS.STREET_ADDRESS2}
				control={form.control}
				render={({field}) => (
					<FormItem>
						<FormFieldControl>
							<TextField
								placeholder={intl.formatMessage({
									defaultMessage:
										'Apartment, suit, etc. (optional)',
									id: '0MqfPh',
								})}
								disabled={disabled}
								{...field}
							/>
						</FormFieldControl>
						<FormFieldErrorMessage>
							<ErrorText />
						</FormFieldErrorMessage>
					</FormItem>
				)}
			/>
			<FormGroup className={cn('grid-cols-3')}>
				<CityFormField
					addressValidationData={addressValidationDataFragment}
					disabled={disabled}
				/>
				<CountryAreaFormField
					addressValidationData={addressValidationDataFragment}
					disabled={disabled}
				/>
				<FormField
					name={ADDRESS_FIELDS.POSTAL_CODE}
					control={form.control}
					render={({field}) => (
						<FormItem>
							<FormFieldControl>
								<TextField
									placeholder={intl.formatMessage({
										defaultMessage: 'ZIP Code',
										id: 'rHnr4K',
									})}
									disabled={disabled}
									required
									{...field}
								/>
							</FormFieldControl>
							<FormFieldErrorMessage>
								<ErrorText />
							</FormFieldErrorMessage>
						</FormItem>
					)}
				/>
			</FormGroup>
		</div>
	);
}
