import type {ComponentProps} from 'react';

import {Row as Row_} from '@/lib/components/ui/Table';
import {cn} from '@/lib/tools/cn';

type Props = Omit<ComponentProps<typeof Row_>, 'className'>;

export function Row({children, ...restProps}: Props) {
	return (
		<Row_ className={cn('border-b py-1')} {...restProps}>
			{children}
		</Row_>
	);
}
