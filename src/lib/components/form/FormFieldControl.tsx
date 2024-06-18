import {Slot} from '@radix-ui/react-slot';

import type {PropsWithChildren} from '@/lib/types/react';

import {useFormField} from './form-field/use-form-field';

export function FormFieldControl({children}: PropsWithChildren) {
	const {formItemId, formDescriptionId, formErrorMessageId, invalid} =
		useFormField();

	return (
		<Slot
			id={formItemId}
			aria-describedby={formDescriptionId}
			aria-errormessage={formErrorMessageId}
			aria-invalid={invalid}>
			{children}
		</Slot>
	);
}
