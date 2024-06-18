import {FormattedMessage} from '@/i18n/react-intl';
import {DialogContent as DialogContent_} from '@/lib/components/ui/Dialog';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function DialogContent({children}: PropsWithChildren) {
	return (
		<DialogContent_
			dialogTitle={
				<FormattedMessage defaultMessage="My Cart" id="CTSLLJ" />
			}
			className={cn(
				'right-0 top-0 flex h-full w-full flex-col px-6 py-7 sm:w-[390px]',
			)}>
			{children}
		</DialogContent_>
	);
}
