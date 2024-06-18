'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {FormField} from '@/lib/components/form/form-field/FormField';
import {FormFieldControl} from '@/lib/components/form/FormFieldControl';
import {FormFieldDescription} from '@/lib/components/form/FormFieldDescription';
import {FormFieldErrorMessage} from '@/lib/components/form/FormFieldErrorMessage';
import {FormFieldLabel} from '@/lib/components/form/FormFieldLabel';
import {Button} from '@/lib/components/ui/Button';
import {ErrorText} from '@/lib/components/ui/ErrorText';
import {Label} from '@/lib/components/ui/Label';
import {TextField} from '@/lib/components/ui/TextField';

import {Form} from '../Form';
import {FormFieldDescriptionText, FormItem} from '../Form';
import {FIELDS} from './fields';
import type {ChangePasswordSchema} from './hooks/use-change-password-schema';
import {useChangePasswordSchema} from './hooks/use-change-password-schema';
import {useChangePasswordSubmit} from './hooks/use-change-password-submit/use-change-password-submit';

export function ChangePassowrdForm() {
	const changePasswordSchema = useChangePasswordSchema();
	const form = useForm<ChangePasswordSchema>({
		resolver: zodResolver(changePasswordSchema),
	});
	const changePasswordSubmit = useChangePasswordSubmit(form);

	const disabled = form.formState.isSubmitting;

	return (
		<Form form={form} onSubmit={form.handleSubmit(changePasswordSubmit)}>
			<FormField
				name={FIELDS.OLD_PASSWORD}
				control={form.control}
				render={({field: {value = '', ...restField}}) => (
					<FormItem>
						<FormFieldLabel>
							<Label>
								<FormattedMessage
									defaultMessage="Old password:"
									id="U41zpQ"
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
										defaultMessage="Old password description"
										id="g8IrT6"
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
				name={FIELDS.NEW_PASSWORD}
				control={form.control}
				render={({field: {value = '', ...restField}}) => (
					<FormItem>
						<FormFieldLabel>
							<Label>
								<FormattedMessage
									defaultMessage="New password:"
									id="gCsYTJ"
								/>
							</Label>
						</FormFieldLabel>
						<FormFieldControl>
							<TextField
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
										defaultMessage="New password description"
										id="F4lKlM"
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
			<Button disabled={disabled}>
				<FormattedMessage
					defaultMessage="change password"
					id="4Vr2Sg"
				/>
			</Button>
		</Form>
	);
}
