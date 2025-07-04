import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import PriceList from "@/components/PriceList";
import ContactUs from "@/components/ContactUs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PerfumeSelection from "@/components/Parfume";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export const metadata: Metadata = {
  title:
    "Dolphin Laundry Kupang - Laundry Express 3 Jam & Dry Cleaning Terbaik di NTT",
  description:
    "🏆 TERPERCAYA! Laundry Express 3 jam, Dry Cleaning Premium, 34+ Pilihan Parfum Import. Harga mulai Rp 11.000/kg. Gratis Antar Jemput Kupang. ☎️ 082144500030 - 081529500130",
  keywords: [
    // Homepage specific keywords
    "dolphin laundry kupang",
    "laundry express 3 jam kupang",
    "dry cleaning terbaik kupang",
    "laundry antar jemput gratis kupang",
    "parfum laundry import kupang",

    // Service keywords
    "laundry 24 jam kupang",
    "cuci kering kilat kupang",
    "setrika profesional kupang",
    "laundry sepatu kupang",
    "cuci boneka kupang",
    "laundry karpet kupang",

    // Brand & location
    "dolphin laundry ntt",
    "laundry murah berkualitas kupang",
    "jasa laundry terpercaya kupang",
    "laundry terdekat kupang",

    // Long-tail SEO
    "harga laundry kupang 2024",
    "promo laundry kupang",
    "laundry express termurah kupang",
    "dry cleaning jas kemeja kupang",
  ],
  openGraph: {
    title:
      "Dolphin Laundry Kupang - Laundry Express 3 Jam & Dry Cleaning Terbaik",
    description:
      "🏆 TERPERCAYA! Laundry Express 3 jam, Dry Cleaning Premium, 34+ Pilihan Parfum Import. Harga mulai Rp 11.000/kg. Gratis Antar Jemput!",
    url: "https://www.dolphin-laundry-kupang.biz.id/",
    siteName: "Dolphin Laundry Kupang",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Dolphin Laundry Kupang - Layanan Laundry Express & Dry Cleaning Terbaik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dolphin Laundry Kupang - Laundry Express 3 Jam & Dry Cleaning Terbaik",
    description:
      "🏆 TERPERCAYA! Laundry Express 3 jam, Dry Cleaning Premium, 34+ Pilihan Parfum Import. Harga mulai Rp 11.000/kg.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/",
  },
  other: {
    "geo.region": "ID-NT",
    "geo.placename": "Kupang",
    "geo.position": "-10.1772;123.6070",
    ICBM: "-10.1772, 123.6070",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PriceList />
      <PerfumeSelection />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Location />
      {/* <ContactUs /> */}
      <FloatingScrollToTop />

      <FloatingWhatsApp />
    </>
  );
}
