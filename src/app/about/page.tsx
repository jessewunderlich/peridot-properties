import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Gem, MapPin, Users, Star, Leaf } from "lucide-react";
import PeridotGem from "@/components/PeridotGem";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About | Peridot Properties — Charlotte Wunderlich",
  description:
    "Meet Charlotte Wunderlich, owner of Peridot Properties. Learn why we fell in love with Minnesota's lake country and why we named our vacation rental after a gemstone.",
  openGraph: {
    title: "About Peridot Properties | Charlotte Wunderlich",
    description:
      "A family-run vacation rental company in Minnesota's lake country. Meet Charlotte and learn the story behind Peridot Properties.",
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
      "This home was designed with families in mind — kids, grandparents, the whole crew. We've thought about every detail from the bunk room to the life jackets.",
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
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)" }}
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
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
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
                I grew up spending summers at a small cabin in northern Minnesota, and those memories
                shaped everything about how I think a lake vacation should feel &mdash; unhurried, warm,
                a little bit wild, and fully disconnected from the everyday.
              </p>
              <p>
                When my family found our first lakefront property, we knew immediately it was something special.
                The water was deep and clear, the fish were plentiful, and the sunsets were genuinely
                jaw-dropping. We built the house we always dreamed of staying in &mdash;
                and then decided to share it. Now we&apos;re expanding across
                Minnesota&apos;s lake country, one carefully chosen property at a time.
              </p>
              <p>
                I handle every booking personally. When you reach out, you&apos;re talking to me &mdash; not a
                property manager, not a virtual assistant. I know our properties inside and out &mdash;
                from the best fishing spots to the nearest Friday fish fry.
              </p>
              <p>
                I hope our lakes become your place the way they became ours.
              </p>
              <p className="font-medium" style={{ color: "#2D5016" }}>
                &mdash; Charlotte Wunderlich
              </p>
            </div>
          </div>
          <div
            className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden"
            style={{ border: "1px solid #6B8E2315" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop"
              alt="Charlotte Wunderlich, owner and host at Peridot Properties"
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
            </div>
          </div>
        </div>
      </section>

      {/* ── The Peridot Name ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2D501608" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            className="p-8 rounded-2xl flex flex-col items-center text-center"
            style={{ background: "linear-gradient(135deg, #6B8E2315, #C8A95115)", border: "1px solid #6B8E2320" }}
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
              style={{ background: "radial-gradient(circle at 35% 35%, #a8c45a, #6B8E23, #4a6318)" }}
              aria-label="Peridot gemstone color swatch"
            />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
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
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
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
            style={{ border: "1px solid #6B8E2315" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700&h=500&fit=crop"
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
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
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
                style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2318" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#6B8E2318" }}
                >
                  <value.icon size={18} style={{ color: "#6B8E23" }} aria-hidden="true" />
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#2C2C2C80" }}
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
        subheading="We'd love to share Minnesota's lakes with you. Reach out anytime — Charlotte is always happy to chat about our properties, the area, or help you plan your trip."
        buttonLabel="Browse Our Properties"
        buttonHref="/properties"
        secondaryLabel="Contact Charlotte"
        secondaryHref="/book-direct#contact"
      />
    </>
  );
}
