'use client';

import * as Select_ from '@radix-ui/react-select';
import {CheckIcon, ChevronDownIcon} from 'lucide-react';
import type {ComponentPropsWithoutRef} from 'react';
import * as React from 'react';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export const Select = Select_.Root;

export const SelectValue = Select_.Value;

export function SelectTrigger({children}: PropsWithChildren) {
	return (
		<Select_.Trigger
			className={cn(
				'flex h-fit w-full flex-col items-start justify-start rounded-md border border-faded-black bg-black px-2.5 py-2 text-sm leading-tight text-white outline-none transition-all focus-within:border-blue focus-within:shadow-[0_0_0_1px] focus-within:shadow-blue disabled:cursor-not-allowed',
			)}>
			<div className={cn('flex w-full items-center justify-between')}>
				<div className={cn('flex flex-col items-start')}>
					{children}
				</div>
				<div>
					<ChevronDownIcon size={15} />
				</div>
			</div>
		</Select_.Trigger>
	);
}

export function SelectPlaceholder({children}: PropsWithChildren) {
	return (
		<span className={cn('text-xs leading-tight text-grey-foreground')}>
			{children}
		</span>
	);
}

export function SelectContent({children}: PropsWithChildren) {
	return (
		<Select_.Content
			className={cn(
				'z-50 max-h-64 min-w-[var(--radix-select-trigger-width)] overflow-scroll rounded-md border border-[#4c4c50] bg-grey-dark p-1 px-0 text-white shadow-md data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
			)}
			position="popper">
			{children}
		</Select_.Content>
	);
}

type SelectItemProps = Pick<
	ComponentPropsWithoutRef<typeof Select_.Item>,
	'value' | 'children'
>;

export function SelectItem({children, value}: SelectItemProps) {
	return (
		<Select_.Item
			value={value}
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm pl-5 text-sm outline-none focus:bg-blue focus:text-white',
			)}>
			<Select_.ItemIndicator>
				<CheckIcon
					size={15}
					className={cn('absolute left-[3px] top-[3px]')}
				/>
			</Select_.ItemIndicator>
			<Select_.ItemText>{children}</Select_.ItemText>
		</Select_.Item>
	);
}
