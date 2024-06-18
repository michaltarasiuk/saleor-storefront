import {getChannel} from './get-channel';
import {getLocale} from './get-locale';

export function getBasePath() {
	return [getChannel(), getLocale()] as const;
}
