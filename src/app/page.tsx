import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  Bed,
  Bath,
  Users,
  Ruler,
  Wifi,
  Flame,
  UtensilsCrossed,
  Sailboat,
  TreePine,
  Star,
  Fish,
  Wind,
  Sun,
} from "lucide-react";
import AmenityIcon from "@/components/AmenityIcon";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Peridot Properties | Pickerel Lake Vacation Rental — Richville, MN",
  description:
    "Book your lakeside getaway on stunning Pickerel Lake in Richville, MN. New-build 4-bedroom home, 150ft of private lake frontage, sleeps 10. Book direct & save.",
  openGraph: {
    title: "Peridot Properties | Pickerel Lake Vacation Rental",
    description:
      "Escape to Pickerel Lake — walleye fishing, summer water sports, fall foliage, and winter ice fishing all from your private dock. Book direct with Charlotte.",
    url: "https://peridotproperties.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "Peridot Properties — Pickerel Lake",
  description:
    "New-build 4-bedroom vacation home on Pickerel Lake with 150ft of private lake frontage. Sleeps 10. Located at 33746 N Pickerel Dr, Richville, MN 56576.",
  url: "https://peridotproperties.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "33746 N Pickerel Dr",
    addressLocality: "Richville",
    addressRegion: "MN",
    postalCode: "56576",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "46.5",
    longitude: "-95.1",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Lake frontage", value: "150 feet" },
    { "@type": "LocationFeatureSpecification", name: "Bedrooms", value: "4" },
    { "@type": "LocationFeatureSpecification", name: "Bathrooms", value: "2" },
    { "@type": "LocationFeatureSpecification", name: "Maximum occupancy", value: "10" },
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private dock", value: true },
  ],
  telephone: "+12185550100",
  email: "hello@peridotproperties.com",
};

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi", description: "Stream, work, or share photos" },
  { icon: Waves, label: "Private Dock", description: "150ft of lakefront access" },
  { icon: Flame, label: "Fireplace", description: "Cozy up after a day on the lake" },
  { icon: UtensilsCrossed, label: "Full Kitchen", description: "Fry up your fresh-caught walleye" },
  { icon: Sailboat, label: "Kayaks & Canoe", description: "Complimentary watercraft" },
  { icon: TreePine, label: "Fire Pit", description: "Perfect for s'mores under the stars" },
  { icon: Fish, label: "Fishing Gear", description: "Rods & tackle available on-site" },
  { icon: Wind, label: "Central A/C & Heat", description: "Comfortable year-round" },
];

const testimonials = [
  {
    quote:
      "We've done lakes all over Minnesota and Pickerel is genuinely one of the best. Caught our limit of walleye both days, and the house is absolutely stunning — modern and cozy at the same time. Charlotte was incredibly responsive. We're already planning our return trip.",
    author: "Mike & Sarah T.",
    location: "Minneapolis, MN",
  },
  {
    quote:
      "This was our family's fourth year at the lake and our first time staying on Pickerel. The private dock made all the difference. Kids were on the water all day, we had incredible sunsets from the deck, and the loons woke us up every morning. Pure Minnesota magic.",
    author: "The Andersons",
    location: "Edina, MN",
  },
  {
    quote:
      "Came up in October for the fall foliage and honestly the colors were even better than advertised. The house was spotless, the fire pit is incredible, and the area is so peaceful. Perfect for a girlfriend trip — we felt like we had the whole lake to ourselves.",
    author: "Rachel K.",
    location: "Fargo, ND",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            Pickerel Lake &middot; Richville, Minnesota
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
          >
            Your lakeside escape<br />
            <span style={{ color: "#C8A951" }}>on Pickerel Lake</span>
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "#FAF8F5CC" }}
          >
            A brand-new 4-bedroom retreat with 150 feet of private lake frontage, stunning water views,
            and everything you need to truly unplug. Three hours from Minneapolis &mdash; a world away from everything else.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="px-8 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: "#C8A951", color: "#2D5016" }}
            >
              Book Direct &amp; Save 10&ndash;15%
            </Link>
            <Link
              href="/property"
              className="px-8 py-4 rounded-full text-sm font-semibold border transition-all hover:bg-white/10"
              style={{ borderColor: "#FAF8F560", color: "#FAF8F5" }}
            >
              View the Property
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

      {/* ── Quick Highlights ── */}
      <section className="py-12 px-4" style={{ backgroundColor: "#2D5016" }} aria-label="Property highlights">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Bed, label: "4 Bedrooms", sub: "King, queen & bunks" },
            { icon: Bath, label: "2 Bathrooms", sub: "Including primary suite" },
            { icon: Users, label: "Sleeps 10", sub: "Room for the whole crew" },
            { icon: Ruler, label: "150ft Frontage", sub: "Private dock & beach" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center p-4">
              <Icon size={28} style={{ color: "#C8A951" }} className="mb-2" aria-hidden="true" />
              <p className="text-sm font-semibold" style={{ color: "#FAF8F5" }}>{label}</p>
              <p className="text-xs mt-0.5" style={{ color: "#FAF8F560" }}>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About the Lake ── */}
      <section className="py-20 px-4" aria-label="About Pickerel Lake">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
              The Setting
            </p>
            <h2
              className="text-4xl font-semibold leading-tight mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              829 acres of pure<br />
              northern Minnesota
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#2C2C2C" }}>
              Pickerel Lake sits in the heart of Otter Tail County, one of Minnesota&apos;s most celebrated lake regions.
              At nearly 830 acres with depths reaching 78 feet, it&apos;s a world-class fishery &mdash; walleye,
              smallmouth bass, northern pike &mdash; all within casting distance of your private dock.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#2C2C2C" }}>
              The town of Perham is just 10 miles away when you need a great meal or a quick supply run.
              Detroit Lakes is 25 miles north. But honestly? Once you arrive and hear the loons
              calling across the water at dusk, you won&apos;t want to leave.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Sun, text: "~3 hrs from Minneapolis" },
                { icon: Wind, text: "45 min from Fargo" },
                { icon: Fish, text: "10 mi to Perham" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "#6B8E2315", color: "#2D5016" }}>
                  <Icon size={12} aria-hidden="true" />
                  {text}
                </span>
              ))}
            </div>
          </div>
          <div
            className="relative h-72 md:h-96 rounded-2xl overflow-hidden"
            style={{ border: "1px solid #6B8E2315" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://picsum.photos/800/600?random=10"
              alt="Pickerel Lake aerial view showing the dock and surrounding forest"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3"
              style={{ backgroundColor: "rgba(45,80,22,0.88)", backdropFilter: "blur(4px)" }}
            >
              <p className="text-xs font-medium" style={{ color: "#FAF8F5" }}>
                Pickerel Lake &middot; 829 acres &middot; 78ft deep &middot; Richville, MN
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Amenities ── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#2D501608" }} aria-label="Featured amenities">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
              What&apos;s Included
            </p>
            <h2
              className="text-4xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Everything you need, nothing you don&apos;t
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((amenity) => (
              <AmenityIcon key={amenity.label} {...amenity} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/property"
              className="inline-block text-sm font-medium underline underline-offset-4 transition-colors hover:opacity-70"
              style={{ color: "#6B8E23" }}
            >
              See the full amenities list &rarr;
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
            {testimonials.map((t) => (
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
            A property built with love,<br />managed with care
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#2C2C2C" }}>
            Peridot Properties is a small, family-run vacation rental on the shores of Pickerel Lake.
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
        buttonLabel="Check Availability"
        buttonHref="/book"
        secondaryLabel="Explore the Property"
        secondaryHref="/property"
      />
    </>
  );
}
