import { MetadataRoute } from 'next'
import { getSiteUrl } from "@/lib/domain"

export default async function robots(): Promise<MetadataRoute.Robots> {
    const host = getSiteUrl();
    const sitemap = new URL('/sitemap.xml', host).href;

    return {
        rules: {
            userAgent: '*',
            disallow: '/',
        },
        sitemap,
        host: host.href
    }
}