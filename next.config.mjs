/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // Optimizely CMS
            {
                protocol: 'https',
                hostname: '*.cms.optimizely.com',
                pathname: '/**'
            },
            // Optimizely Content Recommendations
            {
                protocol: 'https',
                hostname: '*.idio.co',
                pathname: '/**'
            },
            // Optimizely DAM
            {
                protocol: 'https',
                hostname: '*.cmp.optimizely.com',
                pathname: '/**'
            }
        ]
    },
    experimental: {
        serverActions: {
          allowedOrigins: [
            // Optimizely CMP Preview
            '*.webproofing.cmp.optimizely.com',
            // Optimizely Web Experimentation & Personalization Editor
            'www.optimizelyedit.com'
          ],
        }
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    // Allow Optimizely CMS to frame this site for on-page editing
                    {
                        key: 'Content-Security-Policy',
                        value: "frame-ancestors 'self' https://*.cms.optimizely.com https://*.cmp.optimizely.com"
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
