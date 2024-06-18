'use client';

import * as Select_ from '@radix-ui/react-select';
import {Check, ChevronDown} from 'lucide-react';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';

export const Select = Select_.Root;

export const SelectValue = Select_.Value;

type SelectTriggerProps = ComponentPropsWithoutRef<typeof Select_.Trigger>;

export function SelectTrigger({
	className,
	children,
	...restProps
}: SelectTriggerProps) {
	return (
		<Select_.Trigger
			className={cn(
				'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...restProps}>
			{children}
			<Select_.Icon asChild>
				<ChevronDown className={cn('h-4 w-4 opacity-50')} />
			</Select_.Icon>
		</Select_.Trigger>
	);
}

type SelectContentProps = ComponentPropsWithoutRef<typeof Select_.Content>;

export function SelectContent({
	className,
	children,
	position = 'popper',
	...restProps
}: SelectContentProps) {
	return (
		<Select_.Portal>
			<Select_.Content
				className={cn(
					'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
					position === 'popper' &&
						'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
					className,
				)}
				position={position}
				{...restProps}>
				<Select_.Viewport
					className={cn(
						'p-1',
						position === 'popper' &&
							'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
					)}>
					{children}
				</Select_.Viewport>
			</Select_.Content>
		</Select_.Portal>
	);
}

type SelectItemProps = ComponentPropsWithoutRef<typeof Select_.Item>;

export function SelectItem({
	className,
	children,
	...restProps
}: SelectItemProps) {
	return (
		<Select_.Item
			className={cn(
				'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className,
			)}
			{...restProps}>
			<span
				className={cn(
					'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
				)}>
				<Select_.ItemIndicator>
					<Check className={cn('h-4 w-4')} />
				</Select_.ItemIndicator>
			</span>
			<Select_.ItemText>{children}</Select_.ItemText>
		</Select_.Item>
	);
}
