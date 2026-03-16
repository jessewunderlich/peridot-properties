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
    default: "Peridot Properties | Pickerel Lake Vacation Rental",
    template: "%s | Peridot Properties",
  },
  description:
    "Book your lakeside escape on beautiful Pickerel Lake in Richville, MN. New-build 4-bedroom vacation home with 150ft of lake frontage, perfect for fishing, water sports, and year-round getaways.",
  keywords: [
    "Pickerel Lake rental",
    "Minnesota lake house",
    "Richville MN vacation",
    "Perham cabin rental",
    "walleye fishing Minnesota",
    "lake vacation rental",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peridotproperties.com",
    siteName: "Peridot Properties",
    title: "Peridot Properties | Pickerel Lake Vacation Rental",
    description:
      "Your lakeside escape on beautiful Pickerel Lake in Richville, MN. New-build 4-bedroom home with 150ft of lake frontage.",
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
