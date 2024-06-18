import type {FieldValues} from 'react-hook-form';

import type {FormProps} from '@/lib/components/form/Form';
import {Form as Form_} from '@/lib/components/form/Form';
import {cn} from '@/lib/tools/cn';

type Props<FormSchema extends FieldValues> = Omit<
	FormProps<FormSchema>,
	'className'
>;

export function Form<FormSchema extends FieldValues>({
	children,
	...restProps
}: Props<FormSchema>) {
	return (
		<Form_ className={cn('flex flex-col gap-7')} {...restProps}>
			{children}
		</Form_>
	);
}
