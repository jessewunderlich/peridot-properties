import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Gem, MapPin, Users, Star, Leaf } from "lucide-react";
import PeridotGem from "@/components/PeridotGem";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About — Charlotte Wunderlich",
  description:
    "Meet Charlotte Wunderlich, owner of Peridot Properties. Learn why we fell in love with Minnesota's lake country and why we named our vacation rental after a gemstone.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Peridot Properties | Charlotte Wunderlich",
    description:
      "A family-run vacation rental company in Minnesota's lake country. Meet Charlotte and learn the story behind Peridot Properties.",
    url: "https://www.peridot.properties/about",
    images: [{ url: "https://www.peridot.properties/images/pickerel-lake/golden-sunset.jpg", width: 1200, height: 800, alt: "Sunset over a Minnesota lake" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Peridot Properties | Charlotte Wunderlich",
    description: "A family-run vacation rental company in Minnesota's lake country.",
    images: ["https://www.peridot.properties/images/pickerel-lake/golden-sunset.jpg"],
  },
};

const values = [
  {
    icon: Heart,
    title: "Genuine Hospitality",
    description:
      "We treat every guest the way we'd want to be treated — with thoughtful communication, a spotless home, and a genuine desire for your trip to be perfect.",
  },
  {
    icon: Leaf,
    title: "Respect for the Lake",
    description:
      "Minnesota's lakes are a treasure, and we take that seriously. We ask guests to practice catch-and-release selectively, keep the shoreline clean, and leave no trace.",
  },
  {
    icon: Users,
    title: "Family First",
    description:
      "This home was designed with families in mind — kids, grandparents, the whole crew. We've thought about every detail from the twin bedroom to the life jackets.",
  },
  {
    icon: Star,
    title: "Honest, Fair Pricing",
    description:
      "We believe in transparent pricing with no surprise fees. What you see is what you pay. Booking direct means the savings pass directly to you.",
  },
  {
    icon: MapPin,
    title: "Know Your Neighborhood",
    description:
      "We live and breathe this area. Ask Charlotte where to eat, what bait is working, or whether the fall colors have peaked — she'll always have a real answer.",
  },
  {
    icon: Gem,
    title: "Quality Over Quantity",
    description:
      "We are selective about every property we offer. One exceptional experience beats five mediocre ones every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #2F6271 100%)" }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8A951" }}>
          The People Behind the Property
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
        >
          About Us
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "#FAF8F5CC" }}>
          A family who fell in love with Minnesota&apos;s lakes and wanted to share that with the world.
        </p>
      </section>

      {/* ── Charlotte's Story ── */}
      <section className="py-16 px-4 max-w-5xl mx-auto" aria-label="About Charlotte">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
              Meet Your Host
            </p>
            <h2
              className="text-4xl font-semibold leading-tight mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Hi, I&apos;m Charlotte
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
              <p>
                Hi from Frazee, MN!
              </p>
              <p>
                I&apos;m Charlotte, a licensed Funeral Director (ND/MN since 2017) who&apos;s also a 5-star Airbnb Superhost. Married to my USMC veteran husband, we&apos;re chasing joy with our energetic toddler, our baby girl due in June 2026, and our three rescued Cane Corsos who think they&apos;re lap dogs.
              </p>
              <p>
                Born in the 90s and a University of Minnesota &mdash; Twin Cities grad, I spend my days helping families through life&apos;s hardest moments with compassion. But when the sun dips over the lake? That&apos;s my reset &mdash; I&apos;m obsessed with those golden-hour views.
              </p>
              <p>
                Right now, I&apos;m pouring my heart into a memoir about finding light after final farewells &mdash; because life after loss deserves celebration.
              </p>
              <p>
                <strong>What Guests Get From Me:</strong> I always go the extra mile with thoughtful details for your family&apos;s perfect getaway. Got ideas to make it even better? I love constructive feedback!
              </p>
              <p>
                <strong>Why Lakeside Luxe?</strong> By day, I guide goodbyes. Here, I craft beginnings &mdash; clean, cozy escapes where your family makes memories. Can&apos;t wait to host you!
              </p>
            </div>
          </div>
          <div
            className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden"
            style={{ border: "1px solid #4F6F1615" }}
          >
            <Image
              src="/charlotte-family.jpg"
              alt="The Wunderlich family — Jesse, Dewey, and Charlotte"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3"
              style={{ backgroundColor: "rgba(45,80,22,0.88)", backdropFilter: "blur(4px)" }}
            >
              <p className="text-xs font-medium" style={{ color: "#FAF8F5" }}>
                Charlotte Wunderlich &middot; Host &amp; Owner
              </p>
              <p
                className="inline-flex items-center gap-1 text-xs font-semibold mt-1.5 px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "#C8A951", color: "#2D5016" }}
              >
                ⭐ 5-Star Airbnb Superhost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Peridot Name ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2D501608" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            className="p-8 rounded-2xl flex flex-col items-center text-center"
            style={{ background: "linear-gradient(135deg, #4F6F1615, #C8A95115)", border: "1px solid #4F6F1620" }}
          >
            <PeridotGem size={56} className="mb-4" />
            <p
              className="text-5xl font-semibold mb-2"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Peridot
            </p>
            <p className="text-sm italic mb-4" style={{ color: "#2C2C2C60" }}>
              /ˈpɛr.ɪ.dɒt/ &middot; noun
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
              A yellow-green gemstone, variety of olivine. One of the oldest known gemstones, associated with
              the sun, warmth, and new beginnings. Sometimes called the &ldquo;gem of the sun.&rdquo;
            </p>
            <div
              className="mt-5 w-16 h-16 rounded-full"
              style={{ background: "radial-gradient(circle at 35% 35%, #a8c45a, #4F6F16, #4a6318)" }}
              aria-label="Peridot gemstone color swatch"
            />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
              The Name
            </p>
            <h2
              className="text-4xl font-semibold leading-tight mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Why Peridot?
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
              <p>
                Peridot is the color of a Minnesota lake on a July afternoon &mdash; that specific shade of
                yellow-green where the shallow water meets the sky and everything glows.
              </p>
              <p>
                The gemstone itself is found deep in the earth, formed under pressure and heat, and sometimes
                delivered to the surface by volcanic activity. It&apos;s ancient, warm, and a little bit magical.
                We think that describes northern Minnesota pretty well.
              </p>
              <p>
                Peridot is also August&apos;s birthstone &mdash; peak lake season. No coincidence there.
              </p>
              <p>
                When we were thinking about a name, we wanted something that felt like the lake: warm, natural,
                a little earthy, and quietly beautiful. Peridot felt exactly right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Minnesota's Lake Country ── */}
      <section className="py-16 px-4 max-w-5xl mx-auto" aria-label="Why Minnesota lake country">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
            Our Region
          </p>
          <h2
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            Why Minnesota&apos;s Lake Country?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
            <p>
              Minnesota has over 11,000 lakes. We&apos;ve spent years exploring them, and we keep coming
              back to the same corner of the state &mdash; Otter Tail County and the surrounding region.
              Here&apos;s why:
            </p>
            <p>
              The fishing is exceptional. Walleye, smallmouth bass, northern pike &mdash; these lakes have real
              depth, structure, and the habitat serious anglers look for.
              Our guests consistently report catching fish, not just trying to.
            </p>
            <p>
              The lakes aren&apos;t overcrowded. You won&apos;t find the jet-ski-and-noise-complaints atmosphere
              of some of the more famous resort destinations. These are local lakes, beloved by the community,
              with a quiet dignity we really respect.
            </p>
            <p>
              The towns are genuine small-town Minnesota. The neighbors wave. The bait shop
              owner will actually tell you where the fish are. The Friday night fish fry at the VFW
              is not to be missed.
            </p>
            <p>
              And the views. Facing west across the water at sunset, in late September when the
              maples have gone red and gold &mdash; that view is worth everything.
            </p>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[360px]"
            style={{ border: "1px solid #4F6F1615" }}
          >
            <Image
              src="/images/pickerel-lake/golden-sunset.jpg"
              alt="Sunset over a Minnesota lake with fall foliage reflecting in the calm water"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2D501608" }} aria-label="Our values">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#2F6271" }}>
              How We Operate
            </p>
            <h2
              className="text-4xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-5 rounded-2xl"
                style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1618" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#4F6F1618" }}
                >
                  <value.icon size={18} style={{ color: "#4F6F16" }} aria-hidden="true" />
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5C5C5C" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="Come be our guest"
        subheading="We'd love to share Minnesota's lakes with you. Browse the property details or jump straight into booking."
        buttonLabel="Browse Our Properties"
        buttonHref="/properties"
        secondaryLabel="Book Now"
        secondaryHref="/properties/pickerel-lake-retreat#booking"
      />
    </>
  );
}
