'use client';

import {useState} from 'react';

import {FormattedMessage} from '@/i18n/react-intl';
import {Button} from '@/lib/components/ui/Button';

import {useLogOut} from './hooks/use-log-out';

export function LogOutButton() {
	const [isPending, setIsPending] = useState(false);
	const logOut = useLogOut();

	return (
		<Button
			onClick={async () => {
				setIsPending(true);
				await logOut();
				setIsPending(false);
			}}
			disabled={isPending}>
			<FormattedMessage defaultMessage="Log out" id="PlBReU" />
		</Button>
	);
}
