'use client';

import * as DropdownMenu_ from '@radix-ui/react-dropdown-menu';
import {CheckIcon, ChevronRightIcon} from 'lucide-react';

import {cn} from '@/lib/tools/cn';

export const DropdownMenu = DropdownMenu_.Root;

export const DropdownMenuTrigger = DropdownMenu_.Trigger;

export const DropdownMenuSub = DropdownMenu_.Sub;

export function DropdownMenuSubTrigger({
	children,
	className,
	...restProps
}: DropdownMenu_.DropdownMenuSubTriggerProps) {
	return (
		<DropdownMenu_.SubTrigger
			className={cn(
				'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
				className,
			)}
			{...restProps}>
			{children}
			<span aria-hidden>{'\0'}</span>
			<ChevronRightIcon className={cn('ml-auto h-4 w-4')} />
		</DropdownMenu_.SubTrigger>
	);
}

export function DropdownMenuSubContent({
	className,
	sideOffset = 4,
	...restProps
}: DropdownMenu_.DropdownMenuSubContentProps) {
	return (
		<DropdownMenu_.Portal>
			<DropdownMenu_.SubContent
				className={cn(
					'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
					className,
				)}
				sideOffset={sideOffset}
				{...restProps}
			/>
		</DropdownMenu_.Portal>
	);
}

export function DropdownMenuContent({
	className,
	sideOffset = 4,
	...restProps
}: DropdownMenu_.DropdownMenuContentProps) {
	return (
		<DropdownMenu_.Portal>
			<DropdownMenu_.Content
				className={cn(
					'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
					className,
				)}
				sideOffset={sideOffset}
				{...restProps}
			/>
		</DropdownMenu_.Portal>
	);
}

export function DropdownMenuItem({
	className,
	...restProps
}: DropdownMenu_.DropdownMenuItemProps) {
	return (
		<DropdownMenu_.Item
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className,
			)}
			{...restProps}
		/>
	);
}

export function DropdownMenuSeparator({
	className,
	...restProps
}: DropdownMenu_.MenuSeparatorProps) {
	return (
		<DropdownMenu_.Separator
			className={cn('-mx-1 my-1 h-px bg-muted', className)}
			{...restProps}
		/>
	);
}

export function DropdownMenuCheckBoxItem({
	children,
	className,
	...restProps
}: DropdownMenu_.DropdownMenuCheckboxItemProps) {
	return (
		<DropdownMenu_.CheckboxItem
			className={cn(
				'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className,
			)}
			{...restProps}>
			<span
				className={cn(
					'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
				)}>
				<DropdownMenu_.ItemIndicator>
					<CheckIcon className={cn('h-4 w-4 text-grey')} />
				</DropdownMenu_.ItemIndicator>
			</span>
			{children}
		</DropdownMenu_.CheckboxItem>
	);
}
