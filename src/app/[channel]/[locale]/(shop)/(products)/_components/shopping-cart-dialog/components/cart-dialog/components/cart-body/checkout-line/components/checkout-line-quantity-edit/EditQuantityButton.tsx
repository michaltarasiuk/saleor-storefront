import {MinusIcon, PlusIcon} from 'lucide-react';
import {FormattedMessage} from 'react-intl';

import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

interface Props {
	readonly type: 'increase' | 'decrease';
	readonly formAction: () => void;
	readonly disabled: boolean;
}

export function EditQuantityButton({type, formAction, disabled}: Props) {
	return (
		<IconButton
			variant="ghost"
			disabled={disabled}
			label={
				type === 'increase' ? (
					<FormattedMessage
						defaultMessage="Increase quantity"
						id="3ZPs5M"
					/>
				) : (
					<FormattedMessage
						defaultMessage="Reduce quantity"
						id="YYfgYY"
					/>
				)
			}
			className={cn(
				'h-8 w-8 flex-shrink-0 rounded-full transition-all hover:bg-transparent focus-visible:ring-2 focus-visible:ring-offset-2',
			)}
			formAction={formAction}>
			{type === 'increase' ? (
				<PlusIcon className={cn('h-4 w-4')} />
			) : (
				<MinusIcon className={cn('h-4 w-4')} />
			)}
		</IconButton>
	);
}
