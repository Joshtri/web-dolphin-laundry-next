import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../public/assets/css/bubble.css";
import "../public/assets/css/clock.css";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import { WhatsAppProvider } from "@/context/WhatsAppContext";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Dolphin Laundry Kupang - Laundry Express & Dry Cleaning Terbaik di Kupang",
    template: "%s | Dolphin Laundry Kupang",
  },
  description:
    "🏆 Dolphin Laundry Kupang - Yang membedakan kami: GRATIS parfum premium yang bebas dipilih sendiri oleh pelanggan + baju dicuci terpisah tidak dicampur! Layanan laundry express 3 jam, dry cleaning profesional. Harga mulai Rp 11.000/kg, gratis antar jemput area Kupang. ☎️ 082144500030 - 081529500130",
  keywords: [
    // Primary Keywords
    "laundry kupang",
    "dry cleaning kupang",
    "laundry express kupang",
    "dolphin laundry kupang",

    // Service Keywords
    "laundry 24 jam kupang",
    "laundry murah kupang",
    "laundry antar jemput kupang",
    "cuci kering kupang",
    "setrika kupang",

    // Location Keywords
    "laundry di kupang",
    "tempat laundry kupang",
    "jasa laundry kupang",
    "laundry terdekat kupang",
    "laundry ntt",

    // Product Keywords
    "parfum laundry kupang",
    "kenzo laundry",
    "laundry sepatu kupang",
    "cuci boneka kupang",
    "laundry karpet kupang",

    // Long-tail Keywords
    "laundry express 3 jam kupang",
    "harga laundry kupang 2024",
    "laundry terpercaya kupang",
    "laundry berkualitas kupang",
  ],
  authors: [{ name: "Dolphin Laundry Kupang" }],
  creator: "Dolphin Laundry Kupang",
  publisher: "Dolphin Laundry Kupang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.dolphin-laundry-kupang.biz.id"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#3B82F6",
  colorScheme: "light",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dolphin Laundry",
    "application-name": "Dolphin Laundry Kupang",
    "msapplication-TileColor": "#3B82F6",
    "msapplication-config": "/browserconfig.xml",
  },
  verification: {
    google: "your-google-verification-code-here", // Ganti dengan kode verifikasi Google Search Console
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
    // other: {
    //   me: ["your-verification-code"],
    // },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.dolphin-laundry-kupang.biz.id/",
    siteName: "Dolphin Laundry Kupang",
    title:
      "Dolphin Laundry Kupang - Laundry Express & Dry Cleaning Terbaik di Kupang",
    description:
      "🏆 Yang membedakan kami: GRATIS parfum premium yang bebas dipilih sendiri oleh pelanggan + baju dicuci terpisah tidak dicampur! Layanan laundry express 3 jam, dry cleaning profesional. Harga mulai Rp 11.000/kg, gratis antar jemput area Kupang. Hubungi kami sekarang!",
    images: [
      {
        url: "/og-image.jpg", // Buat gambar ini nanti
        width: 1200,
        height: 630,
        alt: "Dolphin Laundry Kupang - Layanan Laundry Terbaik",
      },
      {
        url: "/og-image-square.jpg", // Untuk format square
        width: 1080,
        height: 1080,
        alt: "Dolphin Laundry Kupang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolphin Laundry Kupang - Laundry Express & Dry Cleaning Terbaik",
    description:
      "🏆 Yang membedakan kami: GRATIS parfum premium yang bebas dipilih sendiri oleh pelanggan + baju dicuci terpisah tidak dicampur! Layanan laundry express 3 jam, dry cleaning profesional. Harga mulai Rp 11.000/kg, gratis antar jemput area Kupang.",
    images: ["/og-image.jpg"],
    creator: "@dolphinlaundry", // Ganti dengan handle Twitter jika ada
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dolphin Laundry",
    startupImage: ["/apple-touch-icon.png"],
  },
  applicationName: "Dolphin Laundry Kupang",
  referrer: "origin-when-cross-origin",
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WhatsAppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </WhatsAppProvider>
      </body>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
    </html>
  );
}
