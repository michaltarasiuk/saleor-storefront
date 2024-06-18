import {FormattedMessage} from '@/i18n/react-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Description} from '../_components/Description';
import {Heading} from '../_components/Heading';
import {NavigationLink} from '../_components/NavigationLink';
import {RequestPasswordResetForm} from './_components/RequestPasswordResetForm';

export default function RequestPasswordResetPage() {
	return (
		<>
			<NavigationLink href={formatPathname(APP_ROUTES.LOGIN)}>
				<FormattedMessage defaultMessage="Back" id="cyR7Kh" />
			</NavigationLink>
			<section className={cn('text-center')}>
				<Heading>
					<FormattedMessage
						defaultMessage="Request password reset"
						id="Wtffln"
					/>
				</Heading>
				<Description>
					<FormattedMessage
						defaultMessage="Enter your email to receive reset link"
						id="9KlUdb"
					/>
				</Description>
			</section>
			<RequestPasswordResetForm />
		</>
	);
}
