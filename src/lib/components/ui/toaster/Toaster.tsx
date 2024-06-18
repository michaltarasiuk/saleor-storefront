import {XIcon} from 'lucide-react';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

import {IconButton} from '../IconButton';
import {Toast} from './Toast';

export interface ToasterProps {
	readonly title: string;
	readonly description: string;
	readonly variant: 'default' | 'destructive';
	readonly onClose: () => void;
}

export function Toaster({title, description, variant, onClose}: ToasterProps) {
	return (
		<Toast variant={variant}>
			<ToastTitle>{title}</ToastTitle>
			<ToastDescription>{description}</ToastDescription>
			<ToastClose onClick={onClose} />
		</Toast>
	);
}

function ToastTitle({children}: PropsWithChildren) {
	return (
		<span
			className={cn(
				'text-sm font-semibold group-[.destructive]:text-white',
			)}
			role="alert">
			{children}
		</span>
	);
}

function ToastDescription({children}: PropsWithChildren) {
	return (
		<span
			className={cn('text-sm opacity-90 group-[.destructive]:text-white')}
			role="alert">
			{children}
		</span>
	);
}

interface ToastCloseProps {
	readonly onClick: () => void;
}

function ToastClose({onClick}: ToastCloseProps) {
	return (
		<IconButton
			label="Close"
			className={cn(
				'absolute right-2 top-2 rounded-md p-1 text-primary/50 opacity-0 transition-opacity hover:text-primary focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
			)}
			onClick={onClick}>
			<XIcon className={cn('h-4 w-4')} />
		</IconButton>
	);
}
