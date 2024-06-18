'use client';

import type {VariantProps} from 'cva';
import {cva} from 'cva';
import type {ComponentProps} from 'react';

import {IntlLink} from '@/i18n/components/IntlLink';
import {useBasePathRelative} from '@/lib/hooks/use-base-path-relative';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

const styles = cva(
	'flex flex-col text-center text-sm text-blue transition-colors after:pointer-events-none after:invisible after:h-0 after:select-none after:overflow-hidden after:font-bold after:content-[attr(data-text)] hover:text-blue-hovered',
	{
		variants: {
			active: {
				true: 'font-bold text-white hover:text-white',
			},
			disabled: {
				true: 'pointer-events-none cursor-text text-grey hover:text-grey',
			},
		},
	},
);

type Props = ComponentProps<typeof IntlLink> &
	Omit<VariantProps<typeof styles>, 'active'>;

export function BreadcrumbLink({
	children,
	href,
	disabled,
	...restProps
}: PropsWithChildren<Props>) {
	const basePathRelative = useBasePathRelative();

	return (
		<IntlLink
			href={href}
			className={cn(
				styles({
					disabled,
					active: basePathRelative === href,
				}),
			)}
			data-text={children}
			{...restProps}>
			{children}
		</IntlLink>
	);
}
