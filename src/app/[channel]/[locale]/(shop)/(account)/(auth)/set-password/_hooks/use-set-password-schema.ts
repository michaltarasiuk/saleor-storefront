import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';
import {MIN_PASSWORD_LENGTH} from '@/modules/account/consts';

import {FIELDS} from '../_consts';

export type SetPasswordFormSchema = zod.infer<
	ReturnType<typeof useSetPasswordSchema>
>;

export function useSetPasswordSchema() {
	const intl = useIntl();

	return useMemo(
		() =>
			zod
				.object({
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
					[FIELDS.CONFIRM_PASSWORD]: zod.string({
						invalid_type_error: intl.formatMessage({
							defaultMessage: 'Enter a valid confirm password',
							id: '8QOEAp',
						}),
						required_error: intl.formatMessage({
							defaultMessage: 'Enter a confirm password',
							id: 'U8vrFK',
						}),
					}),
				})
				.refine(
					({password, confirmPassword}) =>
						password === confirmPassword,
					{
						message: 'Passwords do not match',
						path: ['confirmPassword'],
					},
				),
		[intl],
	);
}
