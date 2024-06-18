import type {HTMLAttributes} from 'react';
import {useCallback, useState} from 'react';

type RegisterFocusStateMethods = Pick<
	HTMLAttributes<HTMLElement>,
	'onFocus' | 'onBlur'
>;

export function useFocusState() {
	const [isFocused, setIsFocused] = useState(false);

	const registerFocusState = useCallback(
		({
			onFocus,
			onBlur,
		}: Partial<RegisterFocusStateMethods>): RegisterFocusStateMethods => ({
			onFocus: (event) => {
				onFocus?.(event);
				setIsFocused(true);
			},
			onBlur: (event) => {
				onBlur?.(event);
				setIsFocused(false);
			},
		}),
		[],
	);

	return {
		isFocused,
		registerFocusState,
	};
}
