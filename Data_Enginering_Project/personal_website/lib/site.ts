/**
 * Use for <a href> and raw URLs. Next.js `Link` and `next/image` apply basePath automatically;
 * plain `/foo` paths do not on GitHub Pages.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
