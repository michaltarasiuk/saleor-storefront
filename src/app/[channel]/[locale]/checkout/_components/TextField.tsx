import type {ElementRef} from 'react';
import {forwardRef, type InputHTMLAttributes} from 'react';
import {usePrevious} from 'usehooks';

import {useFocusState} from '@/lib/hooks/use-focus-state';
import {cn} from '@/lib/tools/cn';

type Props = InputHTMLAttributes<HTMLInputElement>;

const initialValue = '';

export const TextField = forwardRef<ElementRef<'input'>, Props>(
	function TextField(
		{
			placeholder,
			id,
			onFocus,
			onBlur,
			value = initialValue,
			'aria-invalid': ariaInvalid,
			...restProps
		},
		ref,
	) {
		const {isFocused, registerFocusState} = useFocusState();
		const previousValue = usePrevious(value);

		const valueHasChanged = isFocused
			? value !== initialValue || previousValue !== initialValue
			: value !== initialValue;

		return (
			<div
				className={cn(
					'relative rounded-md border border-faded-black bg-black transition-all focus-within:border-blue focus-within:shadow-[0_0_0_1px] focus-within:shadow-blue',
					ariaInvalid === true &&
						'border-destructive shadow-[0_0_0_1px] shadow-destructive focus-within:border-destructive focus-within:shadow-destructive',
				)}>
				<label
					htmlFor={id}
					className={cn(
						'pointer-events-none absolute inset-x-2.5 top-2.5 w-max cursor-text text-xs text-grey-foreground opacity-0 transition-all',
						valueHasChanged && 'top-[.4rem] opacity-100',
					)}>
					{placeholder}
				</label>
				<input
					ref={ref}
					value={value}
					placeholder={valueHasChanged ? undefined : placeholder}
					className={cn(
						'w-full bg-transparent px-2.5 py-3.5 text-sm text-white outline-none placeholder:text-grey-foreground disabled:cursor-not-allowed',
						valueHasChanged &&
							'pb-[.4rem] pt-[1.35rem] transition-all',
					)}
					id={id}
					{...restProps}
					{...registerFocusState({onFocus, onBlur})}
				/>
			</div>
		);
	},
);
