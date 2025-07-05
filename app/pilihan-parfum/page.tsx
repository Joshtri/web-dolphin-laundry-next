import type { Metadata } from "next";
import PerfumeSelection from "@/components/Parfume";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export const metadata: Metadata = {
  title:
    "Pilihan Parfum Premium Dolphin Laundry Kupang - 34+ Aroma Import Berkualitas",
  description:
    "🌺 34+ pilihan parfum import premium untuk laundry: Fresh, Floral, Woody, Citrus, Oriental. Aroma tahan lama berkualitas tinggi. Konsultasi gratis!",
  keywords: [
    "parfum laundry premium kupang",
    "pilihan parfum import",
    "aroma laundry berkualitas",
    "parfum fresh laundry",
    "parfum floral laundry",
    "parfum woody laundry",
    "parfum citrus laundry",
    "parfum oriental laundry",
    "parfum tahan lama",
    "konsultasi parfum laundry",
    "34 pilihan parfum",
    "parfum laundry kupang",
    "aroma laundry premium",
    "fragrance laundry import",
  ],
  openGraph: {
    title: "Pilihan Parfum Premium Dolphin Laundry Kupang - 34+ Aroma Import",
    description:
      "🌺 34+ pilihan parfum import premium: Fresh, Floral, Woody, Citrus, Oriental. Aroma tahan lama berkualitas tinggi!",
    url: "https://www.dolphin-laundry-kupang.biz.id/pilihan-parfum",
    siteName: "Dolphin Laundry Kupang",
    images: [
      {
        url: "/og-perfume.jpg",
        width: 1200,
        height: 630,
        alt: "Pilihan Parfum Premium Dolphin Laundry Kupang - 34+ Aroma Import",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilihan Parfum Premium Dolphin Laundry Kupang - 34+ Aroma Import",
    description:
      "🌺 34+ pilihan parfum import premium: Fresh, Floral, Woody, Citrus, Oriental. Aroma tahan lama!",
    images: ["/og-perfume.jpg"],
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/pilihan-parfum",
  },
};

export default function PilihanParfumPage() {
  return (
    <>
      <div className="pt-20">
        <PerfumeSelection />
      </div>
      <FloatingScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
