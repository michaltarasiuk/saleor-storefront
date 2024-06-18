import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function Text({children}: PropsWithChildren) {
	return <p className={cn('text-sm text-grey-light')}>{children}</p>;
}
