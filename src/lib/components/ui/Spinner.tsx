import type {VariantProps} from 'cva';
import {cva} from 'cva';

import {cn} from '@/lib/tools/cn';

import {Icons} from './Icons';

const styles = cva('animate-spin', {
	variants: {
		size: {
			base: 'h-4 w-4',
			lg: 'h-6 w-6',
		},
	},
	defaultVariants: {
		size: 'base',
	},
});

type Props = VariantProps<typeof styles>;

export function Spinner({size}: Props) {
	return <Icons.Spinner className={cn(styles({size}))} />;
}
