import type { Metadata } from "next";
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

export default function FAQPage() {
  return (
    <>
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
