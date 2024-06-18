// https://stackoverflow.com/questions/8495687/split-array-into-chunks#comment84212474_8495740
export function arrayChunks<Type>(
	array: readonly Type[],
	chunkSize: number,
): readonly (readonly Type[])[] {
	return Array(Math.ceil(array.length / chunkSize))
		.fill(undefined)
		.map((_, idx) => idx * chunkSize)
		.map((begin) => array.slice(begin, begin + chunkSize));
}
