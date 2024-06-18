import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';

import type {ChangePasswordSchema} from '../use-change-password-schema';
import {changePasswordAction} from './change-password-action';

export function useChangePasswordSubmit(
	form: UseFormReturn<ChangePasswordSchema>,
) {
	const intl = useIntl();

	return useCallback(
		async ({oldPassword, newPassword}: ChangePasswordSchema) => {
			try {
				const {errors} =
					(await changePasswordAction({
						oldPassword,
						newPassword,
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
						description: intl.formatMessage({
							defaultMessage: 'Password changed successfully.',
							id: 'St4O02',
						}),
					});
				}
			} catch (error) {
				// TODO: display server error
				console.error(error);
			}
		},
		[form, intl],
	);
}
