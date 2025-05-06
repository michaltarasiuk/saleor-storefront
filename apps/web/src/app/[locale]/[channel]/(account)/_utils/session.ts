import {cookies} from 'next/headers';

export async function getAuthorization() {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return;
  }
  return ['Authorization', `Bearer ${accessToken}`] as const;
}

const CookieNames = {
  accessToken: 'accessToken',
};

async function getAccessToken() {
  const accessToken = (await cookies()).get(CookieNames.accessToken);
  return accessToken?.value;
}
