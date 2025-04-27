export type ShorthandProperty<T> = readonly [T, T] | readonly [T, T, T, T];

export type MaybeShorthandProperty<T> = T | ShorthandProperty<T>;
