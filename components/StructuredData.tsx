import Script from "next/script";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.dolphin-laundry-kupang.biz.id/#organization",
        name: "Dolphin Laundry Kupang",
        url: "https://www.dolphin-laundry-kupang.biz.id/",
        sameAs: [
          "https://www.instagram.com/dolphinlaundry_kupang",
          "https://www.facebook.com/dolphinlaundrykupang",
        ],
        logo: {
          "@type": "ImageObject",
          url: "https://www.dolphin-laundry-kupang.biz.id/assets/images/dl-logo.png",
          width: 300,
          height: 200,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+62-821-4450-0030",
            contactType: "customer service",
            areaServed: "ID",
            availableLanguage: "Indonesian",
          },
          {
            "@type": "ContactPoint",
            telephone: "+62-815-2950-0130",
            contactType: "customer service",
            areaServed: "ID",
            availableLanguage: "Indonesian",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Raya Kupang",
          addressLocality: "Kupang",
          addressRegion: "Nusa Tenggara Timur",
          postalCode: "85000",
          addressCountry: "ID",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.dolphin-laundry-kupang.biz.id/#localbusiness",
        name: "Dolphin Laundry Kupang",
        image: ["https://www.dolphin-laundry-kupang.biz.id/og-image.jpg"],
        url: "https://www.dolphin-laundry-kupang.biz.id/",
        telephone: "+62-821-4450-0030",
        priceRange: "Rp 11.000 - Rp 45.000",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Raya Kupang",
          addressLocality: "Kupang",
          addressRegion: "Nusa Tenggara Timur",
          postalCode: "85000",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -10.1772,
          longitude: 123.607,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "06:00",
            closes: "22:00",
          },
        ],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: -10.1772,
            longitude: 123.607,
          },
          geoRadius: "25000",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.dolphin-laundry-kupang.biz.id/#service",
        serviceType: "Laundry Service",
        provider: {
          "@id": "https://www.dolphin-laundry-kupang.biz.id/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Kupang",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Laundry",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Laundry Reguler",
              },
              price: "12000",
              priceCurrency: "IDR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "12000",
                priceCurrency: "IDR",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "1",
                  unitCode: "KGM",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Express 3 Jam",
              },
              price: "45000",
              priceCurrency: "IDR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "45000",
                priceCurrency: "IDR",
                referenceQuantity: {
                  "@type": "QuantitativeValue",
                  value: "1",
                  unitCode: "KGM",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dry Cleaning",
              },
              price: "35000",
              priceCurrency: "IDR",
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.dolphin-laundry-kupang.biz.id/#website",
        url: "https://www.dolphin-laundry-kupang.biz.id/",
        name: "Dolphin Laundry Kupang",
        description:
          "Yang membedakan kami dari laundry lain: GRATIS parfum premium yang bebas dipilih sendiri oleh pelanggan dan baju dicuci terpisah tidak dicampur. Layanan laundry express dan dry cleaning terbaik di Kupang dengan harga terjangkau dan kualitas premium",
        publisher: {
          "@id": "https://www.dolphin-laundry-kupang.biz.id/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://www.dolphin-laundry-kupang.biz.id/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.dolphin-laundry-kupang.biz.id/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://www.dolphin-laundry-kupang.biz.id/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Layanan",
            item: "https://www.dolphin-laundry-kupang.biz.id/#layanan",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Daftar Harga",
            item: "https://www.dolphin-laundry-kupang.biz.id/#daftar-harga",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Kontak",
            item: "https://www.dolphin-laundry-kupang.biz.id/#hubungi-kami",
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
