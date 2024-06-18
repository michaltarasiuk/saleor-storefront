'use client';

import * as Label_ from '@radix-ui/react-label';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = ComponentPropsWithoutRef<(typeof Label_)['Root']>;

export function Label({children, className, htmlFor, id, ...restProps}: Props) {
	return (
		<Label_.Root
			htmlFor={htmlFor ?? id}
			className={cn('text-sm leading-none', className)}
			{...restProps}>
			{children}
		</Label_.Root>
	);
}
