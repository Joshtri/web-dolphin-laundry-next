import type { Metadata } from "next";
import Services from "@/components/Services";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export const metadata: Metadata = {
  title:
    "Layanan Laundry Dolphin Kupang - Express 3 Jam, Dry Cleaning & Parfum Premium",
  description:
    "🚀 Layanan lengkap Dolphin Laundry: Express 3 jam, Dry Cleaning, Cuci Sepatu, Boneka, Karpet. 34+ pilihan parfum import. Antar jemput gratis Kupang!",
  keywords: [
    "layanan laundry kupang",
    "laundry express 3 jam",
    "dry cleaning kupang",
    "cuci sepatu kupang",
    "cuci boneka kupang",
    "cuci karpet kupang",
    "parfum laundry import",
    "laundry antar jemput",
    "setrika profesional",
    "laundry kilat kupang",
    "jasa laundry lengkap",
    "layanan cuci kering",
  ],
  openGraph: {
    title: "Layanan Laundry Dolphin Kupang - Express 3 Jam & Dry Cleaning",
    description:
      "🚀 Layanan lengkap: Express 3 jam, Dry Cleaning, Cuci Sepatu, Boneka, Karpet. 34+ pilihan parfum import. Antar jemput gratis!",
    url: "https://www.dolphin-laundry-kupang.biz.id/layanan",
    siteName: "Dolphin Laundry Kupang",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Layanan Laundry Dolphin Kupang - Express & Dry Cleaning",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan Laundry Dolphin Kupang - Express 3 Jam & Dry Cleaning",
    description:
      "🚀 Layanan lengkap: Express 3 jam, Dry Cleaning, Cuci Sepatu, Boneka, Karpet. 34+ pilihan parfum import.",
    images: ["/og-services.jpg"],
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/layanan",
  },
};

export default function LayananPage() {
  return (
    <>
      <div className="pt-36 mb-10">
        <Services />
      </div>
      <FloatingScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
