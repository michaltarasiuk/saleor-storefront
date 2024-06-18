export function uniq<Item>(arr: readonly Item[]) {
	return Array.from(new Set(arr));
}

export function uniqBy<Item>(
	arr: readonly Item[],
	fn: (item: Item) => unknown,
) {
	const newArr = [];
	const uniqueValues = new Set();

	for (const item of arr) {
		const key = fn(item);

		if (!uniqueValues.has(key)) {
			newArr.push(item);
			uniqueValues.add(key);
		}
	}
	return newArr;
}

if (import.meta.vitest) {
	const {describe, test, expect} = import.meta.vitest;

	describe('uniq', () => {
		function createArrOfNumbers() {
			return [1, 2, 2, 3, 4, 5, 5];
		}

		test('to be new array', () => {
			const arr = createArrOfNumbers();
			expect(uniq(arr)).not.toBe(arr);
		});

		test('to be an array with unique elements', () => {
			const arr = createArrOfNumbers();
			expect(uniq(arr)).toEqual([1, 2, 3, 4, 5]);
		});
	});

	describe('uniq by', () => {
		function createArrOfIndexRecords() {
			return [
				{
					index: 1,
				},
				{
					index: 2,
				},
				{
					index: 2,
				},
				{
					index: 3,
				},
			];
		}

		test('to be new array', () => {
			const arr = createArrOfIndexRecords();
			expect(uniqBy(arr, ({index}) => index)).not.toBe(arr);
		});

		test('to be an array with unique elements', () => {
			const arr = createArrOfIndexRecords();
			expect(uniqBy(arr, ({index}) => index)).toEqual([
				{
					index: 1,
				},
				{
					index: 2,
				},
				{
					index: 3,
				},
			]);
		});
	});
}
