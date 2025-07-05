import type { Metadata } from "next";
import WhyChooseUs from "@/components/WhyChooseUs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export const metadata: Metadata = {
  title:
    "Mengapa Memilih Dolphin Laundry Kupang - Keunggulan & Kelebihan Terbaik",
  description:
    "⭐ Mengapa pilih Dolphin Laundry? Terpercaya 15+ tahun, Express 3 jam, 34+ parfum import, gratis antar jemput, mesin modern, harga terjangkau di Kupang!",
  keywords: [
    "mengapa pilih dolphin laundry",
    "keunggulan dolphin laundry",
    "kelebihan laundry kupang",
    "laundry terpercaya kupang",
    "laundry berkualitas kupang",
    "alasan pilih dolphin laundry",
    "laundry profesional kupang",
    "mesin laundry modern",
    "parfum import laundry",
    "layanan terbaik kupang",
    "pengalaman 15 tahun laundry",
    "jaminan kualitas laundry",
  ],
  openGraph: {
    title: "Mengapa Memilih Dolphin Laundry Kupang - Keunggulan Terbaik",
    description:
      "⭐ Terpercaya 15+ tahun, Express 3 jam, 34+ parfum import, gratis antar jemput, mesin modern, harga terjangkau!",
    url: "https://www.dolphin-laundry-kupang.biz.id/mengapa-memilih-kami",
    siteName: "Dolphin Laundry Kupang",
    images: [
      {
        url: "/og-why-choose.jpg",
        width: 1200,
        height: 630,
        alt: "Keunggulan Dolphin Laundry Kupang - Mengapa Memilih Kami",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mengapa Memilih Dolphin Laundry Kupang - Keunggulan Terbaik",
    description:
      "⭐ Terpercaya 15+ tahun, Express 3 jam, 34+ parfum import, gratis antar jemput, mesin modern!",
    images: ["/og-why-choose.jpg"],
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/mengapa-memilih-kami",
  },
};

export default function MengapaMemilihKamiPage() {
  return (
    <>
      <div className="pt-20">
        <WhyChooseUs />
      </div>
      <FloatingScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
