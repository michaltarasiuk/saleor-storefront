'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
import type {ComponentPropsWithoutRef, ReactNode} from 'react';
import {forwardRef} from 'react';

import {FormattedMessage} from '@/i18n/react-intl';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

import {IconButton} from './IconButton';

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay: typeof DialogPrimitive.Overlay = forwardRef(
	function DialogOverlay({className, ...restProps}, ref) {
		return (
			<DialogPrimitive.Overlay
				ref={ref}
				className={cn(
					'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
					className,
				)}
				{...restProps}
			/>
		);
	},
);

function DialogTitle({children}: PropsWithChildren) {
	return (
		<DialogPrimitive.Title
			className={cn('text-lg font-semibold leading-none tracking-tight')}>
			{children}
		</DialogPrimitive.Title>
	);
}

interface DialogContentProps
	extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
	readonly dialogTitle: ReactNode;
}

export function DialogContent({
	children,
	dialogTitle,
	className,
	...restProps
}: PropsWithChildren<DialogContentProps>) {
	return (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Content
				className={cn(
					'fixed z-50 border-l bg-white transition-opacity duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
					className,
				)}
				{...restProps}>
				<div className={cn('flex w-full items-center justify-between')}>
					<DialogTitle>{dialogTitle}</DialogTitle>
					<DialogPrimitive.Close asChild>
						<IconButton
							variant="outline"
							label={
								<FormattedMessage
									defaultMessage="Close"
									id="rbrahO"
								/>
							}
							className={cn('hover:bg-white')}>
							<X className={cn('h-5 w-5')} />
						</IconButton>
					</DialogPrimitive.Close>
				</div>
				{children}
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}
