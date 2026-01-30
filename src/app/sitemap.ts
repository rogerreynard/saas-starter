import type { MetadataRoute } from "next"
import { RouteResolver } from "@remkoj/optimizely-graph-client"
import { getSiteUrl } from "@/lib/domain"

export default async function sitemap() : Promise<MetadataRoute.Sitemap>
{
    const host = getSiteUrl();

    try {
        const resolver = new RouteResolver()
        const routes = await resolver.getRoutes();
        return routes.map(r => ({
            url: new URL(r.url.pathname, host).href,
            lastModified: r.changed ?? new Date(),
            changeFrequency: "daily",
            priority: 1
        }))
    } catch (error) {
        console.error('Failed to generate sitemap:', error);
        return [];
    }
}

export const revalidate = 21600 // Revalidate at a minimum every 6 hours