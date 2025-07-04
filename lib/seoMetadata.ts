import type { Metadata } from "next";

// Section-specific metadata untuk SEO yang lebih baik
export const sectionMetadata = {
    "daftar-harga": {
        title: "Daftar Harga Laundry Kupang 2024 - Mulai Rp 11.000/kg | Dolphin Laundry",
        description: "💰 Harga Laundry Termurah Kupang! Reguler Rp 11.000/kg, Express 3 jam Rp 45.000/kg, Dry Cleaning mulai Rp 35.000. Gratis antar jemput. Cek harga lengkap!",
        keywords: "harga laundry kupang, daftar harga laundry 2024, tarif laundry kupang, biaya dry cleaning kupang, harga cuci setrika kupang",
        canonical: "https://www.dolphin-laundry-kupang.biz.id/#daftar-harga"
    },

    "perfume-selection": {
        title: "34+ Pilihan Parfum Laundry Import Premium - Kenzo, Bulgary | Dolphin Laundry Kupang",
        description: "🌸 Parfum Laundry Import Terlengkap! Kenzo Batang, Bulgary, Jennifer Lopez, Lavender. Formula premium aman untuk semua kain. Pilih parfum favorit Anda!",
        keywords: "parfum laundry kupang, parfum import laundry, kenzo laundry kupang, bulgary laundry, parfum premium laundry",
        canonical: "https://www.dolphin-laundry-kupang.biz.id/#perfume-selection"
    },

    "layanan": {
        title: "Layanan Laundry Lengkap Kupang - Express, Dry Clean, Setrika | Dolphin Laundry",
        description: "🏆 Layanan Laundry Terlengkap! Express 3 jam, Dry Cleaning, Cuci Setrika, Laundry Sepatu, Boneka, Karpet. Teknologi modern, hasil sempurna. Gratis antar jemput!",
        keywords: "layanan laundry kupang, jasa laundry lengkap, dry cleaning kupang, laundry sepatu kupang, cuci boneka kupang",
        canonical: "https://www.dolphin-laundry-kupang.biz.id/#layanan"
    },

    "mengapa-memilih-kami": {
        title: "Mengapa Pilih Dolphin Laundry Kupang? Kualitas Terbaik & Harga Terjangkau",
        description: "⭐ Dipercaya 1000+ Pelanggan! Teknologi modern, parfum import, gratis antar jemput, harga terjangkau. Pengalaman 5+ tahun melayani Kupang. Kepuasan terjamin!",
        keywords: "laundry terbaik kupang, laundry terpercaya kupang, keunggulan dolphin laundry, review laundry kupang",
        canonical: "https://www.dolphin-laundry-kupang.biz.id/#mengapa-memilih-kami"
    },

    "testimoni": {
        title: "Testimoni Pelanggan Laundry Kupang - Review Dolphin Laundry",
        description: "⭐⭐⭐⭐⭐ Baca testimoni asli pelanggan Dolphin Laundry Kupang! Ribuan review positif, kepuasan 99%, layanan terbaik. Buktikan sendiri kualitas kami!",
        keywords: "review laundry kupang, testimoni dolphin laundry, rating laundry kupang, pengalaman pelanggan laundry",
        canonical: "https://www.dolphin-laundry-kupang.biz.id/#testimoni"
    },

    "lokasi": {
        title: "Lokasi & Alamat Dolphin Laundry Kupang - Maps & Kontak",
        description: "📍 Temukan Lokasi Dolphin Laundry Kupang! Alamat lengkap, Google Maps, jam operasional. Gratis antar jemput radius 25km. Kunjungi toko kami sekarang!",
        keywords: "alamat dolphin laundry kupang, lokasi laundry kupang, maps laundry kupang, alamat toko laundry",
        canonical: "https://www.dolphin-laundry-kupang.biz.id/#lokasi"
    },

    "hubungi-kami": {
        title: "Hubungi Dolphin Laundry Kupang - WhatsApp 082144500030 & 081529500130",
        description: "📞 Hubungi Kami Sekarang! WhatsApp: 082144500030 & 081529500130. Konsultasi gratis, order mudah, respons cepat. Layanan 24/7 untuk kemudahan Anda!",
        keywords: "kontak dolphin laundry kupang, whatsapp laundry kupang, nomor telepon laundry kupang, customer service laundry",
        canonical: "https://www.dolphin-laundry-kupang.biz.id/#hubungi-kami"
    }
};

// Generate metadata untuk section tertentu
export function generateSectionMetadata(section: keyof typeof sectionMetadata): Metadata {
    const sectionData = sectionMetadata[section];

    if (!sectionData) {
        return {};
    }

    return {
        title: sectionData.title,
        description: sectionData.description,
        keywords: sectionData.keywords.split(", "),
        alternates: {
            canonical: sectionData.canonical,
        },
        openGraph: {
            title: sectionData.title,
            description: sectionData.description,
            url: sectionData.canonical,
            type: "website",
            images: [
                {
                    url: `/og-${section}.jpg`,
                    width: 1200,
                    height: 630,
                    alt: sectionData.title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: sectionData.title,
            description: sectionData.description,
            images: [`/og-${section}.jpg`],
        },
    };
}

// Local Business Schema untuk halaman tertentu
export function generateLocalBusinessSchema(section: string) {
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Dolphin Laundry Kupang",
        "image": "https://www.dolphin-laundry-kupang.biz.id/og-home.jpg",
        "telephone": "+62-821-4450-0030",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Raya Kupang",
            "addressLocality": "Kupang",
            "addressRegion": "Nusa Tenggara Timur",
            "postalCode": "85000",
            "addressCountry": "ID"
        },
        "url": `https://www.dolphin-laundry-kupang.biz.id/#${section}`,
        "priceRange": "Rp 11.000 - Rp 45.000",
        "openingHours": [
            "Mo-Su 06:00-22:00"
        ]
    };

    // Tambahkan schema spesifik berdasarkan section
    switch (section) {
        case "daftar-harga":
            return {
                ...baseSchema,
                "@type": ["LocalBusiness", "ProfessionalService"],
                "makesOffer": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Laundry Reguler"
                        },
                        "price": "12000",
                        "priceCurrency": "IDR"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Express 3 Jam"
                        },
                        "price": "45000",
                        "priceCurrency": "IDR"
                    }
                ]
            };

        case "layanan":
            return {
                ...baseSchema,
                "@type": ["LocalBusiness", "ProfessionalService"],
                "serviceType": [
                    "Laundry Service",
                    "Dry Cleaning",
                    "Ironing Service",
                    "Shoe Cleaning"
                ]
            };

        case "lokasi":
            return {
                ...baseSchema,
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -10.1772,
                    "longitude": 123.6070
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Kupang"
                }
            };

        default:
            return baseSchema;
    }
}
