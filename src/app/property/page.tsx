import type { Metadata } from "next";
import Link from "next/link";
import {
  Wifi,
  Flame,
  UtensilsCrossed,
  Sailboat,
  TreePine,
  Fish,
  Wind,
  Waves,
  Tv,
  Car,
  Coffee,
  Layers,
  BedDouble,
  ShowerHead,
  Utensils,
  Sofa,
  MapPin,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "The Property | Peridot Properties — Pickerel Lake",
  description:
    "Explore our new-build 4-bedroom vacation home on Pickerel Lake. 150ft of private lake frontage, full kitchen, fire pit, kayaks, dock & more. Sleeps 10.",
  openGraph: {
    title: "The Property | Peridot Properties",
    description:
      "New-build 4-bedroom lakefront home on Pickerel Lake, MN. Private dock, kayaks, fire pit, full kitchen. Sleeps 10.",
  },
};

const galleryImages = [
  { id: 1, alt: "Living room with lake views and stone fireplace" },
  { id: 2, alt: "Kitchen with quartz countertops and stainless appliances" },
  { id: 3, alt: "Primary bedroom with king bed and lake views" },
  { id: 4, alt: "Private dock and sandy beach on Pickerel Lake" },
  { id: 5, alt: "Fire pit area with Adirondack chairs at sunset" },
  { id: 6, alt: "Deck overlooking the lake with dining table" },
  { id: 7, alt: "Bunk room with four bunks for kids" },
  { id: 8, alt: "Bathroom with walk-in shower and modern fixtures" },
];

const amenityCategories = [
  {
    category: "Kitchen",
    icon: Utensils,
    items: [
      "Full kitchen with quartz countertops",
      "Stainless steel appliances",
      "Drip coffee maker & French press",
      "Instant Pot & slow cooker",
      "Cast iron skillets for your catch",
      "Fish-cleaning station outside",
      "Full set of dishes, pots & pans",
      "Outdoor propane grill",
    ],
  },
  {
    category: "Outdoor & Lake",
    icon: Waves,
    items: [
      "150ft of private lake frontage",
      "Private dock with boat lift",
      "Sandy swim area",
      "Two kayaks & one canoe",
      "Life jackets (adult & kids)",
      "Fishing rods & basic tackle",
      "Fire pit with firewood provided",
      "Outdoor dining on the deck",
    ],
  },
  {
    category: "Entertainment",
    icon: Tv,
    items: [
      "65\" smart TV in living room",
      "Streaming apps (Netflix, Disney+)",
      "High-speed WiFi throughout",
      "Board games & card games",
      "Corn hole & lawn games",
      "Bluetooth speaker",
      "Books & magazines",
      "Kids' toys and floaties",
    ],
  },
  {
    category: "Comfort & Convenience",
    icon: Sofa,
    items: [
      "Central A/C & forced-air heat",
      "Propane fireplace in living room",
      "Washer & dryer in-unit",
      "Pack-n-play & high chair available",
      "Fresh linens & bath towels",
      "Beach towels for lake days",
      "Keypad entry — no key needed",
      "EV charging outlet in garage",
    ],
  },
];

const houseRules = [
  "Check-in: 4:00 PM | Check-out: 10:00 AM",
  "No smoking anywhere on the property",
  "Pets considered on request — please ask before booking",
  "Maximum 10 guests overnight",
  "Quiet hours 10 PM – 8 AM (neighbor-friendly lake)",
  "No parties or events beyond registered guests",
  "Leave firewood stacked neatly — we provide the first bundle",
  "Return boats/kayaks to the dock after use",
];

