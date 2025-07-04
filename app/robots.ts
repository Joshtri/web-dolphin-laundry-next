import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/private/',
                    '/admin/',
                    '/api/',
                    '/_next/',
                    '/temp/',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/'],
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/'],
            },
        ],
        sitemap: 'https://www.dolphin-laundry-kupang.biz.id/sitemap.xml',
        host: 'https://www.dolphin-laundry-kupang.biz.id',
    }
}
