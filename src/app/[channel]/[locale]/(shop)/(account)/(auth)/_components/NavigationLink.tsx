import type {LinkProps} from 'next/link';

import {IntlLink} from '@/i18n/components/IntlLink';
import {buttonStyles} from '@/lib/components/ui/Button';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props extends Pick<LinkProps, 'href'> {}

export function NavigationLink({href, children}: PropsWithChildren<Props>) {
	return (
		<IntlLink
			href={href}
			className={cn(
				buttonStyles({variant: 'ghost'}),
				'absolute right-4 top-4 font-medium md:right-8 md:top-8',
			)}>
			{children}
		</IntlLink>
	);
}
