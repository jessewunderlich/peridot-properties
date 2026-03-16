import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: {
    default: "Peridot Properties | Handpicked Lakeside Stays in Minnesota",
    template: "%s | Peridot Properties",
  },
  description:
    "Boutique vacation rentals managed personally by Charlotte Wunderlich. Handpicked lakeside stays in Minnesota's lake country — book direct and save.",
  keywords: [
    "Minnesota lake vacation rental",
    "Pickerel Lake rental",
    "lake house Minnesota",
    "Otter Tail County cabin",
    "walleye fishing Minnesota",
    "book direct vacation rental",
    "Minnesota lake country",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peridotproperties.com",
    siteName: "Peridot Properties",
    title: "Peridot Properties | Handpicked Lakeside Stays in Minnesota",
    description:
      "Boutique vacation rentals managed personally by Charlotte Wunderlich. Book direct and save on your Minnesota lake getaway.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
