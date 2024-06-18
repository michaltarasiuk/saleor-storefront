import type {QueryVariables} from './get-query-variables';

export function getQueryVariablesKey(keyVariables: QueryVariables) {
	return JSON.stringify(keyVariables);
}
