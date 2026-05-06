import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import ClientProviders from "@/components/ClientProviders";
import StructuredData from "@/components/StructuredData";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Dolphin Laundry & Dry Cleaning Kupang",
    template: "%s | Dolphin Laundry & Dry Cleaning Kupang",
  },
  description:
    "Dolphin Laundry & Dry Cleaning Kupang: Jasa Laundry Kiloan & Dry Clean Terbaik di Kupang. Layanan Express 3 Jam, Antar Jemput, 1 Mesin 1 Pelanggan, Gratis Parfum Premium. Bersih, Wangi, Higienis. Hubungi We: 0821-4450-0030.",
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
    "laundry oebobo kupang",
    "laundry kayu putih kupang",

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
    title: "Dolphin Laundry & Dry Cleaning Kupang",
    description:
      "Jasa Laundry Kiloan & Dry Clean Terbaik di Kupang. Layanan Express 3 Jam, Antar Jemput, 1 Mesin 1 Pelanggan. Bersih, Wangi, Higienis.",
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
    title: "Dolphin Laundry & Dry Cleaning Kupang",
    description:
      "Jasa Laundry Kiloan & Dry Clean Terbaik di Kupang. Layanan Express 3 Jam, Antar Jemput, 1 Mesin 1 Pelanggan. Bersih, Wangi, Higienis.",
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <StructuredData />
        <meta
          name="google-site-verification"
          content="GNDumlDsOxx_XUY_ygIj8Fe_C8og90cgue30DUztPrM"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>
            <Header />
            <main>{children}</main>
            <Footer />
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
    </html>
  );
}
