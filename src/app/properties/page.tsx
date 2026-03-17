import type { Metadata } from "next";
import PropertyCard from "@/components/PropertyCard";
import CTABanner from "@/components/CTABanner";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Our Properties | Peridot Properties",
  description:
    "Browse handpicked lakeside vacation rentals in Minnesota's lake country — managed personally by Charlotte Wunderlich. Book direct and save.",
  openGraph: {
    title: "Our Properties | Peridot Properties",
    description:
      "Handpicked lakeside stays in Minnesota. New-build homes with private lake frontage, managed personally by Charlotte Wunderlich.",
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

      {/* ── Property Spotlight ── */}
      <section className="py-14 px-4 max-w-5xl mx-auto" aria-label="Available properties">
        <div className="flex flex-col gap-6">
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

        {properties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: "#2C2C2C60" }}>No properties found.</p>
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="Not sure which property is right for you?"
        subheading="Reach out to Charlotte directly. She'll help you find the perfect fit for your group, your dates, and your vision of the perfect lake trip."
        buttonLabel="Contact Charlotte"
        buttonHref="/book-direct#contact"
        secondaryLabel="Why Book Direct?"
        secondaryHref="/book-direct"
      />
    </>
  );
}
