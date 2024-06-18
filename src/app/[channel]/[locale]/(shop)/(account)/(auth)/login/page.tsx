import {Divider} from '@/app/[channel]/[locale]/(shop)/(account)/(auth)/_components/Divider';
import {FormattedMessage} from '@/i18n/react-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Description} from '../_components/Description';
import {GoogleButton} from '../_components/GoogleButton';
import {Heading} from '../_components/Heading';
import {NavigationLink} from '../_components/NavigationLink';
import {LoginForm} from './_components/LoginForm';

export default function LoginPage() {
	return (
		<>
			<NavigationLink href={formatPathname(APP_ROUTES.SIGNUP)}>
				<FormattedMessage defaultMessage="Sign up" id="8HJxXG" />
			</NavigationLink>
			<section className={cn('text-center')}>
				<Heading>
					<FormattedMessage
						defaultMessage="Welcome back"
						id="UKxoV8"
					/>
				</Heading>
				<Description>
					<FormattedMessage
						defaultMessage="Enter email and password to log in"
						id="VxQzFj"
					/>
				</Description>
			</section>
			<LoginForm />
			<Divider>
				<FormattedMessage
					defaultMessage="Or continue with"
					id="4cSA+G"
				/>
			</Divider>
			<GoogleButton>
				<FormattedMessage
					defaultMessage="Login with Google"
					id="hfuuOe"
				/>
			</GoogleButton>
		</>
	);
}
