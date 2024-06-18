import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function UserDetailsSection({children}: PropsWithChildren) {
	return <section className={cn('space-y-2')}>{children}</section>;
}
