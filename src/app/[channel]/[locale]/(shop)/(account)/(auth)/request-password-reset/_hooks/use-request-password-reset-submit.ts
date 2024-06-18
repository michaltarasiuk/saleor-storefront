import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {ORIGIN} from '@/env/env-local';
import {useChannel} from '@/i18n/context/channel-context';
import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';
import {APP_ROUTES} from '@/lib/consts';

import {requestPasswordReset} from '../_tools/request-password-reset';
import type {RequestPasswordResetSchema} from './use-request-password-reset-schema';

export function useRequestPasswordResetSubmit(
	form: UseFormReturn<RequestPasswordResetSchema>,
) {
	const intl = useIntl();
	const channel = useChannel();

	return useCallback(
		async ({email}: RequestPasswordResetSchema) => {
			try {
				const {errors} =
					(
						await requestPasswordReset({
							email,
							channel,
							redirectUrl: new URL(
								APP_ROUTES.SET_PASSWORD,
								ORIGIN,
							).toString(),
						})
					).requestPasswordReset ?? {};

				if (errors?.length) {
					// TODO: display server error
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
									'Reset link was sent to {email} mailbox',
								id: '06/qxx',
							},
							{email},
						),
					});
				}
			} catch (error) {
				console.error(error);
			}
		},
		[channel, form, intl],
	);
}
