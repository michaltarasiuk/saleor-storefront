import type {VariantProps} from 'cva';
import {cva} from 'cva';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

const styles = cva(
	'group relative flex flex-col overflow-hidden rounded-md border py-3 pl-4 pr-5 shadow-lg sm:w-toast-dektop w-toast-mobile',
	{
		variants: {
			variant: {
				default: 'border bg-background',
				destructive:
					'group destructive border-destructive bg-destructive text-destructive-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

type Props = VariantProps<typeof styles>;

export function Toast({variant, children}: PropsWithChildren<Props>) {
	return <div className={cn(styles({variant}))}>{children}</div>;
}
