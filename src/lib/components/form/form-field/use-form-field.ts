import {useMemo} from 'react';
import {useFormContext} from 'react-hook-form';

import {useFormFieldName, useFormItemId} from './FormField';

export function useFormField() {
	const {getFieldState, formState} = useFormContext();

	const formFieldName = useFormFieldName();
	const formItemId = useFormItemId();

	return useMemo(() => {
		return {
			formItemId,
			formDescriptionId: `${formItemId}-description`,
			formErrorMessageId: `${formItemId}-error-message`,
			...getFieldState(formFieldName, formState),
		};
	}, [formFieldName, formItemId, formState, getFieldState]);
}
