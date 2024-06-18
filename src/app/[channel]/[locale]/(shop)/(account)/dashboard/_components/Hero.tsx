import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';

export async function Hero() {
	const intl = await getIntl(getLocale());

	return (
		<section className={cn('space-y-0.5')}>
			<h2 className={cn('text-2xl font-bold tracking-tight')}>
				{intl.formatMessage({
					defaultMessage: 'Dashboard',
					id: 'hzSNj4',
				})}
			</h2>
			<p className={cn('font-light text-muted-foreground')}>
				{intl.formatMessage({
					defaultMessage: 'Manage your account settings and orders.',
					id: 'JDSxM0',
				})}
			</p>
		</section>
	);
}
