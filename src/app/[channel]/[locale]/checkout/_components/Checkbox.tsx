'use client';

import * as Checkbox_ from '@radix-ui/react-checkbox';
import {CheckIcon} from 'lucide-react';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

type Props = Required<
	Pick<
		ComponentPropsWithoutRef<typeof Checkbox_.Root>,
		'checked' | 'onCheckedChange' | 'disabled'
	>
>;

export function Checkbox({
	children,
	checked,
	disabled,
	onCheckedChange,
}: PropsWithChildren<Props>) {
	return (
		<label
			className={cn(
				'flex w-max cursor-pointer select-none items-center gap-2 text-sm text-white',
				disabled && 'cursor-text',
			)}>
			<Checkbox_.Root
				className={cn(
					'group flex h-[18px] w-[18px] items-center justify-center rounded border border-faded-black transition-shadow duration-300 ease-out focus:border-blue focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed data-[state=checked]:border-blue data-[state=checked]:shadow-[0_0_0_.7142857142857143em_inset] data-[state=checked]:shadow-blue',
				)}
				checked={checked}
				disabled={disabled}
				onCheckedChange={onCheckedChange}>
				<CheckIcon
					size={15}
					className={cn(
						'opacity-0 group-data-[state=checked]:opacity-100 group-data-[state=checked]:transition-opacity',
					)}
				/>
			</Checkbox_.Root>
			{children}
		</label>
	);
}
