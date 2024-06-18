import {Divider} from '@/app/[channel]/[locale]/(shop)/(account)/(auth)/_components/Divider';
import {FormattedMessage} from '@/i18n/react-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Description} from '../_components/Description';
import {GoogleButton} from '../_components/GoogleButton';
import {Heading} from '../_components/Heading';
import {NavigationLink} from '../_components/NavigationLink';
import {SignupForm} from './_components/SignupForm';

export default function SignupPage() {
	return (
		<>
			<NavigationLink href={formatPathname(APP_ROUTES.LOGIN)}>
				<FormattedMessage defaultMessage="Login" id="AyGauy" />
			</NavigationLink>
			<section className={cn('text-center')}>
				<Heading>
					<FormattedMessage
						defaultMessage="Create an account"
						id="0vL5u1"
					/>
				</Heading>
				<Description>
					<FormattedMessage
						defaultMessage="Enter email and password to create account"
						id="Omjm4o"
					/>
				</Description>
			</section>
			<SignupForm />
			<Divider>
				<FormattedMessage
					defaultMessage="Or continue with"
					id="4cSA+G"
				/>
			</Divider>
			<GoogleButton>
				<FormattedMessage
					defaultMessage="Sign up with Google"
					id="wUCGLt"
				/>
			</GoogleButton>
		</>
	);
}
