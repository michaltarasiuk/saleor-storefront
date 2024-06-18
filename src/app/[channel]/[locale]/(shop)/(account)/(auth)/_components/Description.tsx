import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function Description({children}: PropsWithChildren) {
	return <p className={cn('text-sm text-muted-foreground')}>{children}</p>;
}
