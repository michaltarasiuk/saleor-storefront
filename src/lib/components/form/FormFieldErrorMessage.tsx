import {Slot} from '@radix-ui/react-slot';

import type {PropsWithChildren} from '@/lib/types/react';

import {useFormField} from './form-field/use-form-field';

export function FormFieldErrorMessage({children}: PropsWithChildren) {
	const {error, formErrorMessageId} = useFormField();

	if (!error?.message) {
		return null;
	}
	return (
		<Slot id={formErrorMessageId} aria-errormessage={error.message}>
			{children}
		</Slot>
	);
}
