import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.dolphin-laundry-kupang.biz.id'

    const pages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}#services`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}#pricelist`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}#why-choose-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}#testimonials`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}#location`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}#contact-us`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.6,
        },
    ]

    return pages
}
