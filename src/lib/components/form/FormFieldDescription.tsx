import {Slot} from '@radix-ui/react-slot';

import type {PropsWithChildren} from '@/lib/types/react';

import {useFormField} from './form-field/use-form-field';

export function FormFieldDescription({children}: PropsWithChildren) {
	const {formDescriptionId} = useFormField();

	return <Slot id={formDescriptionId}>{children}</Slot>;
}
