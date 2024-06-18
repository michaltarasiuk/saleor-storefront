import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';

import {SectionHeading} from '../SectionHeading';
import {UserDetailsSection} from '../UserDetailsSection';
import {RequestEmailChangeForm} from './RequestEmailChangeForm';

export async function RequestEmailChangeSection() {
	const intl = await getIntl(getLocale());

	return (
		<UserDetailsSection>
			<SectionHeading>
				{intl.formatMessage({
					defaultMessage: 'Request email change',
					id: 'HrdHC1',
				})}
			</SectionHeading>
			<RequestEmailChangeForm />
		</UserDetailsSection>
	);
}
