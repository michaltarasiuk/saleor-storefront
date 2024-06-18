import {useCallback, useTransition} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {setPasswordAction} from '../_tools/set-password-action';
import type {SetPasswordFormSchema} from './use-set-password-schema';

export function useSetPasswordSubmit(
	form: UseFormReturn<SetPasswordFormSchema>,
	{email, token}: {readonly email: string; readonly token: string},
) {
	const intlRouter = useIntlRouter();
	const intl = useIntl();

	const [pending, startTransition] = useTransition();

	const setPasswordSubmit = useCallback(
		async ({password}: SetPasswordFormSchema) => {
			try {
				const {type, result} = await setPasswordAction({
					email,
					token,
					password,
				});

				if (type === 'success') {
					localStorage.setItem(result.name, result.value);

					form.reset();
					toast.default({
						title: intl.formatMessage({
							defaultMessage: 'Success',
							id: 'xrKHS6',
						}),
						description: intl.formatMessage({
							defaultMessage: 'Successfuly logged in.',
							id: 'r/rQ02',
						}),
					});

					startTransition(() => {
						intlRouter.push(formatPathname(...APP_ROUTES.ROOT));
					});
				}
			} catch (error) {
				console.error(error);
			}
		},
		[email, form, intl, intlRouter, token],
	);

	return {
		pending,
		setPasswordSubmit,
	};
}
