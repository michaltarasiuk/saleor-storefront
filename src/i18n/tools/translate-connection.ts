import type {TranslatedQueryObject} from './apply-translation';
import {applyTranslation} from './apply-translation';

interface TranslatedConnection {
	readonly edges: readonly {
		readonly node: TranslatedQueryObject & {
			readonly children?: TranslatedConnection | null;
		};
	}[];
}

export function translateConnection<Connection extends TranslatedConnection>(
	connection: Connection,
): Connection {
	return {
		...connection,
		edges: connection.edges.map(({node, ...restProps}) => {
			const {children, ...restNodeProps} = applyTranslation(node);

			return {
				node: {
					children: children
						? translateConnection(children)
						: children,
					...restNodeProps,
				},
				...restProps,
			};
		}),
	};
}
