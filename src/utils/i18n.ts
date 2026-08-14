export type Locale = 'ja' | 'en';

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const japanesePath = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return locale === 'en' ? `/en${japanesePath === '/' ? '/' : japanesePath}` : japanesePath;
}
