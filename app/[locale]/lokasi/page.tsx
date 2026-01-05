import type { Metadata } from "next";
import Location from "@/components/Location";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export const metadata: Metadata = {
  title: "Lokasi Dolphin Laundry Kupang - Alamat, Jam Buka & Petunjuk Arah",
  description:
    "📍 Lokasi Dolphin Laundry Kupang: Jl. Veteran, dekat Universitas Nusa Cendana. Buka 06:00-22:00 WIT. Layanan antar jemput area Kupang & sekitarnya tersedia.",
  keywords: [
    "lokasi dolphin laundry",
    "alamat laundry kupang",
    "jam buka dolphin laundry",
    "petunjuk arah laundry kupang",
    "laundry dekat undana",
    "laundry jalan veteran kupang",
    "peta lokasi laundry",
    "antar jemput kupang",
    "area layanan dolphin",
    "cabang laundry kupang",
    "laundry terdekat kupang",
    "kontak lokasi laundry",
  ],
  openGraph: {
    title: "Lokasi Dolphin Laundry Kupang - Alamat & Jam Buka",
    description:
      "📍 Jl. Veteran, dekat Universitas Nusa Cendana. Buka 06:00-22:00 WIT. Layanan antar jemput area Kupang tersedia.",
    url: "https://www.dolphin-laundry-kupang.biz.id/lokasi",
    siteName: "Dolphin Laundry Kupang",
    images: [
      {
        url: "/og-location.jpg",
        width: 1200,
        height: 630,
        alt: "Lokasi Dolphin Laundry Kupang - Alamat & Petunjuk Arah",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokasi Dolphin Laundry Kupang - Alamat & Jam Buka",
    description:
      "📍 Jl. Veteran, dekat Universitas Nusa Cendana. Buka 06:00-22:00 WIT. Layanan antar jemput tersedia.",
    images: ["/og-location.jpg"],
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/lokasi",
  },
  other: {
    "geo.region": "ID-NT",
    "geo.placename": "Kupang",
    "geo.position": "-10.1772;123.6070",
    ICBM: "-10.1772, 123.6070",
  },
};

export default function LokasiPage() {
  return (
    <>
      <Location />
      <FloatingScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
