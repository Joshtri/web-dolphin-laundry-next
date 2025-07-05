import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export const metadata: Metadata = {
  title: "FAQ Dolphin Laundry Kupang - Pertanyaan yang Sering Diajukan",
  description:
    "❓ FAQ lengkap Dolphin Laundry: Jam operasional, harga, waktu proses, antar jemput gratis, parfum, keamanan pakaian. Temukan jawaban di sini!",
  keywords: [
    "faq dolphin laundry",
    "pertanyaan laundry kupang",
    "tanya jawab laundry",
    "info laundry lengkap",
    "jam operasional laundry",
    "proses laundry berapa lama",
    "antar jemput gratis area",
    "parfum laundry tersedia",
    "keamanan pakaian laundry",
    "booking laundry online",
    "cara hitung harga laundry",
    "layanan khusus laundry",
  ],
  openGraph: {
    title: "FAQ Dolphin Laundry Kupang - Pertanyaan yang Sering Diajukan",
    description:
      "❓ FAQ lengkap: Jam operasional, harga, waktu proses, antar jemput gratis, parfum, keamanan pakaian. Temukan jawaban!",
    url: "https://www.dolphin-laundry-kupang.biz.id/faq",
    siteName: "Dolphin Laundry Kupang",
    images: [
      {
        url: "/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ Dolphin Laundry Kupang - Pertanyaan yang Sering Diajukan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Dolphin Laundry Kupang - Pertanyaan yang Sering Diajukan",
    description:
      "❓ FAQ lengkap: Jam operasional, harga, waktu proses, antar jemput gratis, parfum, keamanan pakaian.",
    images: ["/og-faq.jpg"],
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <div className="pt-20">
        <FAQ />
      </div>
      <FloatingScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
