import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';

export async function Introduction() {
	const intl = await getIntl(getLocale());

	return (
		<section>
			<h3 className={cn('text-lg font-medium')}>
				{intl.formatMessage({
					defaultMessage: 'User details',
					id: '/uUIep',
				})}
			</h3>
			<p className={cn('text-sm font-light text-muted-foreground')}>
				{intl.formatMessage({
					defaultMessage: 'Update your user details settings.',
					id: 'kFjJxN',
				})}
			</p>
		</section>
	);
}
