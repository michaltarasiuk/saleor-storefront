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
import type {RequestEmailChangeSchema} from './hooks/use-request-email-change-schema';
import {useRequestEmailChangeSchema} from './hooks/use-request-email-change-schema';
import {useRequestEmailChangeSubmit} from './hooks/use-request-email-change-submit/use-request-email-change-submit';

export function RequestEmailChangeForm() {
	const requestEmailChangeSchema = useRequestEmailChangeSchema();
	const form = useForm<RequestEmailChangeSchema>({
		resolver: zodResolver(requestEmailChangeSchema),
	});
	const requestEmailChangeSubmit = useRequestEmailChangeSubmit(form);

	const disabled = form.formState.isSubmitting;

	return (
		<Form
			form={form}
			onSubmit={form.handleSubmit(requestEmailChangeSubmit)}>
			<FormField
				name={FIELDS.NEW_EMAIL}
				control={form.control}
				render={({field: {value = '', ...restField}}) => (
					<FormItem>
						<FormFieldLabel>
							<Label>
								<FormattedMessage
									defaultMessage="New email:"
									id="a4aUvK"
								/>
							</Label>
						</FormFieldLabel>
						<FormFieldControl>
							<TextField
								value={value}
								type="email"
								placeholder="name@example.com"
								autoComplete="email"
								disabled={disabled}
								required
								{...restField}
							/>
						</FormFieldControl>
						<div>
							<FormFieldDescription>
								<FormFieldDescriptionText>
									<FormattedMessage
										defaultMessage="New email description"
										id="3P1axg"
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
				name={FIELDS.PASSWORD}
				control={form.control}
				render={({field: {value = '', ...restField}}) => (
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
			<Button disabled={disabled}>
				<FormattedMessage
					defaultMessage="request email change"
					id="lBENL4"
				/>
			</Button>
		</Form>
	);
}
