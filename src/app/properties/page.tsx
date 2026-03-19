import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Bed, Bath, Waves } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Our Properties",
  description:
    "Browse handpicked lakeside vacation rentals in Minnesota's lake country — hosted by Charlotte Wunderlich and her family. Book direct and save.",
  alternates: { canonical: "/properties" },
  openGraph: {
    title: "Our Properties | Peridot Properties",
    description:
      "Handpicked lakeside stays in Minnesota. New-build homes with private lake frontage, hosted by Charlotte Wunderlich and her family.",
    url: "https://www.peridot.properties/properties",
    images: [{ url: "https://www.peridot.properties/images/pickerel-lake/hero-sunset.jpg", width: 1600, height: 900, alt: "Sunset over Pickerel Lake" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Properties | Peridot Properties",
    description: "Handpicked lakeside stays in Minnesota. Book direct and save.",
    images: ["https://www.peridot.properties/images/pickerel-lake/hero-sunset.jpg"],
  },
};

export default function PropertiesPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)" }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8A951" }}>
          Minnesota&apos;s Lake Country
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
        >
          Our Properties
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "#FAF8F5CC" }}>
          Each property is personally selected, impeccably maintained, and hosted directly by Charlotte.
          No platform fees, no call centers &mdash; just great lake experiences.
        </p>
      </section>

      {/* ── Featured Property ── */}
      <section className="py-14 px-4 max-w-5xl mx-auto" aria-label="Available properties">
        {properties.map((property) => (
          <article
            key={property.slug}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #6B8E2320", boxShadow: "0 4px 24px rgba(45,80,22,0.10)" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative h-72 md:h-auto md:min-h-[420px]">
                <Image
                  src={property.heroImage}
                  alt={`${property.name} — ${property.location.city}, ${property.location.state}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Details */}
              <div className="p-8 sm:p-10 flex flex-col justify-center gap-4" style={{ backgroundColor: "#FAF8F5" }}>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#4A7C8C" }}>
                    Featured Property
                  </p>
                  <h2
                    className="text-3xl sm:text-4xl font-semibold mb-2"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                  >
                    {property.name}
                  </h2>
                  <p className="flex items-center gap-1 text-sm" style={{ color: "#4A7C8C" }}>
                    <MapPin size={14} aria-hidden="true" />
                    {property.location.city}, {property.location.state} &middot; {property.location.county}
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
                  {property.description[0]}
                </p>
                <div className="flex flex-wrap gap-4 py-3 border-t border-b text-xs" style={{ borderColor: "#6B8E2315" }}>
                  <span className="flex items-center gap-1" style={{ color: "#2C2C2C80" }}>
                    <Bed size={13} aria-hidden="true" /> {property.specs.bedrooms} bedrooms
                  </span>
                  <span className="flex items-center gap-1" style={{ color: "#2C2C2C80" }}>
                    <Bath size={13} aria-hidden="true" /> {property.specs.bathrooms} bathrooms
                  </span>
                  <span className="flex items-center gap-1" style={{ color: "#2C2C2C80" }}>
                    <Users size={13} aria-hidden="true" /> Beds for {property.specs.sleeps} · max {property.specs.maxOccupancy ?? property.specs.sleeps}
                  </span>
                  <span className="flex items-center gap-1" style={{ color: "#2C2C2C80" }}>
                    <Waves size={13} aria-hidden="true" /> {property.specs.frontage} frontage
                  </span>
                </div>
                <p className="text-sm font-semibold" style={{ color: "#6B8E23" }}>
                  {property.priceRange}
                </p>
                {property.comingSoon && (
                  <p
                    className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full w-fit"
                    style={{ backgroundColor: "#C8A95120", color: "#C8A951" }}
                  >
                    Coming Soon
                  </p>
                )}
                <Link
                  href={`/properties/${property.slug}`}
                  className="text-center py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
                >
                  {property.comingSoon ? "Preview Property" : "View Lakeside Luxe"}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="Ready to check dates?"
        subheading="View availability for Lakeside Luxe or learn why booking direct saves you more."
        buttonLabel="Check Availability"
        buttonHref="/properties/pickerel-lake-retreat#booking"
        secondaryLabel="Why Book Direct?"
        secondaryHref="/book-direct"
      />
    </>
  );
}
