import type {VariantProps} from 'cva';
import {cva} from 'cva';
import type {ButtonHTMLAttributes} from 'react';

import {cn} from '@/lib/tools/cn';

export const buttonStyles = cva(
	'inline-flex items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:select-none',
	{
		variants: {
			variant: {
				default: 'text-primary-foreground bg-blue hover:bg-blue/90',
				outline:
					'border border-input bg-white hover:bg-accent hover:text-accent-foreground',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				neutral:
					'bg-neutral-400 text-white focus-visible:ring-offset-2 focus-visible:ring-2 transition-all',
			},
			size: {
				default: 'h-10 px-4',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

export type ButtonProps = VariantProps<typeof buttonStyles> &
	ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
	children,
	variant,
	size,
	className,
	...restProps
}: ButtonProps) {
	return (
		<button
			className={cn(buttonStyles({variant, size}), className)}
			{...restProps}>
			{children}
		</button>
	);
}
