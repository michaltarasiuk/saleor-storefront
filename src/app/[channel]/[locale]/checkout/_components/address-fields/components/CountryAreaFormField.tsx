import {useFormContext} from 'react-hook-form';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {useIntl} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {uniqBy} from '@/lib/tools/uniq';

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

const CountryAreaFormField_AddressValidationDataFragment = graphql(
	/* GraphQL */ `
		fragment CountryAreaFormField_AddressValidationDataFragment on AddressValidationData {
			countryAreaType
			countryAreaChoices {
				raw
				verbose
			}
		}
	`,
);

interface Props {
	readonly addressValidationData: FragmentType<
		typeof CountryAreaFormField_AddressValidationDataFragment
	>;
	readonly disabled: boolean;
}

export function CountryAreaFormField({addressValidationData, disabled}: Props) {
	const {countryAreaType, countryAreaChoices} = getFragment(
		CountryAreaFormField_AddressValidationDataFragment,
		addressValidationData,
	);

	const form = useFormContext<AddressFieldsSchema>();
	const intl = useIntl();

	const placeholder = intl.formatMessage(
		{
			defaultMessage: `{countryAreaType, select,
        state {State}
        province {Province}
        island {Island}
        oblast {Oblast}
        other {Other}
      }`,
			id: 'tD8gJ0',
		},
		{
			countryAreaType,
		},
	);

	return (
		<FormField
			name={ADDRESS_FIELDS.COUNTRY_AREA}
			control={form.control}
			render={({field}) => (
				<>
					{countryAreaChoices.length ? (
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
								{uniqBy(
									countryAreaChoices.filter(
										(
											countryAreaChoice,
										): countryAreaChoice is {
											readonly raw: string;
											readonly verbose: string;
										} =>
											Boolean(countryAreaChoice.raw) &&
											Boolean(countryAreaChoice.verbose),
									),
									(countryAreaChoice) =>
										countryAreaChoice.raw,
								).map(({raw, verbose}) => (
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
