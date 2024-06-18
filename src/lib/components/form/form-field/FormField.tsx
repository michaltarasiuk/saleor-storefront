import {useId} from 'react';
import type {ControllerProps, FieldPath, FieldValues} from 'react-hook-form';
import {Controller} from 'react-hook-form';

import {cn} from '@/lib/tools/cn';
import {createContext} from '@/lib/tools/create-context';
import type {PropsWithChildren} from '@/lib/types/react';

const [FormFieldNameContext, useFormFieldName] =
	createContext<string>('formFieldName');

export {useFormFieldName};

interface FormFieldProps<
	FormSchema extends FieldValues,
	FieldName extends FieldPath<FormSchema>,
> extends ControllerProps<FormSchema, FieldName> {}

export function FormField<
	FormSchema extends FieldValues,
	FieldName extends FieldPath<FormSchema>,
>(props: FormFieldProps<FormSchema, FieldName>) {
	return (
		<FormFieldNameContext.Provider value={props.name}>
			<Controller {...props} />
		</FormFieldNameContext.Provider>
	);
}

const [FormItemIdContext, useFormItemId] =
	createContext<ReturnType<typeof useId>>('formItemId');

export {useFormItemId};

interface FormItemProps {
	readonly className?: string;
}

export function FormItem({
	children,
	className,
}: PropsWithChildren<FormItemProps>) {
	return (
		<FormItemIdContext.Provider value={useId()}>
			<div className={cn(className)}>{children}</div>
		</FormItemIdContext.Provider>
	);
}
