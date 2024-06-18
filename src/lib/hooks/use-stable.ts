import {useState} from 'react';

export function useStable<InitialState>(initialState: InitialState) {
	return useState(initialState)[0];
}
