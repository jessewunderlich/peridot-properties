import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
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
  metadataBase: new URL("https://peridot.properties"),
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
    url: "https://peridot.properties",
    siteName: "Peridot Properties",
    title: "Peridot Properties | Handpicked Lakeside Stays in Minnesota",
    description:
      "Lakeside vacation rentals run by Charlotte Wunderlich and her family. Book direct and save.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Lakefront cabin on a Minnesota lake at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peridot Properties | Handpicked Lakeside Stays in Minnesota",
    description:
      "Lakeside vacation rentals run by Charlotte Wunderlich and her family. Book direct and save.",
    images: ["https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=630&fit=crop"],
  },
  alternates: {
    canonical: "https://peridot.properties",
  },
  authors: [{ name: "Charlotte Wunderlich" }],
  other: {
    "geo.region": "US-MN",
    "geo.placename": "Richville, Minnesota",
    "geo.position": "46.5;-95.1",
    ICBM: "46.5, -95.1",
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBookButton />
        <Analytics />
      </body>
    </html>
  );
}
