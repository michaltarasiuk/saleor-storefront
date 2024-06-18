import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';
import {MIN_PASSWORD_LENGTH} from '@/modules/account/consts';

import {FIELDS} from '../_consts';

export type SignupFormSchema = zod.infer<
	ReturnType<typeof useSignupFormSchema>
>;

export function useSignupFormSchema() {
	const intl = useIntl();

	return useMemo(
		() =>
			zod.object({
				[FIELDS.EMAIL]: zod
					.string({
						invalid_type_error: intl.formatMessage({
							defaultMessage: 'Enter a valid email',
							id: 'PFfzPv',
						}),
						required_error: intl.formatMessage({
							defaultMessage: 'Enter a email',
							id: '+m0IDF',
						}),
					})
					.email({
						message: intl.formatMessage({
							defaultMessage: 'Enter a valid email',
							id: 'PFfzPv',
						}),
					}),
				[FIELDS.PASSWORD]: zod
					.string({
						invalid_type_error: intl.formatMessage({
							defaultMessage: 'Enter a valid password',
							id: 'TZm4bq',
						}),
						required_error: intl.formatMessage({
							defaultMessage: 'Enter a password',
							id: '9pBa/R',
						}),
					})
					.min(MIN_PASSWORD_LENGTH, {
						message: intl.formatMessage({
							defaultMessage:
								'Passwords must be at least 8 characters',
							id: 'OSAM2w',
						}),
					}),
			}),
		[intl],
	);
}
