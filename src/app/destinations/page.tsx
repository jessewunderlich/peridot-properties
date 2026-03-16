import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Fish, TreePine, Waves } from "lucide-react";
import { properties } from "@/data/properties";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Destinations | Peridot Properties",
  description:
    "Explore Minnesota's lake country with Peridot Properties. Curated vacation rentals in Otter Tail County, Detroit Lakes area, and beyond.",
  openGraph: {
    title: "Destinations | Peridot Properties",
    description:
      "Handpicked lakeside stays across Minnesota's most beautiful lake regions.",
  },
};

const regions = [
  {
    name: "Otter Tail County Lakes",
    slug: "otter-tail-county",
    description:
      "Home to over 1,000 lakes, Otter Tail County is the heart of Minnesota's lake country. World-class walleye fishing, pristine shorelines, and small-town charm define this region. Towns like Perham, Richville, and Pelican Rapids offer everything you need while keeping the pace slow and the water close.",
    highlights: [
      "1,000+ lakes in one county",
      "World-class walleye & bass fishing",
      "Near Perham, Detroit Lakes & Fergus Falls",
      "Year-round activities: fishing, hunting, skiing, snowmobiling",
    ],
    icon: Fish,
    propertyCount: properties.filter(
      (p) => p.location.county.startsWith("Otter Tail")
    ).length,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
  },
];

const comingSoonRegions = [
  {
    name: "Detroit Lakes Area",
    description: "Resort-town energy with big-lake access.",
    icon: Waves,
  },
  {
    name: "Brainerd Lakes",
    description: "The classic Minnesota lake vacation destination.",
    icon: TreePine,
  },
];

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background:
            "linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)",
        }}
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C8A951" }}
        >
          Minnesota Lake Country
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#FAF8F5",
          }}
        >
          Destinations
        </h1>
        <p
          className="text-base max-w-xl mx-auto"
          style={{ color: "#FAF8F5CC" }}
        >
          Explore the regions where we curate our properties — each chosen
          for its natural beauty, fishing, and that unmistakable Minnesota
          lake magic.
        </p>
      </section>

      {/* Active Regions */}
      <section className="py-14 px-4 max-w-5xl mx-auto" aria-label="Destinations">
        {regions.map((region) => (
          <div
            key={region.slug}
            className="rounded-2xl overflow-hidden mb-8"
            style={{ border: "1px solid #6B8E2320" }}
          >
            {/* Region image */}
            <div className="relative h-56 sm:h-72">
              <Image
                src={region.image}
                alt={`${region.name} landscape`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(45,80,22,0.8), transparent 60%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin
                    size={16}
                    style={{ color: "#C8A951" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "#C8A951" }}
                  >
                    {region.propertyCount}{" "}
                    {region.propertyCount === 1 ? "property" : "properties"}
                  </span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-semibold"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    color: "#FAF8F5",
                  }}
                >
                  {region.name}
                </h2>
              </div>
            </div>

            {/* Region details */}
            <div className="p-6 sm:p-8" style={{ backgroundColor: "#FAF8F5" }}>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#2C2C2C" }}
              >
                {region.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {region.highlights.map((h) => (
                  <span
                    key={h}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "#6B8E2315",
                      color: "#2D5016",
                    }}
                  >
                    <region.icon size={12} aria-hidden="true" />
                    {h}
                  </span>
                ))}
              </div>
              <Link
                href="/properties"
                className="inline-block px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
              >
                View Properties in {region.name}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Coming Soon Regions */}
      <section
        className="py-14 px-4"
        style={{ backgroundColor: "#2D501608" }}
        aria-label="Coming soon"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#4A7C8C" }}
            >
              Coming Soon
            </p>
            <h2
              className="text-3xl font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#2D5016",
              }}
            >
              More regions on the way
            </h2>
            <p className="text-sm mt-3" style={{ color: "#2C2C2C80" }}>
              We&apos;re expanding across Minnesota&apos;s lake country. Stay
              tuned for new destinations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {comingSoonRegions.map((r) => (
              <div
                key={r.name}
                className="p-6 rounded-2xl flex items-start gap-4"
                style={{
                  backgroundColor: "#FAF8F5",
                  border: "2px dashed #6B8E2330",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#6B8E2318" }}
                >
                  <r.icon
                    size={18}
                    style={{ color: "#6B8E23" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      color: "#2D5016",
                    }}
                  >
                    {r.name}
                  </h3>
                  <p className="text-sm" style={{ color: "#2C2C2C80" }}>
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Know a property that belongs here?"
        subheading="We're selectively adding properties across Minnesota's lake country. If you own a lakefront gem, let's talk."
        buttonLabel="Contact Charlotte"
        buttonHref="/book-direct#contact"
        secondaryLabel="Browse Properties"
        secondaryHref="/properties"
      />
    </>
  );
}
