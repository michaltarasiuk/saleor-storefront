import type {CodegenConfig} from '@graphql-codegen/cli';

const codegenConfig: CodegenConfig = {
	schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
	documents: 'src/**/*.{ts,tsx}',
	generates: {
		'src/graphql/generated/': {
			preset: 'client-preset',
			presetConfig: {
				fragmentMasking: {unmaskFunctionName: 'getFragment'},
			},
			config: {
				useTypeImports: true,
				skipTypename: true,
				defaultScalarType: 'unknown',
				scalars: {
					JSONString: 'string',
				},
			},
		},
	},
	hooks: {
		afterOneFileWrite: ['prettier --w'],
	},
};

export default codegenConfig;