export default function PropertyPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)" }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8A951" }}>
          33746 N Pickerel Dr &middot; Richville, MN 56576
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
        >
          The Property
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "#FAF8F5CC" }}>
          A brand-new lakefront retreat designed for making memories — whether that&apos;s catching walleye at sunrise
          or watching the northern lights from the fire pit at midnight.
        </p>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-14 px-4 max-w-6xl mx-auto" aria-label="Photo gallery">
        <h2
          className="text-3xl font-semibold mb-8 text-center"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
        >
          Take a look around
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              className={`rounded-xl overflow-hidden ${idx === 0 ? "col-span-2 row-span-2" : ""} relative`}
              style={{ aspectRatio: idx === 0 ? "auto" : "4/3" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/800/600?random=${img.id}`}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform hover:scale-105"
                style={{ minHeight: idx === 0 ? "320px" : "160px" }}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Property Description ── */}
      <section className="py-14 px-4" style={{ backgroundColor: "#2D501608" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
              About the Home
            </p>
            <h2
              className="text-3xl font-semibold mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Modern comfort meets<br />lakeside living
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
              <p>
                Built new in 2023, this home was designed from the ground up with lake life in mind.
                The open-concept main floor captures lake views from every angle, with floor-to-ceiling
                windows in the living and dining areas that fill the space with natural light from morning
                through golden hour.
              </p>
              <p>
                The kitchen is a cook&apos;s dream &mdash; plenty of counter space, quality appliances, and a
                fish-cleaning station just outside the back door for those who are serious about their catch.
                A propane fireplace anchors the living room, and the wide wraparound deck runs the full width
                of the lake-facing side.
              </p>
              <p>
                Four bedrooms sleep up to 10 comfortably: a primary king suite, a second queen room,
                a queen flex room (or twin option), and a bunk room loved by kids (and adults who call
                dibs early). Two full bathrooms mean no morning bottlenecks.
              </p>
              <p>
                Step outside to 150 feet of pristine Pickerel Lake frontage &mdash; a private dock,
                sandy swim area, fire pit, and two kayaks plus a canoe that are yours to use all week.
              </p>
            </div>
          </div>

          {/* Specs sidebar */}
          <div
            className="rounded-2xl p-6 h-fit"
            style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2320", boxShadow: "0 2px 14px rgba(45,80,22,0.07)" }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              At a Glance
            </h3>
            <ul className="space-y-3">
              {[
                { icon: BedDouble, label: "4 bedrooms (king, queen, queen, bunks)" },
                { icon: ShowerHead, label: "2 full bathrooms" },
                { icon: Layers, label: "Sleeps up to 10 guests" },
                { icon: Waves, label: "150ft private lake frontage" },
                { icon: Sailboat, label: "Dock, kayaks & canoe" },
                { icon: Car, label: "2-car garage + driveway" },
                { icon: Wifi, label: "High-speed WiFi" },
                { icon: Coffee, label: "Full kitchen" },
                { icon: Flame, label: "Propane fireplace" },
                { icon: Fish, label: "Fish cleaning station" },
                { icon: Wind, label: "Central A/C & heat" },
                { icon: TreePine, label: "Fire pit with firewood" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm" style={{ color: "#2C2C2C" }}>
                  <Icon size={14} style={{ color: "#6B8E23" }} className="shrink-0" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
            <Link
              href="/book"
              className="mt-6 block w-full text-center py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* ── Full Amenities ── */}
      <section className="py-14 px-4 max-w-5xl mx-auto" aria-label="Full amenities list">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
            Everything Included
          </p>
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            Full Amenities
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenityCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl p-5"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2318" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <cat.icon size={18} style={{ color: "#6B8E23" }} aria-hidden="true" />
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
                    <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#6B8E23" }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── House Rules ── */}
      <section className="py-14 px-4" style={{ backgroundColor: "#2D501608" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              House Rules
            </h2>
            <p className="text-sm mt-2" style={{ color: "#2C2C2C80" }}>
              A few guidelines to keep things great for everyone
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {houseRules.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm"
                style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2315", color: "#2C2C2C" }}
              >
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#C8A951" }} aria-hidden="true" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="py-14 px-4 max-w-5xl mx-auto" aria-label="Property location">
        <div className="text-center mb-8">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            Location
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Map placeholder */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col items-center justify-center p-10 text-center"
            style={{
              background: "linear-gradient(135deg, #4A7C8C18, #6B8E2318)",
              border: "2px dashed #4A7C8C50",
              minHeight: "280px",
            }}
            aria-label="Map placeholder showing property location"
          >
            <MapPin size={40} style={{ color: "#4A7C8C" }} className="mb-4" aria-hidden="true" />
            <p
              className="text-lg font-semibold mb-1"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              33746 N Pickerel Dr
            </p>
            <p className="text-sm" style={{ color: "#2C2C2C80" }}>Richville, MN 56576</p>
            <p className="text-xs mt-4 px-4 leading-relaxed" style={{ color: "#2C2C2C60" }}>
              Interactive map will appear here. The property is on the north shore of Pickerel Lake,
              off County Road 35 in Otter Tail County.
            </p>
          </div>

          <div className="space-y-4">
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Getting Here
            </h3>
            <div className="space-y-3">
              {[
                { place: "Perham, MN", distance: "10 miles", note: "Grocery, restaurants, hardware" },
                { place: "Detroit Lakes, MN", distance: "25–30 miles", note: "Shopping, dining, entertainment" },
                { place: "Fergus Falls, MN", distance: "35 miles", note: "Full-service city" },
                { place: "Minneapolis, MN", distance: "~3 hours", note: "Via I-94 to US-10" },
                { place: "Fargo, ND", distance: "~45 minutes", note: "Via I-94" },
                { place: "Brainerd, MN", distance: "~1 hour", note: "Via MN-210" },
              ].map(({ place, distance, note }) => (
                <div key={place} className="flex items-start justify-between gap-4 py-2 border-b text-sm"
                  style={{ borderColor: "#6B8E2315" }}>
                  <div>
                    <span className="font-medium" style={{ color: "#2C2C2C" }}>{place}</span>
                    <span className="block text-xs" style={{ color: "#2C2C2C60" }}>{note}</span>
                  </div>
                  <span className="shrink-0 font-semibold" style={{ color: "#6B8E23" }}>{distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="This is your lake house."
        subheading="Dates fill up quickly in summer and during ice fishing season. Reserve your spot today."
        buttonLabel="Check Availability & Book"
        buttonHref="/book"
        secondaryLabel="Things To Do Nearby"
        secondaryHref="/explore"
      />
    </>
  );
}
