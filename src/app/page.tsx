import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  DollarSign,
  Shield,
  MessageCircle,
} from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Peridot Properties | Handpicked Lakeside Stays in Minnesota",
  description:
    "Boutique vacation rentals managed personally by Charlotte Wunderlich. Book direct and save on your Minnesota lake getaway.",
  openGraph: {
    title: "Peridot Properties | Handpicked Lakeside Stays in Minnesota",
    description:
      "Handpicked lakeside stays in Minnesota's lake country. Book direct with Charlotte and save 10–15% on every reservation.",
    url: "https://peridot.properties",
  },
};

const whyBookDirectHighlights = [
  {
    icon: DollarSign,
    title: "Save 10–15%",
    description:
      "Skip the Airbnb and VRBO service fees. Book direct and that money stays with you — guaranteed.",
  },
  {
    icon: Shield,
    title: "Flexible Cancellation",
    description:
      "Direct guests receive more generous cancellation terms. We understand plans change — especially with Minnesota weather.",
  },
  {
    icon: MessageCircle,
    title: "Personal Service",
    description:
      "You're talking to Charlotte, not a call center. She knows every property, every lake, and every local secret worth knowing.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1a3a0a 0%, #2D5016 30%, #4A7C8C 70%, #2a5a70 100%)",
        }}
        aria-label="Hero section"
      >
        {/* decorative circles */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #C8A951 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #6B8E23 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#C8A951" }}
          >
            Minnesota&apos;s Lake Country
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
          >
            Handpicked lakeside stays<br />
            <span style={{ color: "#C8A951" }}>in Minnesota</span>
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "#FAF8F5CC" }}
          >
            Boutique vacation rentals managed personally by Charlotte Wunderlich.
            No call centers, no surprises &mdash; just unforgettable lake escapes and someone who genuinely cares about your stay.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/properties"
              className="px-8 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: "#C8A951", color: "#2D5016" }}
            >
              Browse Properties
            </Link>
            <Link
              href="/book-direct"
              className="px-8 py-4 rounded-full text-sm font-semibold border transition-all hover:bg-white/10"
              style={{ borderColor: "#FAF8F560", color: "#FAF8F5" }}
            >
              Why Book Direct?
            </Link>
          </div>
        </div>

        {/* scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50"
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: "#FAF8F5" }}>Scroll</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #FAF8F5, transparent)" }} />
        </div>
      </section>

      {/* ── Featured Properties ── */}
      <section className="py-20 px-4" aria-label="Featured properties">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
              Our Properties
            </p>
            <h2
              className="text-4xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Where will you escape to?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard
                key={property.slug}
                name={property.name}
                location={`${property.location.city}, ${property.location.state} · ${property.location.county}`}
                description={property.description[0]}
                bedrooms={property.specs.bedrooms}
                bathrooms={property.specs.bathrooms}
                sleeps={property.specs.sleeps}
                lakeFrontage={property.specs.frontage}
                imageUrl={property.heroImage}
                href={`/properties/${property.slug}`}
                priceRange={property.priceRange}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/properties"
              className="inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:opacity-70"
              style={{ color: "#6B8E23" }}
            >
              View all properties &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Book Direct ── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#2D501608" }} aria-label="Why book direct">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
              Skip the Middleman
            </p>
            <h2
              className="text-4xl font-semibold mb-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              3 reasons to book direct
            </h2>
            <p className="text-sm" style={{ color: "#2C2C2C80" }}>
              Booking platforms take 12–20% in fees. That money can stay with you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {whyBookDirectHighlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2318" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#6B8E2318" }}
                >
                  <item.icon size={18} style={{ color: "#6B8E23" }} aria-hidden="true" />
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C80" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/book-direct"
              className="inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:opacity-70"
              style={{ color: "#6B8E23" }}
            >
              See the full comparison &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-4" aria-label="Guest reviews">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#C8A951" style={{ color: "#C8A951" }} aria-hidden="true" />
              ))}
            </div>
            <h2
              className="text-4xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Guests love it here
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties[0].testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About Peridot Properties ── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#2D501608" }} aria-label="About Peridot Properties">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
            About Us
          </p>
          <h2
            className="text-4xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            Properties built with love,<br />managed with care
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#2C2C2C" }}>
            Peridot Properties is a small, family-run vacation rental company on the shores of Minnesota&apos;s finest lakes.
            Our name comes from peridot &mdash; a yellow-green gemstone sometimes called the &ldquo;gem of the sun,&rdquo;
            and the color of a Minnesota lake in early summer light. We think it fits perfectly.
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#2C2C2C" }}>
            Charlotte Wunderlich handles every booking personally, ensuring your stay is smooth
            from the first message to the last wave goodbye. When you book direct, you&apos;re working
            with the owner &mdash; not a call center.
          </p>
          <Link
            href="/about"
            className="inline-block px-7 py-3 rounded-full text-sm font-semibold border transition-all hover:opacity-80"
            style={{ borderColor: "#6B8E23", color: "#6B8E23" }}
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="Ready to plan your lake trip?"
        subheading="Summer weekends fill fast. Lock in your dates now and save by booking direct with Charlotte."
        buttonLabel="Browse Properties"
        buttonHref="/properties"
        secondaryLabel="Why Book Direct?"
        secondaryHref="/book-direct"
      />
    </>
  );
}
