import Image from 'next/image';
import type {LinkProps} from 'next/link';

import {IntlLink} from '@/i18n/components/IntlLink';
import {cn} from '@/lib/tools/cn';

export function LinkedLogo({href}: Pick<LinkProps, 'href'>) {
	return (
		<div className={cn('h-9 w-9')}>
			<IntlLink href={href}>
				<Image
					src="/assets/saleor-logo.svg"
					alt="Saleor home"
					width={100}
					height={100}
					className={cn('h-full w-full')}
				/>
			</IntlLink>
		</div>
	);
}
