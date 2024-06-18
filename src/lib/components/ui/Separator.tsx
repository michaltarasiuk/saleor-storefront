'use client';

import * as Separator_ from '@radix-ui/react-separator';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = Omit<
	ComponentPropsWithoutRef<typeof Separator_.Root>,
	'orientation' | 'decorative' | 'className'
>;

export function Separator(props: Props) {
	return (
		<Separator_.Root
			decorative={true}
			orientation="horizontal"
			className={cn('h-[1px] w-full shrink-0 bg-border')}
			{...props}
		/>
	);
}
