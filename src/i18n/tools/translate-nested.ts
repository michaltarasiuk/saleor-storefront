import type {TranslatedQueryObject} from './apply-translation';
import {applyTranslation} from './apply-translation';

interface NestedTranslations extends TranslatedQueryObject {
	readonly children?: readonly NestedTranslations[] | null;
}

export function translateNested<Obj extends NestedTranslations>(
	nestedTranslations: Obj,
): Obj {
	const {children, ...restProps} = applyTranslation(nestedTranslations);

	return {
		...nestedTranslations,
		...restProps,
		children: children?.map(translateNested),
	};
}
