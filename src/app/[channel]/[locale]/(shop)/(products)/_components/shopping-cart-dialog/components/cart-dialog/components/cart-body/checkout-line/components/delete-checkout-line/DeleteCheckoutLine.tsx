import {X} from 'lucide-react';
import {useRouter} from 'next/navigation';

import {FormattedMessage} from '@/i18n/react-intl';
import {IconButton} from '@/lib/components/ui/IconButton';
import {cn} from '@/lib/tools/cn';

import {deleteCheckoutLineAction} from './delete-checkout-line-action';

interface Props {
	readonly lineId: string;
	readonly onDelete: () => void;
}

export function DeleteCheckoutLine({lineId, onDelete}: Props) {
	const router = useRouter();

	return (
		<IconButton
			label={
				<FormattedMessage
					defaultMessage="Delete cart item"
					id="T3mGSH"
				/>
			}
			variant="neutral"
			className={cn('h-[17px] w-[17px] rounded-full')}
			onClick={async () => {
				onDelete();

				try {
					await deleteCheckoutLineAction(lineId);
					router.refresh();
				} catch (error) {
					// TODO: display server error
					console.error(error);
				}
			}}>
			<X width={13} height={13} />
		</IconButton>
	);
}
