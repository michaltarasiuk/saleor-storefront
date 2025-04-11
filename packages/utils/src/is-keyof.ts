export function isKeyOf<T extends Record<PropertyKey, unknown>>(
  obj: T,
  key: PropertyKey
): key is keyof T {
  return key in obj;
}
