import type {HTMLAttributes} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = Omit<HTMLAttributes<HTMLSpanElement>, 'role' | 'className'>;

export function ErrorText({
	children,
	['aria-errormessage']: fallbackChildren,
	...restProps
}: Props) {
	return (
		<span
			role="alert"
			className={cn('text-sm leading-none text-destructive')}
			{...restProps}>
			{children ?? fallbackChildren}
		</span>
	);
}
