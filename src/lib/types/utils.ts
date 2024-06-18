export type GetAllValues<Obj extends Record<PropertyKey, unknown>> =
	Obj extends unknown ? Obj[keyof Obj] : never;
