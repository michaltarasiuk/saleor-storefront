import type {HTMLAttributes} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = HTMLAttributes<HTMLDivElement>;

export function Skeleton({className, ...restProps}: Props) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-muted', className)}
			{...restProps}
		/>
	);
}
