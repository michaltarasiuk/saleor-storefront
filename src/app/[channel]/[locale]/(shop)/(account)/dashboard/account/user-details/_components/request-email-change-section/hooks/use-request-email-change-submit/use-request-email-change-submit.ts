import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {ORIGIN} from '@/env/env-local';
import {useChannel} from '@/i18n/context/channel-context';
import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {RequestEmailChangeSchema} from '../use-request-email-change-schema';
import {requestEmailChangeAction} from './request-email-change-action';

export function useRequestEmailChangeSubmit(
	form: UseFormReturn<RequestEmailChangeSchema>,
) {
	const channel = useChannel();
	const intl = useIntl();

	return useCallback(
		async ({newEmail, password}: RequestEmailChangeSchema) => {
			try {
				const {errors} =
					(await requestEmailChangeAction({
						channel,
						newEmail,
						password,
						redirectUrl: new URL(
							formatPathname(
								...APP_ROUTES.DASHBOARD.ACCOUNT
									.CONFIRM_EMAIL_CHANGE,
							),
							ORIGIN,
						).toString(),
					})) ?? {};

				if (errors?.length) {
					// TODO: display server error
					console.error(errors);
				} else {
					form.reset();

					toast.default({
						title: intl.formatMessage({
							defaultMessage: 'Success',
							id: 'xrKHS6',
						}),
						description: intl.formatMessage(
							{
								defaultMessage:
									'Confirmation link was sent to {newEmail} mailbox',
								id: 'pJU6x5',
							},
							{newEmail},
						),
					});
				}
			} catch (error) {
				// TODO: display server error
				console.error(error);
			}
		},
		[channel, form, intl],
	);
}
