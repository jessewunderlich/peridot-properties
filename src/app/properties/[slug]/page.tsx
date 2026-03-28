import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  BedDouble,
  ShowerHead,
  Layers,
  Waves,
  Sailboat,
  Car,
  Wifi,
  Coffee,
  Fish,
  TreePine,
  Wind,

} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import SeasonCard from "@/components/SeasonCard";
import TestimonialCard from "@/components/TestimonialCard";
import BookingWidget from "@/components/BookingWidget";
import RatesWidget from "@/components/RatesWidget";
import ScrollReveal from "@/components/ScrollReveal";

import { properties, getProperty } from "@/data/properties";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return {};

  return {
    title: property.name,
    description: `${property.tagline}. ${property.description[0]}`,
    alternates: { canonical: `/properties/${slug}` },
    openGraph: {
      title: `${property.name} | Peridot Properties`,
      description: property.tagline,
      url: `https://peridot.properties/properties/${slug}`,
      images: [{ url: `https://peridot.properties${property.heroImage}`, width: 1600, height: 900, alt: property.gallery[0]?.alt ?? property.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${property.name} | Peridot Properties`,
      description: property.tagline,
      images: [`https://peridot.properties${property.heroImage}`],
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getProperty(slug);

  if (!property) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://peridot.properties/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Properties",
        item: "https://peridot.properties/properties",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: property.name,
        item: `https://peridot.properties/properties/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(property.jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── Page Header ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #2F6271 100%)" }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8A951" }}>
          {property.location.address} &middot; {property.location.city}, {property.location.state} {property.location.zip}
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
        >
          {property.name}
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "#FAF8F5CC" }}>
          {property.tagline} &mdash; a brand-new lakefront retreat designed for making memories,
          whether that&apos;s catching walleye at sunrise or watching the northern lights from the fire pit at midnight.
        </p>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-14 px-4 max-w-6xl mx-auto" aria-label="Photo gallery">
        <ScrollReveal>
        <h2
          className="text-3xl font-semibold mb-8 text-center"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
        >
          Take a look around
        </h2>
        </ScrollReveal>
        {/* Mobile: horizontal scroll carousel */}
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 sm:hidden -mx-4 px-4">
          {property.gallery.map((img, idx) => (
            <div
              key={img.id}
              className="relative rounded-xl overflow-hidden snap-center shrink-0"
              style={{ width: "85vw", aspectRatio: "4/3" }}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="85vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
        {/* Tablet+: grid layout */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3">
          {property.gallery.map((img, idx) => (
            <ScrollReveal key={img.id} delay={idx * 80} className={`rounded-xl overflow-hidden ${idx === 0 ? "col-span-2 row-span-2" : ""} relative`} style={{ aspectRatio: idx === 0 ? "4/3" : "4/3", minHeight: idx === 0 ? "320px" : "160px" }}>
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes={idx === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                priority={idx === 0}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Description + Specs Sidebar ── */}
      <section className="py-14 px-4" style={{ backgroundColor: "#2D501608" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <ScrollReveal className="md:col-span-2">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
              About the Home
            </p>
            <h2
              className="text-3xl font-semibold mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Modern comfort meets<br />lakeside living
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
              {property.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </ScrollReveal>

          {/* Specs sidebar */}
          <ScrollReveal delay={150} variant="fade-left" className="h-fit">
          <div
            className="rounded-2xl p-6 h-full"
            style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1620", boxShadow: "0 2px 14px rgba(45,80,22,0.07)" }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              At a Glance
            </h3>
            <ul className="space-y-3">
              {[
                { icon: BedDouble, label: `${property.specs.bedrooms} bedrooms (2 king, 2 queen, 1 twin room with 2 beds across 3 floors)` },
                { icon: ShowerHead, label: `${property.specs.bathrooms} bathrooms (full + 3/4 en-suite, half, 3/4 suite)` },
                { icon: Layers, label: `Beds for ${property.specs.sleeps} \u2022 max ${property.specs.maxOccupancy ?? property.specs.sleeps} on property` },
                { icon: Waves, label: `${property.specs.frontage} private lake frontage` },
                { icon: Sailboat, label: "Dock, kayaks & paddle boards" },
                { icon: Car, label: "Off-street parking for 4 cars" },
                { icon: Wifi, label: "High-speed WiFi" },
                { icon: Coffee, label: "Full kitchen" },
                { icon: Wind, label: "Central A/C & heat" },
                { icon: TreePine, label: "Fire pit with firewood" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm" style={{ color: "#2C2C2C" }}>
                  <Icon size={14} style={{ color: "#4F6F16" }} className="shrink-0" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <Link
              href="#booking"
              className="mt-6 block w-full text-center py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: property.comingSoon ? "#C8A951" : "#4F6F16", color: property.comingSoon ? "#2D5016" : "#FAF8F5" }}
            >
              {property.comingSoon ? "Coming Soon" : "Check Availability"}
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Full Amenities ── */}
      <section className="py-14 px-4 max-w-5xl mx-auto" aria-label="Full amenities list">
        <ScrollReveal>
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
            Everything Included
          </p>
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            Full Amenities
          </h2>
        </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {property.amenities.map((cat, i) => (
            <ScrollReveal key={cat.category} delay={i * 80}>
            <div
              className="rounded-xl p-5 h-full"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1618" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <cat.icon size={18} style={{ color: "#4F6F16" }} aria-hidden="true" />
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                >
                  {cat.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "#2C2C2C" }}>
                    <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#4F6F16" }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── House Rules ── */}
      <section className="py-14 px-4" style={{ backgroundColor: "#2D501608" }}>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              House Rules
            </h2>
            <p className="text-sm mt-2" style={{ color: "#5C5C5C" }}>
              A few guidelines to keep things great for everyone
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {property.houseRules.map((rule, i) => (
              <ScrollReveal key={rule} delay={i * 60} as="li" className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1615", color: "#2C2C2C" }}>
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#C8A951" }} aria-hidden="true" />
                {rule}
              </ScrollReveal>
            ))}
          </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Seasonal Activities ── */}
      <section className="py-16 px-4 max-w-6xl mx-auto" aria-label="Seasonal activities">
        <ScrollReveal>
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
            Every Season Has Its Magic
          </p>
          <h2
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            A lake for all seasons
          </h2>
        </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {property.seasons.map((season, i) => (
            <ScrollReveal key={season.season} delay={i * 100}>
            <SeasonCard {...season} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Lake Info ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2D501608" }} aria-label={`About ${property.lake.name}`}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
              The Lake
            </p>
            <h2
              className="text-4xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              {property.lake.name} at a Glance
            </h2>
            <p className="text-sm mt-3 max-w-2xl mx-auto" style={{ color: "#5C5C5C" }}>
              {property.lake.acres.toLocaleString()} acres &bull; Maximum depth {property.lake.maxDepth} feet &bull; Crystal-clear water &bull; {property.location.county}, MN
            </p>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {property.lake.info.map((info, i) => (
              <ScrollReveal key={info.title} delay={i * 80}>
              <div
                className="flex gap-4 p-5 rounded-2xl h-full"
                style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1618" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#4F6F1618" }}
                >
                  <info.icon size={20} style={{ color: "#4F6F16" }} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                  >
                    {info.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5C5C5C" }}>
                    {info.description}
                  </p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Fishing tips callout */}
          <ScrollReveal delay={200} variant="fade-up">
          <div
            className="mt-8 p-6 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #2D5016 0%, #2F6271 100%)" }}
          >
            <div className="flex items-start gap-4">
              <Fish size={28} style={{ color: "#C8A951" }} className="shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
                >
                  Charlotte&apos;s Fishing Tips
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#FAF8F5CC" }}>
                  {property.lake.fishingTips}
                </p>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Nearby Attractions ── */}
      <section className="py-16 px-4 max-w-6xl mx-auto" aria-label="Nearby towns and attractions">
        <ScrollReveal>
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
            Beyond the Lake
          </p>
          <h2
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            Explore the area
          </h2>
          <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#5C5C5C" }}>
            When you want to venture off the dock, the surrounding towns have plenty to offer.
          </p>
        </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {property.nearbyAttractions.map((attraction, i) => (
            <ScrollReveal key={attraction.place} delay={i * 120}>
            <div
              className="rounded-2xl overflow-hidden h-full"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1618" }}
            >
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ backgroundColor: "#4F6F1610" }}
              >
                <attraction.icon size={18} style={{ color: "#4F6F16" }} aria-hidden="true" />
                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                  >
                    {attraction.place}
                  </h3>
                  <p className="text-xs" style={{ color: "#2C2C2C60" }}>{attraction.distance} away</p>
                </div>
              </div>
              <ul className="px-5 py-4 space-y-2">
                {attraction.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm" style={{ color: "#2C2C2C" }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: "#C8A951" }}
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Outdoor Highlights ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2D501608" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {property.outdoorHighlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
            <div
              className="p-6 rounded-2xl flex flex-col gap-3 h-full"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1618" }}
            >
              <item.icon size={22} style={{ color: "#4F6F16" }} aria-hidden="true" />
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5C5C5C" }}>
                {item.desc}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Location / Map ── */}
      <section className="py-14 px-4 max-w-5xl mx-auto" aria-label="Property location">
        <ScrollReveal>
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            Location
          </h2>
        </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Google Maps Embed */}
          <ScrollReveal variant="fade-right">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #4F6F1620", minHeight: "280px" }}
          >
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(property.location.address + ", " + property.location.city + ", " + property.location.state + " " + property.location.zip)}&z=13&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${property.name} location`}
            />
          </div>
          </ScrollReveal>

          <ScrollReveal delay={150} variant="fade-left">
          <div className="space-y-4">
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Getting Here
            </h3>
            <div className="space-y-3">
              {property.distances.map(({ place, distance, note }) => (
                <div key={place} className="flex items-start justify-between gap-4 py-2 border-b text-sm"
                  style={{ borderColor: "#4F6F1615" }}>
                  <div>
                    <span className="font-medium" style={{ color: "#2C2C2C" }}>{place}</span>
                    <span className="block text-xs" style={{ color: "#2C2C2C60" }}>{note}</span>
                  </div>
                  <span className="shrink-0 font-semibold" style={{ color: "#4F6F16" }}>{distance}</span>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pricing ── */}
      {!property.comingSoon && (
        <section className="py-14 px-4" style={{ backgroundColor: "#2D501608" }} aria-label="Pricing">
          <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
                Seasonal Rates
              </p>
              <h2
                className="text-3xl font-semibold"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
              >
                Pricing Overview
              </h2>
            </div>
            <RatesWidget />
            <p className="text-xs mt-4 leading-relaxed" style={{ color: "#2C2C2C60" }}>
              Rates are per night, not including applicable taxes. A $395 cleaning fee applies.
              Exact pricing confirmed at booking. Holiday weekends may carry a premium.
            </p>
          </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── Cancellation Policy ── */}
      <section className="py-14 px-4" aria-label="Cancellation policy">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Cancellation Policy
            </h2>
            <p className="text-sm mt-2" style={{ color: "#5C5C5C" }}>
              Book with confidence — flexible terms for direct guests
            </p>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ScrollReveal delay={0}>
            <div
              className="flex flex-col gap-3 p-5 rounded-xl h-full"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1618" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: "#4CAF50" }} aria-hidden="true" />
                <span className="text-sm font-semibold" style={{ color: "#2D5016" }}>Fully Refundable</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#5C5C5C" }}>
                Cancel for any reason at least 48 hours before check-in for a full refund.
              </p>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
            <div
              className="flex flex-col gap-3 p-5 rounded-xl h-full"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1618" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: "#C8A951" }} aria-hidden="true" />
                <span className="text-sm font-semibold" style={{ color: "#2D5016" }}>50% Refundable</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#5C5C5C" }}>
                Cancel between 24 and 48 hours before check-in for a 50% refund of the total booking amount.
              </p>
            </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <div
              className="flex flex-col gap-3 p-5 rounded-xl h-full"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1618" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: "#C0392B" }} aria-hidden="true" />
                <span className="text-sm font-semibold" style={{ color: "#2D5016" }}>Non-Refundable</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#5C5C5C" }}>
                After check-in time, the reservation is non-refundable.
              </p>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Booking Widget ── */}
      <section id="booking" className="py-14 px-4" aria-label="Check availability and book">
        <div className="max-w-5xl mx-auto">
          {property.comingSoon ? (
            <>
              <div className="text-center mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8A951" }}>
                  Coming Soon
                </p>
                <h2
                  className="text-3xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                >
                  Bookings Opening Soon
                </h2>
                <p className="text-sm max-w-xl mx-auto" style={{ color: "#5C5C5C" }}>
                  We&apos;re putting the finishing touches on Lakeside Luxe. Sign up below to be the first to know when bookings open.
                </p>
              </div>
              <div
                className="max-w-lg mx-auto rounded-2xl p-8 text-center"
                style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1625", boxShadow: "0 4px 24px rgba(45,80,22,0.10)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "#C8A95120" }}
                >
                  <span className="text-2xl" aria-hidden="true">🔔</span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                >
                  Get Notified
                </h3>
                <p className="text-sm mb-6" style={{ color: "#5C5C5C" }}>
                  Email Charlotte to get on the early access list. Direct bookers get first pick of dates.
                </p>
                <a
                  href="mailto:charlotte@peridot.properties?subject=Notify%20me%20when%20Lakeside%20Luxe%20opens"
                  className="inline-block px-8 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: "#4F6F16", color: "#FAF8F5" }}
                >
                  Email Charlotte
                </a>
                <p className="text-xs mt-4" style={{ color: "#2C2C2C50" }}>
                  charlotte@peridot.properties
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
                  Book Direct &amp; Save
                </p>
                <h2
                  className="text-3xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                >
                  Check Availability &amp; Reserve
                </h2>
                <p className="text-sm max-w-xl mx-auto" style={{ color: "#5C5C5C" }}>
                  Booking direct with Charlotte saves you 10–15% compared to Airbnb or VRBO.
                </p>
              </div>
              <BookingWidget />
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {[
                  "Save 10–15% vs. Airbnb & VRBO",
                  "Flexible cancellation",
                  "Talk to Charlotte directly",
                  "Early access to new dates",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "#5C5C5C" }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#4F6F16" }} aria-hidden="true" />
                    {text}
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <Link
                  href="/book-direct"
                  className="text-sm font-medium underline underline-offset-4 transition-colors hover:opacity-70"
                  style={{ color: "#4F6F16" }}
                >
                  Learn more about booking direct &rarr;
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Testimonials ── */}
      {property.testimonials.length > 0 && (
        <section className="py-16 px-4" style={{ backgroundColor: "#2D501608" }} aria-label="Guest reviews">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                className="text-4xl font-semibold"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
              >
                What guests are saying
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {property.testimonials.map((t) => (
                <TestimonialCard key={t.author} {...t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CTABanner
        heading={property.comingSoon ? "Be the first to book." : "This is your lake house."}
        subheading={property.comingSoon
          ? "Lakeside Luxe is almost ready. Email Charlotte to get on the early access list."
          : "Dates fill up quickly in summer and during ice fishing season. Reserve your spot today."}
        buttonLabel={property.comingSoon ? "Email Charlotte" : "Check Availability"}
        buttonHref={property.comingSoon ? "mailto:charlotte@peridot.properties?subject=Early%20access%20to%20Lakeside%20Luxe" : "#booking"}
        secondaryLabel="Browse All Properties"
        secondaryHref="/properties"
      />
    </>
  );
}
