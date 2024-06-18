import {IntlLink} from '@/i18n/components/IntlLink';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

interface Props {
	readonly name: string;
	readonly value: string;
}

export async function ShippingReviewRow({name, value}: Props) {
	const intl = await getIntl(getLocale());

	return (
		<div role="row" className={cn('flex py-2')}>
			<div role="cell" className={cn('flex flex-1')}>
				<div className={cn('min-w-[6rem]')}>
					<span className={cn('text-sm text-grey-light')}>
						{name}
					</span>
				</div>
				<div>
					<bdo dir="ltr" className={cn('text-sm text-white')}>
						{value}
					</bdo>
				</div>
			</div>
			<div role="cell" className={cn('flex items-center')}>
				<IntlLink
					href={formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION)}
					className={cn(
						'text-xs text-blue underline transition-colors hover:text-blue-hovered',
					)}>
					{intl.formatMessage({
						defaultMessage: 'Change',
						id: 'BY343C',
					})}
				</IntlLink>
			</div>
		</div>
	);
}
