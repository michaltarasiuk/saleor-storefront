export function capitalize(value: string) {
	const [firstLetter, ...restLetters] = value;

	if (!firstLetter) {
		return value;
	}
	return `${firstLetter.toUpperCase()}${restLetters.join('').toLowerCase()}`;
}
