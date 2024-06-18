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
import type {SignupFormSchema} from '../_hooks/use-signup-form-schema';
import {useSignupFormSchema} from '../_hooks/use-signup-form-schema';
import {useSignupSubmit} from '../_hooks/use-signup-submit';

export function SignupForm() {
	const signupFormSchema = useSignupFormSchema();
	const form = useForm<SignupFormSchema>({
		resolver: zodResolver(signupFormSchema),
	});
	const {signupSubmit, pending} = useSignupSubmit(form);

	const refMountCallback = useRefMountCallback<ElementRef<'input'>>();

	const disabled = form.formState.isSubmitting || pending;

	return (
		<Form form={form} onSubmit={form.handleSubmit(signupSubmit)}>
			<FormField
				name={FIELDS.EMAIL}
				control={form.control}
				render={({field: {ref, value = '', ...restField}}) => (
					<FormItem>
						<FormFieldLabel>
							<Label>
								<FormattedMessage
									defaultMessage="Email:"
									id="xpTPb3"
								/>
							</Label>
						</FormFieldLabel>
						<FormFieldControl>
							<TextField
								ref={refMountCallback(ref, deferInputFocus)}
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
										defaultMessage="Email description"
										id="RVxG/0"
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
			<SubmitButton disabled={disabled}>
				<FormattedMessage
					defaultMessage="Sign up with email"
					id="pmu7Ih"
				/>
			</SubmitButton>
		</Form>
	);
}
