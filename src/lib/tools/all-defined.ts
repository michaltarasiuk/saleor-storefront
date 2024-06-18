import {isDefined} from './is-defined';

export function allDefined<Value>(...values: readonly Value[]) {
	return values.every((value) => isDefined(value));
}

if (import.meta.vitest) {
	const {test, expect} = import.meta.vitest;

	test('to be false when one or more values are not defined', () => {
		expect(allDefined(1, undefined, 3)).toBeFalsy();
	});

	test('to be true when all values are defined', () => {
		expect(allDefined(1, 2, 3)).toBeTruthy();
	});
}
