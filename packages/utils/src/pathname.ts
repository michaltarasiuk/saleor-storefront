export function joinPathname(...pathname: readonly string[]) {
  return pathname.join('/');
}

export function splitPathname(pathname: string) {
  const [, ...segments] = pathname.split('/');
  return segments;
}
