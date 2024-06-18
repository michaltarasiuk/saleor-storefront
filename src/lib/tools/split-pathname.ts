export function splitPathname(pathname: string) {
	return pathname.replace(/^\/|\/$/g, '').split('/');
}
