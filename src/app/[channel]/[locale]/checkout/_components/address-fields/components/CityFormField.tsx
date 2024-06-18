import {useFormContext} from 'react-hook-form';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {useIntl} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {ErrorText} from '@/lib/components/ui/ErrorText';

import {ADDRESS_FIELDS} from '../../../_consts';
import type {AddressFieldsSchema} from '../../../_hooks/use-address-fields-schema';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectPlaceholder,
	SelectTrigger,
	SelectValue,
} from '../../Select';
import {TextField} from '../../TextField';
import {FormItem} from './Form';

const CityFormField_AddressValidationDataFragment = graphql(/* GraphQL */ `
	fragment CityFormField_AddressValidationDataFragment on AddressValidationData {
		cityType
		cityChoices {
			raw
			verbose
		}
	}
`);

interface Props {
	readonly addressValidationData: FragmentType<
		typeof CityFormField_AddressValidationDataFragment
	>;
	readonly disabled: boolean;
}

export function CityFormField({addressValidationData, disabled}: Props) {
	const {cityType, cityChoices} = getFragment(
		CityFormField_AddressValidationDataFragment,
		addressValidationData,
	);

	const form = useFormContext<AddressFieldsSchema>();
	const intl = useIntl();

	const placeholder = intl.formatMessage(
		{
			defaultMessage: `{cityType, select,
        city {City}
        other {Other}
      }`,
			id: '0ZmUBu',
		},
		{
			cityType,
		},
	);

	return (
		<FormField
			name={ADDRESS_FIELDS.CITY}
			control={form.control}
			render={({field}) => (
				<>
					{cityChoices.length ? (
						<Select
							value={field.value}
							onValueChange={field.onChange}
							disabled={disabled}
							required>
							<SelectTrigger>
								<SelectPlaceholder>
									{placeholder}
								</SelectPlaceholder>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{cityChoices
									.filter(
										(
											cityChoice,
										): cityChoice is {
											readonly raw: string;
											readonly verbose: string;
										} =>
											Boolean(cityChoice.raw) &&
											Boolean(cityChoice.verbose),
									)
									.map(({raw, verbose}) => (
										<SelectItem key={raw} value={raw}>
											{verbose}
										</SelectItem>
									))}
							</SelectContent>
						</Select>
					) : (
						<FormItem>
							<FormFieldControl>
								<TextField
									placeholder={placeholder}
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
				</>
			)}
		/>
	);
}
