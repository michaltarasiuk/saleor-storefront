import type {HTMLAttributes} from 'react';
import type {FieldValues} from 'react-hook-form';

import type {FormProps as FormProps_} from '@/lib/components/form/Form';
import {Form as Form_} from '@/lib/components/form/Form';
import {FormItem as FormItem_} from '@/lib/components/form/form-field/FormField';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface FormProps<FormSchema extends FieldValues>
	extends Omit<FormProps_<FormSchema>, 'className'> {}

export function Form<FormSchema extends FieldValues>({
	children,
	...restProps
}: FormProps<FormSchema>) {
	return (
		<Form_ className={cn('flex flex-col gap-3')} {...restProps}>
			{children}
		</Form_>
	);
}

export function FormItem({children}: PropsWithChildren) {
	return (
		<FormItem_ className={cn('flex flex-col space-y-1')}>
			{children}
		</FormItem_>
	);
}

type FormFieldDescriptionTextProps = Omit<
	HTMLAttributes<HTMLParagraphElement>,
	'className'
>;

export function FormFieldDescriptionText({
	children,
	...restProps
}: PropsWithChildren<FormFieldDescriptionTextProps>) {
	return (
		<p className={cn('text-sm')} {...restProps}>
			{children}
		</p>
	);
}
