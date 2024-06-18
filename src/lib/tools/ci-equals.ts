// See: https://stackoverflow.com/a/2140723
export function ciEquals(a: string, b: string) {
	return a.localeCompare(b, undefined, {sensitivity: 'accent'}) === 0;
}
