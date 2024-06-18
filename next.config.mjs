// @ts-check

function getGraphQLEndpointUrl() {
	const graphQLEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
	if (!graphQLEndpoint) throw Error('graphQL endpoint is not defined');

	return new URL(graphQLEndpoint);
}

const graphQLEndpointUrl = getGraphQLEndpointUrl();

/** @type {import('next').NextConfig} */
const config = {
	distDir: 'dist',
	reactStrictMode: true,
	experimental: {
		serverActions: true,
	},
	webpack(config) {
		config.resolve.alias['@formatjs/icu-messageformat-parser'] =
			'@formatjs/icu-messageformat-parser/no-parser';

		return config;
	},
	images: {
		remotePatterns: [
			{
				hostname: graphQLEndpointUrl.hostname,
				protocol: (() => {
					const protocol = graphQLEndpointUrl.protocol.slice(0, -1); // Remove trailing colon;
					if (protocol === 'http' || protocol === 'https')
						return protocol;
				})(),
			},
		],
	},
};

export default config;
