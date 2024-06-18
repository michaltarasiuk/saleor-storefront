import {useCallback, useMemo, useTransition} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {ORIGIN} from '@/env/env-local';
import {useChannel} from '@/i18n/context/channel-context';
import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {logInAction} from '../../_tools/log-in-action';
import {signUp} from '../_tools/sign-up';
import type {SignupFormSchema} from './use-signup-form-schema';

export function useSignupSubmit(form: UseFormReturn<SignupFormSchema>) {
	const intlRouter = useIntlRouter();
	const channel = useChannel();
	const toast = useToast();
	const [pending, startTransition] = useTransition();

	const signupSubmit = useCallback(
		async ({email, password}: SignupFormSchema) => {
			try {
				const {requiresConfirmation, user, errors} =
					(
						await signUp({
							email,
							password,
							channel,
							redirectUrl: new URL(
								APP_ROUTES.CONFIRM_ACCOUNT,
								ORIGIN,
							).toString(),
						})
					).accountRegister ?? {};

				if (!errors?.length) {
					toast.destructive();
					return;
				}

				if (requiresConfirmation) {
					if (user) toast.successRegister(user.email);
				} else {
					const {type, result} = await logInAction({email, password});

					if (type === 'success') {
						localStorage.setItem(result.name, result.value);

						form.reset();
						toast.successLogin();

						startTransition(() => {
							intlRouter.push(formatPathname(APP_ROUTES.ROOT));
						});
					}
				}
			} catch (error) {
				console.error(error);
			}
		},
		[channel, form, intlRouter, toast],
	);

	return {
		signupSubmit,
		pending,
	};
}

function useToast() {
	const intl = useIntl();

	return useMemo(
		() => ({
			successRegister(email: string) {
				toast.default({
					title: intl.formatMessage({
						defaultMessage: 'Success',
						id: 'xrKHS6',
					}),
					description: intl.formatMessage(
						{
							defaultMessage:
								'Confirmation email was sent to {email} mailbox.',
							id: 'OFXKGv',
						},
						{email},
					),
				});
			},
			successLogin() {
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
			},
			destructive() {
				toast.destructive({
					title: intl.formatMessage({
						defaultMessage: 'Error',
						id: 'KN7zKn',
					}),
					description: intl.formatMessage({
						defaultMessage: 'Failed to sign up',
						id: 'bUnGvj',
					}),
				});
			},
		}),
		[intl],
	);
}
