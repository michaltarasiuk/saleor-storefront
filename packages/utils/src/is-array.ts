/**
 * @see {@link https://github.com/microsoft/TypeScript/issues/17002}
 */
export function isArray(value: unknown): value is ReadonlyArray<unknown> {
  return Array.isArray(value);
}
