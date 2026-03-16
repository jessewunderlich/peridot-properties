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

      {/* ── Search / Filter (future) ── */}
      <section className="py-6 px-4" style={{ backgroundColor: "#2D501608" }}>
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#4A7C8C" }}>
            Filter by:
          </span>
          {["Region", "Bedrooms", "Season", "Pet Friendly"].map((filter) => (
            <button
              key={filter}
              disabled
              className="px-4 py-2 rounded-full text-xs font-medium border cursor-not-allowed opacity-50"
              style={{ borderColor: "#6B8E2330", color: "#2C2C2C" }}
              title="Coming soon"
            >
              {filter}
            </button>
          ))}
          <span className="text-xs ml-auto" style={{ color: "#2C2C2C40" }}>
            Search &amp; filter coming soon
          </span>
        </div>
      </section>

      {/* ── Property Grid ── */}
      <section className="py-14 px-4 max-w-6xl mx-auto" aria-label="Available properties">
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
              imageUrl={`https://picsum.photos/800/600?random=${property.gallery[0].id}`}
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
