import type { Metadata } from "next";
import Script from "next/script";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | Peridot Properties",
  description:
    "Common questions about Lakeside Luxe on Pickerel Lake, MN. Check-in times, cancellation policy, what's included, local area info, and more.",
  openGraph: {
    title: "FAQ | Peridot Properties",
    description:
      "Everything you need to know before your stay at Lakeside Luxe on Pickerel Lake, MN.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the check-in and check-out times?", acceptedAnswer: { "@type": "Answer", text: "Check-in is at 4:00 PM. Check-out is at 10:00 AM. If you need a different arrangement, reach out to Charlotte ahead of time and she'll do her best to accommodate." } },
    { "@type": "Question", name: "What is the cancellation policy?", acceptedAnswer: { "@type": "Answer", text: "Cancel for any reason at least 2 days before check-in for a full refund. Cancel within 1–2 days of check-in for a 50% refund. After check-in time, the reservation is non-refundable." } },
    { "@type": "Question", name: "How do I book?", acceptedAnswer: { "@type": "Answer", text: "Send Charlotte an inquiry through the contact form or email charlotte@peridot.properties directly. She'll respond within 24 hours." } },
    { "@type": "Question", name: "Is there a minimum stay?", acceptedAnswer: { "@type": "Answer", text: "3-night minimum on summer weekends (June–August). 2-night minimum most other weekends. Weekday stays are flexible — just ask." } },
    { "@type": "Question", name: "Are pets allowed?", acceptedAnswer: { "@type": "Answer", text: "No, we do not allow pets at Lakeside Luxe. We appreciate your understanding." } },
    { "@type": "Question", name: "How many guests can Lakeside Luxe accommodate?", acceptedAnswer: { "@type": "Answer", text: "The property has 5 bedrooms and 4 bathrooms across three floors, sleeping up to 12 guests." } },
    { "@type": "Question", name: "Is there WiFi?", acceptedAnswer: { "@type": "Answer", text: "Yes, high-speed WiFi is available throughout the property." } },
    { "@type": "Question", name: "What's included?", acceptedAnswer: { "@type": "Answer", text: "Full kitchen, washer/dryer, linens, towels (including beach towels), life jackets, two kayaks, a canoe, fishing rods, a fire pit with firewood, board games, and streaming TV. Everything you need to just show up and enjoy." } },
    { "@type": "Question", name: "Where is the nearest grocery store?", acceptedAnswer: { "@type": "Answer", text: "The Market at Perham is about 10 miles away. Open 7am–9pm daily. It's a full grocery store with produce, bakery, and a meat department." } },
    { "@type": "Question", name: "Where can I buy a fishing license?", acceptedAnswer: { "@type": "Answer", text: "Online at the MN DNR website (valid immediately) or in person at Gene's Sport Shop in Perham. Non-resident options start at $14 for 24 hours." } },
    { "@type": "Question", name: "What's the nearest hospital?", acceptedAnswer: { "@type": "Answer", text: "Perham Health is about 10 miles away. Address: 665 3rd St SW, Perham, MN 56573." } },
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
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)" }}
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
        subheading="Charlotte is happy to help. Send her an email and she'll get back to you within 24 hours."
        buttonLabel="Contact Charlotte"
        buttonHref="/book-direct#contact"
        secondaryLabel="Browse Properties"
        secondaryHref="/properties"
      />
    </>
  );
}
