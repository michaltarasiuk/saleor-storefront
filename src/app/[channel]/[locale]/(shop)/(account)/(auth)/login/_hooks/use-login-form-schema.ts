import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';

import {FIELDS} from '../_consts';

export type LoginFormSchema = zod.infer<ReturnType<typeof useLoginFormSchema>>;

export function useLoginFormSchema() {
	const intl = useIntl();

	return useMemo(
		() =>
			zod.object({
				[FIELDS.EMAIL]: zod.string({
					invalid_type_error: intl.formatMessage({
						defaultMessage: 'Enter a valid email',
						id: 'PFfzPv',
					}),
					required_error: intl.formatMessage({
						defaultMessage: 'Enter a email',
						id: '+m0IDF',
					}),
				}),
				[FIELDS.PASSWORD]: zod.string({
					invalid_type_error: intl.formatMessage({
						defaultMessage: 'Enter a valid password',
						id: 'TZm4bq',
					}),
					required_error: intl.formatMessage({
						defaultMessage: 'Enter a password',
						id: '9pBa/R',
					}),
				}),
			}),
		[intl],
	);
}
