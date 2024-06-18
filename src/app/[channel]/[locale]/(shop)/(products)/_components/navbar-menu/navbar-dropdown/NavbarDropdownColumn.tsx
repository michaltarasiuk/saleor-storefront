import type {PropsWithChildren} from 'react';

import {cn} from '@/lib/tools/cn';

export function NavbarDropdownColumn({children}: PropsWithChildren) {
	return <div className={cn('flex flex-col gap-4')}>{children}</div>;
}
