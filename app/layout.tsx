import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../public/assets/css/bubble.css";
import "../public/assets/css/clock.css";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import { WhatsAppProvider } from "@/context/WhatsAppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dolphin Laundry Kupang - Laundry Express & Dry Cleaning Terbaik",
  description:
    "Layanan laundry express 3 jam, dry cleaning profesional di Kupang. Harga mulai 11rb/kg, gratis antar jemput. Hubungi 082144500030",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3B82F6",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dolphin Laundry",
  },
  alternates: {
    canonical: "https://www.dolphin-laundry-kupang.biz.id/",
  },
  openGraph: {
    title: "Dolphin Laundry Kupang - Laundry Express & Dry Cleaning Terbaik",
    description:
      "Layanan laundry express 3 jam, dry cleaning profesional di Kupang. Harga mulai 11rb/kg, gratis antar jemput.",
    url: "https://www.dolphin-laundry-kupang.biz.id/",
    siteName: "Dolphin Laundry Kupang",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WhatsAppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </WhatsAppProvider>
      </body>
    </html>
  );
}
