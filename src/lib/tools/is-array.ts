export function isArray(value: unknown): value is readonly unknown[] {
	// See: https://github.com/microsoft/TypeScript/issues/17002
	return Array.isArray(value);
}
