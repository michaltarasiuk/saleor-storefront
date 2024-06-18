import {isArray} from './is-array';

export function toArray<Type>(value: Type | readonly Type[]): readonly Type[] {
	return isArray(value) ? value : [value];
}

if (import.meta.vitest) {
	const {test, expect} = import.meta.vitest;

	test('to be the same array when value is type of array', () => {
		const arr = [1, 2, 3];
		expect(toArray(arr)).toEqual(arr);
	});

	test('to be an array with one element when value is not type of array', () => {
		expect(toArray(null)).toEqual([null]);
	});
}
