import {ShoppingCartIcon} from 'lucide-react';

import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {Dialog, DialogTrigger} from '@/lib/components/ui/Dialog';
import {cn} from '@/lib/tools/cn';

import {DialogContent} from './DialogContent';
import {ShoppingCartButton} from './ShoppingCartButton';

export async function EmptyCartDialog() {
	const intl = await getIntl(getLocale());

	return (
		<Dialog>
			<DialogTrigger asChild>
				<ShoppingCartButton />
			</DialogTrigger>
			<DialogContent>
				<ShoppingCartIcon className={cn('mx-auto mt-20')} size={60} />
				<p className={cn('mt-6 text-center text-2xl font-bold')}>
					{intl.formatMessage({
						defaultMessage: 'Your cart is empty.',
						id: '8N2GKa',
					})}
				</p>
			</DialogContent>
		</Dialog>
	);
}
