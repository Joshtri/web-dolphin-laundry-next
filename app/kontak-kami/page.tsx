import type { Metadata } from "next";
import ContactUs from "@/components/ContactUs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export const metadata: Metadata = {
  title: "Kontak Dolphin Laundry Kupang - WhatsApp, Telepon & Customer Service",
  description:
    "📞 Hubungi Dolphin Laundry Kupang: WhatsApp 082144500030 / 081529500130. Customer service 24/7. Gratis konsultasi & booking antar jemput!",
  keywords: [
    "kontak dolphin laundry",
    "nomor telepon laundry kupang",
    "whatsapp dolphin laundry",
    "customer service laundry",
    "booking laundry kupang",
    "konsultasi laundry gratis",
    "hubungi dolphin laundry",
    "chat whatsapp laundry",
    "layanan pelanggan 24 jam",
    "kontak antar jemput",
    "reservasi laundry online",
    "cs dolphin laundry",
  ],
  openGraph: {
    title: "Kontak Dolphin Laundry Kupang - WhatsApp & Customer Service",
    description:
      "📞 WhatsApp 082144500030 / 081529500130. Customer service 24/7. Gratis konsultasi & booking antar jemput!",
    url: "https://www.dolphin-laundry-kupang.biz.id/kontak-kami",
    siteName: "Dolphin Laundry Kupang",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Kontak Dolphin Laundry Kupang - WhatsApp & Customer Service",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak Dolphin Laundry Kupang - WhatsApp & Customer Service",
    description:
      "📞 WhatsApp 082144500030 / 081529500130. Customer service 24/7. Gratis konsultasi!",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/kontak-kami",
  },
};

export default function KontakKamiPage() {
  return (
    <>
      <div className="pt-20">
        <ContactUs />
      </div>
      <FloatingScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
