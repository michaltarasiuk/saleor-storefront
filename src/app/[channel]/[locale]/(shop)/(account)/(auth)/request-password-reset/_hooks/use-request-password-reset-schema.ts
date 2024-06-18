import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';

import {FIELDS} from '../_consts';

export type RequestPasswordResetSchema = zod.infer<
	ReturnType<typeof useRequestPasswordResetSchema>
>;

export function useRequestPasswordResetSchema() {
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
			}),
		[intl],
	);
}
