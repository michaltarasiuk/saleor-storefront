import {SearchIcon} from 'lucide-react';

import {FormattedMessage} from '@/i18n/react-intl';
import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

export function SearchButton() {
	return (
		<IconButton
			variant="ghost"
			label={
				<FormattedMessage
					defaultMessage="Search products"
					id="un+VWt"
				/>
			}>
			<SearchIcon className={cn('h-5 w-5')} />
		</IconButton>
	);
}
