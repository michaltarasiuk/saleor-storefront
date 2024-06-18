import {IntlLink} from '@/i18n/components/IntlLink';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {buttonStyles} from '@/lib/components/ui/Button';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

export async function ProceedToCheckout() {
	const intl = await getIntl(getLocale());

	return (
		<IntlLink
			href={formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION)}
			className={cn(
				buttonStyles(),
				'h-11 w-full rounded-full font-medium',
			)}>
			{intl.formatMessage({
				defaultMessage: 'Proceed to Checkout',
				id: 'z3Qj9h',
			})}
		</IntlLink>
	);
}
