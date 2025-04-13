export function joinPathname(...pathname: readonly string[]) {
  return pathname.join('/');
}

export function splitPathname(pathname: string): readonly string[] {
  const pathnameRe = /[^/]+/g;
  return pathname.match(pathnameRe) ?? [];
}
