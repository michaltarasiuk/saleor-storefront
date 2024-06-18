// https://github.com/zloirock/core-js#url-and-urlsearchparams
interface URLSearchParams {
	delete(name: string, value?: string): void;
	has(name: string, value?: string): boolean;
}
