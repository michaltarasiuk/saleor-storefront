import {
	createContext as createContext_,
	useContext as useContext_,
} from 'react';
import invariant from 'tiny-invariant';

export function createContext<ContextValue>(globalName: string) {
	const defaultValue = Symbol(globalName);

	const context = createContext_<ContextValue | typeof defaultValue>(
		defaultValue,
	);
	const useContext = () => {
		const contextValue = useContext_(context);

		invariant(
			contextValue !== defaultValue,
			`Used default value of ${defaultValue.description} context`,
		);
		return contextValue;
	};
	return [context, useContext] as const;
}
