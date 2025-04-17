export function raise(...params: ConstructorParameters<typeof Error>): never {
  throw new Error(...params);
}
