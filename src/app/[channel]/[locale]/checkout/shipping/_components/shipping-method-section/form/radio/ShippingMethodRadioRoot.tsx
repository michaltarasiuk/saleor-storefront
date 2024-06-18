'use client';

import * as RadioGroup from '@radix-ui/react-radio-group';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = Omit<
	ComponentPropsWithoutRef<typeof RadioGroup.Root>,
	'className'
>;

export function ShippingMethodRadioRoot({children, ...restProps}: Props) {
	return (
		<RadioGroup.Root
			className={cn('rounded-md border border-faded-black')}
			{...restProps}>
			{children}
		</RadioGroup.Root>
	);
}
