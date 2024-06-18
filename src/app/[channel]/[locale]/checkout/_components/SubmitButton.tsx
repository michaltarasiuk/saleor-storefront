import type {VariantProps} from 'cva';
import {cva} from 'cva';

import {Spinner} from '@/lib/components/ui/Spinner';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

const styles = cva(
	'relative rounded-md bg-blue p-5 text-sm font-bold text-white transition-colors hover:bg-blue-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black',
	{
		variants: {
			disabled: {
				true: 'bg-blue-foreground cursor-not-allowed group',
			},
		},
	},
);

type Props = VariantProps<typeof styles>;

export function SubmitButton({children, disabled}: PropsWithChildren<Props>) {
	return (
		<button
			type="submit"
			className={cn(
				styles({
					disabled,
				}),
			)}
			disabled={disabled ?? false}>
			<span className={cn('group-disabled:invisible')}>{children}</span>
			<span
				className={cn(
					'invisible absolute inset-0 flex items-center justify-center group-disabled:visible',
				)}>
				<Spinner size="lg" />
			</span>
		</button>
	);
}
