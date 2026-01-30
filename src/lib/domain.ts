/**
 * Get the domain configuration for the current deployment.
 * Reads from environment variables with fallbacks for different hosting platforms.
 */
export function getDomainConfig() {
  const domain =
    process.env.NEXT_PUBLIC_SITE_DOMAIN ??
    process.env.SITE_DOMAIN ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    'localhost';

  const isLocal = domain.startsWith('localhost') || domain.endsWith('.local');
  const scheme = isLocal ? 'http' : 'https';
  const url = new URL(`${scheme}://${domain}`);

  return { domain, scheme, url, isLocal };
}

/**
 * Get the site URL as a URL object.
 */
export function getSiteUrl(): URL {
  return getDomainConfig().url;
}
