import {Slot} from '@radix-ui/react-slot';

import type {PropsWithChildren} from '@/lib/types/react';

import {useFormField} from './form-field/use-form-field';

export function FormFieldLabel({children}: PropsWithChildren) {
	const {formItemId} = useFormField();

	return <Slot id={formItemId}>{children}</Slot>;
}
