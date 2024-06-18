import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function Heading({children}: PropsWithChildren) {
	return <h1 className={cn('text-2xl font-bold')}>{children}</h1>;
}
