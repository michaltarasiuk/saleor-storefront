import {graphql} from '@/graphql/generated';
import {fetchMutationData} from '@/lib/tools/get-client';

const DeactivateAllTokensMutation = graphql(/* GraphQL */ `
	mutation DeactivateAllTokensMutation {
		tokensDeactivateAll {
			errors {
				field
				message
				code
			}
		}
	}
`);

export async function deactivateAllTokens(accessToken: string) {
	return await fetchMutationData(
		DeactivateAllTokensMutation,
		{},
		{
			fetchOptions: {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		},
	);
}
