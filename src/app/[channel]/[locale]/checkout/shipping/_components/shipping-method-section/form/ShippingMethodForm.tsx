'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {BackwardLink} from '../../../../_components/BackwardLink';
import {Form} from '../../../../_components/Form';
import {SubmitButton} from '../../../../_components/SubmitButton';
import {FIELDS} from './consts/fields';
import type {ShippingMethodSchema} from './consts/shipping-method-schema';
import {shippingMethodSchema} from './consts/shipping-method-schema';
import {ShippingMethodRadioItem, ShippingMethodRadioRoot} from './radio';
import {useShippingMethodSubmit} from './use-shipping-method-submit/use-shipping-method-submit';

const ShippingMethodForm_CheckoutFragment = graphql(/* GraphQL */ `
	fragment ShippingMethodForm_CheckoutFragment on Checkout {
		shippingMethod: deliveryMethod {
			... on ShippingMethod {
				id
			}
		}
		shippingMethods {
			id
			active
			...ShippingMethodRadioItem_ShippingMethod
		}
	}
`);

interface Props {
	readonly checkout: FragmentType<typeof ShippingMethodForm_CheckoutFragment>;
}

export function ShippingMethodForm({checkout}: Props) {
	const {shippingMethod, shippingMethods} = getFragment(
		ShippingMethodForm_CheckoutFragment,
		checkout,
	);

	const form = useForm<ShippingMethodSchema>({
		resolver: zodResolver(shippingMethodSchema),
	});
	const {shippingMethodSubmit, pending} = useShippingMethodSubmit(form);

	const defaultValue =
		shippingMethod && 'id' in shippingMethod
			? shippingMethod.id
			: shippingMethods.at(0)?.id;
	const disabled = form.formState.isSubmitting || pending;

	return (
		<Form form={form} onSubmit={form.handleSubmit(shippingMethodSubmit)}>
			<FormField
				name={FIELDS.DELIVERY_METHOD_ID}
				control={form.control}
				{...(defaultValue && {defaultValue})}
				render={({field: {value, onChange}}) => (
					<ShippingMethodRadioRoot
						value={value}
						onValueChange={onChange}
						disabled={disabled}>
						{shippingMethods
							.filter((shippingMethod) => shippingMethod.active)
							.map((shippingMethod) => (
								<ShippingMethodRadioItem
									key={shippingMethod.id}
									shippingMethod={shippingMethod}
								/>
							))}
					</ShippingMethodRadioRoot>
				)}
			/>
			<div className={cn('flex items-center justify-between')}>
				<BackwardLink
					href={formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION)}>
					<FormattedMessage
						defaultMessage="Return to information"
						id="k2CDuD"
					/>
				</BackwardLink>
				<div className={cn('w-fit')}>
					<SubmitButton disabled={disabled}>
						<FormattedMessage
							defaultMessage="Continue to billing"
							id="0s5kDf"
						/>
					</SubmitButton>
				</div>
			</div>
		</Form>
	);
}
