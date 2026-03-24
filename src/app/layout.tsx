import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBookButton from "@/components/StickyBookButton";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peridot.properties"),
  title: {
    default: "Peridot Properties | Handpicked Lakeside Stays in Minnesota",
    template: "%s | Peridot Properties",
  },
  description:
    "Lakeside vacation rentals run by Charlotte Wunderlich and her family. Book direct and save.",
  keywords: [
    "Minnesota lake vacation rental",
    "lakefront cabin rental",
    "lake house Minnesota",
    "Otter Tail County cabin",
    "walleye fishing Minnesota",
    "book direct vacation rental",
    "Minnesota lake country",
    "Richville MN cabin",
    "Detroit Lakes area rental",
    "Perham MN lake house",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.peridot.properties",
    siteName: "Peridot Properties",
    title: "Peridot Properties | Handpicked Lakeside Stays in Minnesota",
    description:
      "Lakeside vacation rentals run by Charlotte Wunderlich and her family. Book direct and save.",
    images: [
      {
        url: "https://www.peridot.properties/images/pickerel-lake/hero-sunset.jpg",
        width: 1600,
        height: 900,
        alt: "Sunset over Pickerel Lake in Otter Tail County, Minnesota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peridot Properties | Handpicked Lakeside Stays in Minnesota",
    description:
      "Lakeside vacation rentals run by Charlotte Wunderlich and her family. Book direct and save.",
    images: ["https://www.peridot.properties/images/pickerel-lake/hero-sunset.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Charlotte Wunderlich" }],
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Richville, Minnesota",
    "geo.position": "46.4985;-95.1012",
    ICBM: "46.4985, -95.1012",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#FAF8F5" />
        <meta name="msapplication-TileColor" content="#FAF8F5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://app.ownerrez.com" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold"
          style={{ backgroundColor: "#4F6F16", color: "#FAF8F5" }}
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyBookButton />
        <Script
          src="https://app.ownerrez.com/widget.js"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
