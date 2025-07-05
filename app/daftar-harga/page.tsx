import type { Metadata } from "next";
import PriceList from "@/components/PriceList";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export const metadata: Metadata = {
  title:
    "Daftar Harga Laundry Dolphin Kupang - Tarif Lengkap Express & Dry Cleaning",
  description:
    "💰 Daftar harga lengkap Dolphin Laundry Kupang: Express 3 jam Rp 45.000/kg, Reguler Rp 12.000/kg, Dry Cleaning mulai Rp 15.000/kg. Gratis antar jemput!",
  keywords: [
    "harga laundry kupang",
    "tarif laundry dolphin kupang",
    "biaya laundry express kupang",
    "harga dry cleaning kupang",
    "daftar harga laundry terbaru",
    "promo laundry kupang 2024",
    "laundry murah kupang",
    "harga cuci kering kupang",
    "tarif laundry antar jemput",
    "biaya laundry kilat kupang",
  ],
  openGraph: {
    title: "Daftar Harga Laundry Dolphin Kupang - Tarif Lengkap Terbaru",
    description:
      "💰 Daftar harga lengkap: Express 3 jam Rp 45.000/kg, Reguler Rp 12.000/kg, Dry Cleaning mulai Rp 15.000/kg. Gratis antar jemput!",
    url: "https://www.dolphin-laundry-kupang.biz.id/daftar-harga",
    siteName: "Dolphin Laundry Kupang",
    images: [
      {
        url: "/og-price.jpg",
        width: 1200,
        height: 630,
        alt: "Daftar Harga Laundry Dolphin Kupang Terbaru",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daftar Harga Laundry Dolphin Kupang - Tarif Lengkap Terbaru",
    description:
      "💰 Daftar harga lengkap: Express 3 jam Rp 45.000/kg, Reguler Rp 12.000/kg, Dry Cleaning mulai Rp 15.000/kg.",
    images: ["/og-price.jpg"],
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/daftar-harga",
  },
};

export default function DaftarHargaPage() {
  return (
    <>
      <div className="pt-20">
        <PriceList />
      </div>
      <FloatingScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
