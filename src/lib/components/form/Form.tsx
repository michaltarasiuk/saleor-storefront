import type {FormHTMLAttributes} from 'react';
import type {FieldValues, UseFormReturn} from 'react-hook-form';
import {FormProvider} from 'react-hook-form';

export interface FormProps<FormSchema extends FieldValues>
	extends FormHTMLAttributes<HTMLFormElement> {
	readonly form: UseFormReturn<FormSchema>;
}

export function Form<FormSchema extends FieldValues>({
	form,
	...restProps
}: FormProps<FormSchema>) {
	return (
		<FormProvider {...form}>
			<form noValidate {...restProps} />
		</FormProvider>
	);
}
