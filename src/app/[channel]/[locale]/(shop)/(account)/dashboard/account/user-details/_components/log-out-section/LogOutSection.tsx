import {getIntl} from '@/i18n/get-intl';

import {SectionHeading} from '../SectionHeading';
import {UserDetailsSection} from '../UserDetailsSection';
import {LogOutButton} from './LogOutButton';

export async function LogOutSection() {
	const intl = await getIntl();

	return (
		<UserDetailsSection>
			<SectionHeading>
				{intl.formatMessage({defaultMessage: 'Controls', id: 'l3CDSb'})}
			</SectionHeading>
			<LogOutButton />
		</UserDetailsSection>
	);
}
