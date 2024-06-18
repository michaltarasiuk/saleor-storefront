'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import type {ElementRef} from 'react';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldDescription} from '@/lib/components/form/FormFieldDescription';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {FormFieldLabel} from '@/lib/components/form/FormFieldLabel';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {TextField} from '@/lib/components/ui/TextField';
import {useRefMountCallback} from '@/lib/hooks/use-ref-mount-callback';
import {deferInputFocus} from '@/lib/tools/defer-input-focus';

import {Form, FormFieldDescriptionText, FormItem} from '../../_components/Form';
import {Label} from '../../_components/Label';
import {SubmitButton} from '../../_components/SubmitButton';
import {FIELDS} from '../_consts';
import type {SetPasswordFormSchema} from '../_hooks/use-set-password-schema';
import {useSetPasswordSchema} from '../_hooks/use-set-password-schema';
import {useSetPasswordSubmit} from '../_hooks/use-set-password-submit';

interface Props {
	readonly email: string;
	readonly token: string;
}

export function SetPasswordForm({email, token}: Props) {
	const setPasswordSchema = useSetPasswordSchema();
	const form = useForm<SetPasswordFormSchema>({
		resolver: zodResolver(setPasswordSchema),
	});
	const {setPasswordSubmit, pending} = useSetPasswordSubmit(form, {
		email,
		token,
	});

	const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

	const disabled = form.formState.isSubmitting || pending;

	return (
		<Form form={form} onSubmit={form.handleSubmit(setPasswordSubmit)}>
			<FormField
				name={FIELDS.PASSWORD}
				control={form.control}
				render={({field: {ref, value = '', ...restField}}) => (
					<FormItem>
						<FormFieldLabel>
							<Label>
								<FormattedMessage
									defaultMessage="Password:"
									id="hagaYK"
								/>
							</Label>
						</FormFieldLabel>
						<FormFieldControl>
							<TextField
								ref={refMountCallback(ref, deferInputFocus)}
								value={value}
								type="password"
								autoComplete="new-password"
								disabled={disabled}
								required
								{...restField}
							/>
						</FormFieldControl>
						<div>
							<FormFieldDescription>
								<FormFieldDescriptionText>
									<FormattedMessage
										defaultMessage="Password description"
										id="A4RrFD"
									/>
								</FormFieldDescriptionText>
							</FormFieldDescription>
							<FormFieldErrorMessage>
								<ErrorText />
							</FormFieldErrorMessage>
						</div>
					</FormItem>
				)}
			/>
			<FormField
				name={FIELDS.CONFIRM_PASSWORD}
				control={form.control}
				render={({field: {value = '', ...restField}}) => (
					<FormItem>
						<FormFieldLabel>
							<Label>
								<FormattedMessage
									defaultMessage="Confirm password:"
									id="atD3r4"
								/>
							</Label>
						</FormFieldLabel>
						<FormFieldControl>
							<TextField
								value={value}
								type="password"
								autoComplete="password"
								disabled={disabled}
								required
								{...restField}
							/>
						</FormFieldControl>
						<div>
							<FormFieldDescription>
								<FormFieldDescriptionText>
									<FormattedMessage
										defaultMessage="Confirm password description"
										id="vHV69y"
									/>
								</FormFieldDescriptionText>
							</FormFieldDescription>
							<FormFieldErrorMessage>
								<ErrorText />
							</FormFieldErrorMessage>
						</div>
					</FormItem>
				)}
			/>
			<SubmitButton disabled={disabled}>
				<FormattedMessage
					defaultMessage="Set password and log in"
					id="uZTXoH"
				/>
			</SubmitButton>
		</Form>
	);
}
