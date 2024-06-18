export function random<Value>(array: ReadonlyArray<Value>) {
	return array[Math.floor(Math.random() * array.length)];
}
