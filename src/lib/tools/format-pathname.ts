export function formatPathname(...segments: readonly string[]) {
	return `/${segments.join('/')}`;
}
