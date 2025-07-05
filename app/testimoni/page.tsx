import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingScrollToTop from "@/components/ui/FloatingScrollToTop";

export const metadata: Metadata = {
  title:
    "Testimoni Pelanggan Dolphin Laundry Kupang - Review & Ulasan Terpercaya",
  description:
    "💬 Baca testimoni dan review pelanggan setia Dolphin Laundry Kupang. Kepuasan pelanggan 98%+ dengan layanan express, dry cleaning & parfum premium!",
  keywords: [
    "testimoni dolphin laundry",
    "review laundry kupang",
    "ulasan pelanggan dolphin",
    "feedback laundry kupang",
    "kepuasan pelanggan laundry",
    "pengalaman laundry kupang",
    "cerita pelanggan dolphin",
    "rating laundry terbaik",
    "komentar positif laundry",
    "rekomendasi laundry kupang",
    "testimoni laundry express",
    "review dry cleaning kupang",
  ],
  openGraph: {
    title: "Testimoni Pelanggan Dolphin Laundry Kupang - Review Terpercaya",
    description:
      "💬 Baca testimoni dan review pelanggan setia. Kepuasan pelanggan 98%+ dengan layanan express & dry cleaning premium!",
    url: "https://www.dolphin-laundry-kupang.biz.id/testimoni",
    siteName: "Dolphin Laundry Kupang",
    images: [
      {
        url: "/og-testimonials.jpg",
        width: 1200,
        height: 630,
        alt: "Testimoni Pelanggan Dolphin Laundry Kupang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimoni Pelanggan Dolphin Laundry Kupang - Review Terpercaya",
    description:
      "💬 Baca testimoni dan review pelanggan setia. Kepuasan pelanggan 98%+ dengan layanan premium!",
    images: ["/og-testimonials.jpg"],
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/testimoni",
  },
};

export default function TestimoniPage() {
  return (
    <>
      <div className="pt-20">
        <Testimonials />
      </div>
      <FloatingScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
