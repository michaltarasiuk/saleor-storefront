import {gql} from 'graphql-request';

import {env} from '@/env';
import {client} from '@/graphql/client';
import type {
  ChannelsQuery,
  ChannelsQueryVariables,
} from '@/graphql/codegen/graphql';
import {linguiConfigHelpers} from '@/i18n/utils';

export interface Params {
  readonly locale: string;
  readonly channel: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const {channels} = await client
    .setHeader('Authorization', `Bearer ${env.APP_TOKEN}`)
    .request<
      ChannelsQuery,
      ChannelsQueryVariables
    >(ChannelsQueryDocumentString);

  const params: Params[] = [];
  for (const channel of channels ?? []) {
    if (!channel.isActive) {
      continue;
    }
    for (const locale of linguiConfigHelpers.supportedLocales) {
      params.push({locale, channel: channel.slug});
    }
  }
  return params;
}

const ChannelsQueryDocumentString = gql`
  query Channels {
    channels {
      slug
      isActive
    }
  }
`;
