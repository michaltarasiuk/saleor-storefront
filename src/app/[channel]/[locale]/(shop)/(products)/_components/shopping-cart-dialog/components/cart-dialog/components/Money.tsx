import type {VariantProps} from 'cva';
import {cva} from 'cva';
import type {ComponentProps} from 'react';

import {FormattedPrice} from '@/i18n/components/FormattedPrice';
import {cn} from '@/lib/tools/cn';

const styles = cva('text-base', {
	variants: {
		sm: {
			true: 'text-sm',
		},
	},
});

type Props = ComponentProps<typeof FormattedPrice> &
	VariantProps<typeof styles>;

export function Money({value, currency, sm}: Props) {
	return (
		<p className={cn(styles({sm}))}>
			<FormattedPrice value={value} currency={currency} />
			<span className={cn('ml-1')}>{currency}</span>
		</p>
	);
}
