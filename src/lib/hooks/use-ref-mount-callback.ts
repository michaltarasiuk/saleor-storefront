import type {RefCallback} from 'react';
import {useCallback, useRef} from 'react';
import {mergeRefs} from 'react-merge-refs';

type MergedRefCallbacks = ReturnType<typeof mergeRefs>;

// eslint-disable-next-line functional/prefer-readonly-type
type Refs<Element extends HTMLElement> = Array<
	React.MutableRefObject<Element> | React.LegacyRef<Element>
>;

export const useRefMountCallback = <Element extends HTMLElement>() => {
	const mergedRefCallbacks = useRef<MergedRefCallbacks | null>(null);

	const refCallback: RefCallback<Element> = useCallback(
		(element) => mergedRefCallbacks.current?.(element),
		[],
	);

	return useCallback(
		(...refs: Refs<Element>) => {
			mergedRefCallbacks.current ??= mergeRefs(refs);

			return refCallback;
		},
		[refCallback],
	);
};
