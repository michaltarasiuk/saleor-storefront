import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function SectionHeading({children}: PropsWithChildren) {
	return <h3 className={cn('font-medium')}>{children}</h3>;
}
