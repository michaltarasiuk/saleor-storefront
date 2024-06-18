import type {SetNonNullable, SetRequired, UnknownRecord} from 'type-fest';

import {isDefined} from './is-defined';

export function isKeyDefined<Obj extends UnknownRecord, Key extends keyof Obj>(
	obj: Obj,
	key: Key,
): obj is Obj & SetNonNullable<SetRequired<Obj, Key>, Key> {
	return Object.hasOwn(obj, key) && isDefined(obj[key]);
}

if (import.meta.vitest) {
	/* eslint-disable @typescript-eslint/ban-ts-comment */
	const {test, expect} = import.meta.vitest;

	test("to be false when object has't own key", () => {
		// @ts-expect-error
		expect(isKeyDefined({}, 'foo')).toBeFalsy();
	});

	test('to be false when value of key is undefined', () => {
		expect(isKeyDefined({foo: undefined}, 'foo')).toBeFalsy();
	});

	test('to be false when value of key is null', () => {
		expect(isKeyDefined({foo: null}, 'foo')).toBeFalsy();
	});

	test('to be true when value of key is defined', () => {
		expect(isKeyDefined({foo: 'bar'}, 'foo')).toBeTruthy();
	});
}
