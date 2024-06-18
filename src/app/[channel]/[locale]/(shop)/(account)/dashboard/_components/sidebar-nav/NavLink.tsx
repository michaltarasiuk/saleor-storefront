'use client';

import {IntlLink} from '@/i18n/components/IntlLink';
import {buttonStyles} from '@/lib/components/ui/Button';
import {useBasePathRelative} from '@/lib/hooks/use-base-path-relative';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props {
	readonly href: string;
}

export function NavLink({children, href}: PropsWithChildren<Props>) {
	const basePathRelative = useBasePathRelative();

	return (
		<IntlLink
			href={href}
			className={cn(
				buttonStyles({variant: 'ghost'}),
				basePathRelative === href
					? 'pointer-events-none cursor-default bg-muted hover:bg-muted'
					: 'hover:bg-transparent hover:underline',
				'w-full justify-start',
			)}>
			{children}
		</IntlLink>
	);
}
