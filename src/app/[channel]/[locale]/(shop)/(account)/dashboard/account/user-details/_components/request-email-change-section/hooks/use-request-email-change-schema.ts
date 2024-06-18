import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';
import {MIN_PASSWORD_LENGTH} from '@/modules/account/consts';

import {FIELDS} from '../fields';

export type RequestEmailChangeSchema = zod.infer<
	ReturnType<typeof useRequestEmailChangeSchema>
>;

export function useRequestEmailChangeSchema() {
	const intl = useIntl();

	return useMemo(
		() =>
			zod.object({
				[FIELDS.NEW_EMAIL]: zod
					.string({
						invalid_type_error: intl.formatMessage({
							defaultMessage: 'Enter a valid new email',
							id: 'Jl/tSJ',
						}),
						required_error: intl.formatMessage({
							defaultMessage: 'Enter a new email',
							id: 'dEsX9w',
						}),
					})
					.email({
						message: intl.formatMessage({
							defaultMessage: 'Enter a valid new email',
							id: 'Jl/tSJ',
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
