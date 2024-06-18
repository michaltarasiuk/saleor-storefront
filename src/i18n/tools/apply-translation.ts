import type {TranslationTypes} from '@/graphql/generated/graphql';
import {isDefined} from '@/lib/tools/is-defined';
import type {GetAllValues} from '@/lib/types/utils';

export interface TranslatedQueryObject {
	readonly translation?: Partial<
		Record<string, GetAllValues<TranslationTypes>>
	> | null;
}

export function applyTranslation<Obj extends TranslatedQueryObject>({
	translation,
	...restProps
}: Obj) {
	if (!translation) {
		return restProps;
	}

	const updatedTranslation = Object.fromEntries(
		Object.entries(translation).filter(
			([key, value]) =>
				isDefined(value) &&
				key in restProps &&
				typeof value ===
					typeof restProps[key as keyof typeof restProps],
		),
	);
	return {
		...restProps,
		...updatedTranslation,
	};
}
