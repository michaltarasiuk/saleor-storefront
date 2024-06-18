import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function Divider({children}: PropsWithChildren) {
	return (
		<div className={cn('relative flex justify-center')}>
			<div className={cn('z-10 bg-background px-2 uppercase')}>
				<span className={cn('text-sm text-muted-foreground')}>
					{children}
				</span>
			</div>
			<div className={cn('absolute inset-0 flex items-center')}>
				<span className={cn('w-full border-t')} />
			</div>
		</div>
	);
}
