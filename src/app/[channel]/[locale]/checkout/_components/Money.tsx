import type {VariantProps} from 'cva';
import {cva} from 'cva';
import type {ComponentProps} from 'react';

import {FormattedPrice} from '@/i18n/components/FormattedPrice';
import {cn} from '@/lib/tools/cn';

type Props = ComponentProps<typeof FormattedPrice> &
	VariantProps<typeof styles>;

const styles = cva('text-white text-sm', {
	variants: {
		large: {
			true: 'text-base',
		},
		bold: {
			true: 'font-bold',
		},
	},
});

export function Money({value, currency, large, bold}: Props) {
	return (
		<span className={cn(styles({large, bold}))}>
			<FormattedPrice value={value} currency={currency} />
		</span>
	);
}
