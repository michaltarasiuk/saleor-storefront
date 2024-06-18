import {redirect} from 'next/navigation';

import {FormattedMessage} from '@/i18n/react-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Description} from '../_components/Description';
import {Heading} from '../_components/Heading';
import {SetPasswordForm} from './_components/SetPasswordForm';

interface Props {
	readonly searchParams: {
		readonly email?: string;
		readonly token?: string;
	};
}

export default async function SetPasswordPage({
	searchParams: {email, token},
}: Props) {
	if (!email || !token) {
		redirect(formatPathname(APP_ROUTES.LOGIN));
	}

	return (
		<>
			<section className={cn('text-center')}>
				<Heading>
					<FormattedMessage
						defaultMessage="Set password"
						id="QOiG4E"
					/>
				</Heading>
				<Description>
					<FormattedMessage
						defaultMessage="Enter your new password"
						id="h/zqNr"
					/>
				</Description>
			</section>
			<SetPasswordForm email={email} token={token} />
		</>
	);
}
