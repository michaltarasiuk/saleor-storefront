import 'client-only';

export function deferInputFocus(input: HTMLInputElement | null) {
	if (input) {
		// Defer to the next event loop round
		setTimeout(() => {
			input.focus();
		}, 0);
	}
}
