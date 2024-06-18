import {useChannel} from '../context/channel-context';
import {useLocale} from '../context/locale-context';

export function useBasePath() {
	return [useChannel(), useLocale()] as const;
}
