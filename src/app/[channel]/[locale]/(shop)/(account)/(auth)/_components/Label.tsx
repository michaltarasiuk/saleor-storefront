import type {ComponentProps} from 'react';

import {Label as Label_} from '@/lib/components/ui/Label';
import {cn} from '@/lib/tools/cn';

type LabelProps = Omit<ComponentProps<typeof Label_>, 'className'>;

export function Label({children, ...restProps}: LabelProps) {
	return (
		<Label_ className={cn('font-medium')} {...restProps}>
			{children}
		</Label_>
	);
}
