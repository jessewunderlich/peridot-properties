import type { Metadata } from "next";
import Script from "next/script";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about staying at Lakeside Luxe in Minnesota lake country. Check-in times, cancellation policy, what's included, local area info, and more.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Peridot Properties",
    description:
      "Everything you need to know before your stay at Lakeside Luxe in Minnesota lake country.",
    url: "https://peridot.properties/faq",
    images: [{ url: "https://peridot.properties/images/pickerel-lake/hero-sunset.jpg", width: 1600, height: 900, alt: "Sunset over Pickerel Lake" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Peridot Properties",
    description: "Everything you need to know before your stay at Lakeside Luxe.",
    images: ["https://peridot.properties/images/pickerel-lake/hero-sunset.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the check-in and check-out times?", acceptedAnswer: { "@type": "Answer", text: "Check-in is at 4:00 PM. Check-out is at 10:00 AM. If you need a different arrangement, reach out to Charlotte ahead of time and she'll do her best to accommodate." } },
    { "@type": "Question", name: "What is the cancellation policy?", acceptedAnswer: { "@type": "Answer", text: "Cancel at least 48 hours before check-in for a full refund. Cancel between 24 and 48 hours before check-in for a 50% refund. After check-in time, the reservation is non-refundable. Direct guests always receive the most flexible terms available." } },
    { "@type": "Question", name: "How do I book?", acceptedAnswer: { "@type": "Answer", text: "Use the booking calendar on the property page to select your dates and book directly. If your desired dates aren't available or you have questions, use the Send Inquiry button or email charlotte@peridot.properties." } },
    { "@type": "Question", name: "Is there a minimum stay?", acceptedAnswer: { "@type": "Answer", text: "Summer (June-August): 4-night minimum. Off season (September-May): 2-night minimum." } },
    { "@type": "Question", name: "Are animals allowed?", acceptedAnswer: { "@type": "Answer", text: "No animals are permitted on the property. We maintain an allergen-free environment to accommodate all guests, including those with sensitivities and allergies." } },
    { "@type": "Question", name: "How many guests can Lakeside Luxe accommodate?", acceptedAnswer: { "@type": "Answer", text: "The property has 5 bedrooms and 4 bathrooms across three floors with beds for 10. Maximum 12 people on the property at any time." } },
    { "@type": "Question", name: "Is there WiFi?", acceptedAnswer: { "@type": "Answer", text: "Yes, high-speed WiFi is available throughout the property." } },
    { "@type": "Question", name: "What's included?", acceptedAnswer: { "@type": "Answer", text: "Full kitchen, two washer/dryer units, linens, towels (including embroidered Lakeside Luxe beach towels), life jackets for kids, three kayaks, two inflatable paddle boards, a paddle boat, a fire pit with firewood, board games, and a 70-inch smart TV with streaming." } },
    { "@type": "Question", name: "Where is the nearest grocery store?", acceptedAnswer: { "@type": "Answer", text: "The Market at Perham is about 15 minutes away. Open 7am–9pm daily. It's a full grocery store with produce, bakery, and a meat department." } },
    { "@type": "Question", name: "Where can I buy a fishing license?", acceptedAnswer: { "@type": "Answer", text: "Online at the MN DNR website (valid immediately) or in person at Gene's Sport Shop in Perham. Non-resident options start at $14 for 24 hours." } },
    { "@type": "Question", name: "What's the nearest hospital?", acceptedAnswer: { "@type": "Answer", text: "Perham Health is about 15 minutes away. Address: 665 3rd St SW, Perham, MN 56573." } },
    { "@type": "Question", name: "Can I rent a boat?", acceptedAnswer: { "@type": "Answer", text: "Yes! MN Tru North in Perham offers pontoon, jetski, and kayak rentals." } },
  ],
};

export default function FAQPage() {
  return (
    <>
      {/* FAQ JSON-LD for Google rich snippets */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Page Header ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #2F6271 100%)" }}
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C8A951" }}
        >
          Got Questions?
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
        >
          Frequently Asked Questions
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "#FAF8F5CC" }}>
          Everything you need to know before you pack the car and head to the lake.
          Don&apos;t see your question? Just email Charlotte.
        </p>
      </section>

      {/* ── FAQ Sections ── */}
      <section className="py-16 px-4 max-w-3xl mx-auto" aria-label="Frequently asked questions">
        <FAQAccordion />
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="Still have questions?"
        subheading="Charlotte is happy to help. Check availability now or browse the property details first."
        buttonLabel="Check Availability"
        buttonHref="/properties/pickerel-lake-retreat#booking"
        secondaryLabel="Browse Properties"
        secondaryHref="/properties"
      />
    </>
  );
}
