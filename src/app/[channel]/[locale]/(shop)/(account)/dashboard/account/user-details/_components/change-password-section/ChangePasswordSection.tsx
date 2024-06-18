import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';

import {SectionHeading} from '../SectionHeading';
import {UserDetailsSection} from '../UserDetailsSection';
import {ChangePassowrdForm} from './ChangePassowrdForm';

export async function ChangePasswordSection() {
	const intl = await getIntl(getLocale());

	return (
		<UserDetailsSection>
			<SectionHeading>
				{intl.formatMessage({
					defaultMessage: 'Change password',
					id: 'L4nXIc',
				})}
			</SectionHeading>
			<ChangePassowrdForm />
		</UserDetailsSection>
	);
}
