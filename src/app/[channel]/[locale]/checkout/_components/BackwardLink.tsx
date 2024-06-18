import {ChevronLeftIcon} from 'lucide-react';
import type {ComponentProps} from 'react';

import {IntlLink} from '@/i18n/components/IntlLink';
import {cn} from '@/lib/tools/cn';

type Props = Omit<ComponentProps<typeof IntlLink>, 'className'>;

export function BackwardLink({children, ...restProps}: Props) {
	return (
		<IntlLink
			className={cn(
				'flex items-center gap-2 py-1.5 text-sm text-blue transition-colors hover:text-blue-hovered',
			)}
			{...restProps}>
			<ChevronLeftIcon size={17} />
			{children}
		</IntlLink>
	);
}
