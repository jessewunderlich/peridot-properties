import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Message Sent | Peridot Properties",
  description: "Thanks for reaching out! Charlotte will get back to you within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div
        className="max-w-lg w-full rounded-2xl p-10 text-center"
        style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2320", boxShadow: "0 4px 24px rgba(45,80,22,0.10)" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: "#6B8E2318" }}
        >
          <CheckCircle size={32} style={{ color: "#6B8E23" }} aria-hidden="true" />
        </div>

        <h1
          className="text-3xl sm:text-4xl font-semibold mb-3"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
        >
          Message Received!
        </h1>

        <p className="text-sm leading-relaxed mb-2" style={{ color: "#2C2C2C" }}>
          Thanks for reaching out! Charlotte will get back to you within 24 hours.
        </p>

        <p className="text-sm leading-relaxed mb-8" style={{ color: "#2C2C2C80" }}>
          We can&apos;t wait to share Minnesota&apos;s lakes with you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/properties/pickerel-lake-retreat"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
          >
            Explore Lakeside Luxe <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href="/local-guide"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all hover:opacity-80"
            style={{ borderColor: "#6B8E23", color: "#6B8E23" }}
          >
            Browse the Area Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
