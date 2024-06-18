import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function Heading({children}: PropsWithChildren) {
	return (
		<h2 className={cn('text-[1.05rem] font-bold leading-5 text-white')}>
			{children}
		</h2>
	);
}
