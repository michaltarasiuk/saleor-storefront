import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';
import {MIN_PASSWORD_LENGTH} from '@/modules/account/consts';

import {FIELDS} from '../fields';

export type ChangePasswordSchema = zod.infer<
	ReturnType<typeof useChangePasswordSchema>
>;

export function useChangePasswordSchema() {
	const intl = useIntl();

	return useMemo(
		() =>
			zod
				.object({
					[FIELDS.OLD_PASSWORD]: zod.string({
						invalid_type_error: intl.formatMessage({
							defaultMessage: 'Enter a valid old password',
							id: 'fbQ+L1',
						}),
						required_error: intl.formatMessage({
							defaultMessage: 'Enter a old password',
							id: '48k4Ow',
						}),
					}),
					[FIELDS.NEW_PASSWORD]: zod
						.string({
							invalid_type_error: intl.formatMessage({
								defaultMessage: 'Enter a valid new password',
								id: 'vDJsvf',
							}),
							required_error: intl.formatMessage({
								defaultMessage: 'Enter a new password',
								id: 'BQMO3t',
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
					({newPassword, confirmPassword}) =>
						newPassword === confirmPassword,
					{
						message: 'Passwords do not match',
						path: ['confirmPassword'],
					},
				),
		[intl],
	);
}
