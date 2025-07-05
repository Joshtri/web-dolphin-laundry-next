import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.dolphin-laundry-kupang.biz.id'
    const currentDate = new Date()

    const pages = [
        // Homepage
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        // Dedicated pages
        {
            url: `${baseUrl}/daftar-harga`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/layanan`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pilihan-parfum`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/mengapa-memilih-kami`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/testimoni`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/lokasi`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/kontak-kami`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        // Homepage sections (for anchor links)
        {
            url: `${baseUrl}#beranda`,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}#daftar-harga`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}#perfume-selection`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}#layanan`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}#mengapa-memilih-kami`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}#testimoni`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}#lokasi`,
            lastModified: currentDate,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}#hubungi-kami`,
            lastModified: currentDate,
            changeFrequency: 'yearly' as const,
            priority: 0.6,
        },
    ]

    return pages
}
