export function isDefined<Value>(value: Value): value is NonNullable<Value> {
	return value !== null && value !== undefined;
}

if (import.meta.vitest) {
	const {test, expect} = import.meta.vitest;

	test.each([undefined, null])("to be false when value is '%s'", (value) => {
		expect(isDefined(value)).toBeFalsy();
	});

	test.each([true, 3_000, 'Hello World', {}, new Map(), new Set()])(
		"to be true when value is '%s'",
		(value) => {
			expect(isDefined(value)).toBeTruthy();
		},
	);
}
