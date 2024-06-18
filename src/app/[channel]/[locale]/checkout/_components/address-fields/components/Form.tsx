import {FormItem as FormItem_} from '@/lib/components/form/form-field/FormField';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface FormGroupProps {
	readonly className: string;
}

export function FormGroup({
	children,
	className,
}: PropsWithChildren<FormGroupProps>) {
	return (
		<div className={cn('grid grid-flow-col gap-3.5', className)}>
			{children}
		</div>
	);
}

export function FormItem({children}: PropsWithChildren) {
	return (
		<FormItem_ className={cn('flex w-full flex-col gap-2')}>
			{children}
		</FormItem_>
	);
}
