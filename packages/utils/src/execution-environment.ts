export const isBrowserEnvironment = typeof window !== 'undefined';
export const isNodeEnvironment = !isBrowserEnvironment;
