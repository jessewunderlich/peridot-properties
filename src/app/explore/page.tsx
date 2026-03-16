import type { Metadata } from "next";
import {
  Sun,
  Leaf,
  Snowflake,
  Bird,
  Fish,
  Sailboat,
  Waves,
  TreePine,
  Camera,
  Crosshair,
  Wind,
  Map,
  Coffee,
  ShoppingBag,
  Music,
  Bike,
} from "lucide-react";
import SeasonCard from "@/components/SeasonCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Things To Do | Peridot Properties — Pickerel Lake, MN",
  description:
    "Discover year-round activities near Pickerel Lake — walleye fishing, water sports, fall foliage, ice fishing, birding, and day trips to Perham & Detroit Lakes.",
  openGraph: {
    title: "Things To Do Near Pickerel Lake | Peridot Properties",
    description:
      "From walleye fishing to winter ice fishing and fall foliage drives — Pickerel Lake has something for every season.",
  },
};

const seasons = [
  {
    season: "Summer",
    icon: Sun,
    tagline: "June through August",
    accentColor: "#C8A951",
    bgColor: "#FAF8F5",
    activities: [
      { label: "Walleye & smallmouth bass fishing" },
      { label: "Swimming off the private dock" },
      { label: "Kayaking & canoeing the shoreline" },
      { label: "Pontoon boat rentals (nearby marinas)" },
      { label: "Tubing & water skiing" },
      { label: "Evening campfire & s'mores" },
      { label: "Sunset boat rides" },
      { label: "Watching for bald eagles & osprey" },
    ],
  },
  {
    season: "Fall",
    icon: Leaf,
    tagline: "September through November",
    accentColor: "#8B4513",
    bgColor: "#FAF8F5",
    activities: [
      { label: "Peak fall color drives (mid-Oct)" },
      { label: "Grouse & pheasant hunting" },
      { label: "Duck & goose hunting" },
      { label: "Deer hunting season opener" },
      { label: "Walleye fishing in cool water" },
      { label: "Perham's fall festivals" },
      { label: "Stargazing (low light pollution)" },
      { label: "Northern lights viewing" },
    ],
  },
  {
    season: "Winter",
    icon: Snowflake,
    tagline: "December through February",
    accentColor: "#4A7C8C",
    bgColor: "#FAF8F5",
    activities: [
      { label: "Ice fishing for walleye & pike" },
      { label: "Cross-country skiing nearby" },
      { label: "Snowmobiling on groomed trails" },
      { label: "Snowshoeing through the forest" },
      { label: "Cozy nights by the fireplace" },
      { label: "Northern lights (best in winter)" },
      { label: "Ice skating on the bay" },
      { label: "Perham's Winter Jubilee events" },
    ],
  },
  {
    season: "Spring",
    icon: Bird,
    tagline: "March through May",
    accentColor: "#6B8E23",
    bgColor: "#FAF8F5",
    activities: [
      { label: "Bird migration & birding" },
      { label: "Loon watching (nesting season)" },
      { label: "Walleye opener (May)" },
      { label: "Wildflower hikes" },
      { label: "Paddling quiet bays & inlets" },
      { label: "Turkey hunting season" },
      { label: "Uncrowded lake days" },
      { label: "Watching the ice go out" },
    ],
  },
];

const lakeInfo = [
  {
    icon: Fish,
    title: "World-Class Walleye",
    description:
      "Pickerel Lake is renowned throughout Otter Tail County for its walleye population. Early morning and late evening are prime times. Bring jigs, nightcrawlers, and minnows.",
  },
  {
    icon: Waves,
    title: "Smallmouth Bass",
    description:
      "The rocky points and submerged structure hold excellent smallmouth bass. Topwater action in summer evenings is absolutely thrilling.",
  },
  {
    icon: Sailboat,
    title: "Boat Launch",
    description:
      "A public boat launch is just minutes from the property on the south end of the lake. Our dock accommodates boats up to 24ft with the boat lift.",
  },
  {
    icon: Wind,
    title: "Swimming & Water Sports",
    description:
      "The sandy swim area in front of the property is perfect for kids and adults alike. Water temps reach the mid-70s by July — ideal for tubing, wakeboarding, and swimming.",
  },
];

const nearbyAttractions = [
  {
    place: "Perham, MN",
    distance: "10 miles",
    icon: Map,
    highlights: [
      "Minnesota's Only Toy Town (great for kids)",
      "Perham Wetlands trail system",
      "East Otter Tail County Fair (August)",
      "Local restaurants: Hwy 55 Diner, The Rusty Nail Roadhouse",
      "Perham Cinema for rainy days",
    ],
  },
  {
    place: "Detroit Lakes, MN",
    distance: "25–30 miles",
    icon: Coffee,
    highlights: [
      "WE Fest country music festival (August)",
      "Becker County Museum",
      "Detroit Lakes Wetland Management District",
      "Shopping downtown & on Hwy 10",
      "Lakes Area Brew Pub & local dining",
    ],
  },
  {
    place: "Fergus Falls, MN",
    distance: "35 miles",
    icon: ShoppingBag,
    highlights: [
      "Otter Tail County Historical Museum",
      "Pebble Lake Golf Club",
      "Tennyson's Coffee & local cafes",
      "Lincoln Park & the Otter Tail River",
      "Full shopping & grocery options",
    ],
  },
  {
    place: "Pelican Rapids, MN",
    distance: "20 miles",
    icon: Music,
    highlights: [
      "Turkey River canoe route",
      "Pelican Falls State Wayside",
      "World's Largest Pelican statue (really)",
      "Mill Pond Park & hiking",
      "Small-town Minnesota charm",
    ],
  },
];

export default function ExplorePage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)" }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8A951" }}>
          Year-Round Adventure
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
        >
          Things To Do
        </h1>
        <p className="text-base max-w-2xl mx-auto" style={{ color: "#FAF8F5CC" }}>
          Pickerel Lake and the surrounding Otter Tail County region offer something for every season —
          from walleye fishing at sunrise to northern lights at midnight in January.
        </p>
      </section>

      {/* ── Seasonal Activities ── */}
      <section className="py-16 px-4 max-w-6xl mx-auto" aria-label="Seasonal activities">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
            Every Season Has Its Magic
          </p>
          <h2
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            A lake for all seasons
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {seasons.map((season) => (
            <SeasonCard key={season.season} {...season} />
          ))}
        </div>
      </section>

      {/* ── Lake Info ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2D501608" }} aria-label="About Pickerel Lake">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
              The Lake
            </p>
            <h2
              className="text-4xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Pickerel Lake at a Glance
            </h2>
            <p className="text-sm mt-3 max-w-2xl mx-auto" style={{ color: "#2C2C2C80" }}>
              829 acres &bull; Maximum depth 78 feet &bull; Crystal-clear water &bull; Otter Tail County, MN
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {lakeInfo.map((info) => (
              <div
                key={info.title}
                className="flex gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2318" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#6B8E2318" }}
                >
                  <info.icon size={20} style={{ color: "#6B8E23" }} aria-hidden="true" />
                </div>
                <div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                  >
                    {info.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C80" }}>
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fishing tips callout */}
          <div
            className="mt-8 p-6 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #2D5016 0%, #4A7C8C 100%)" }}
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
                  &ldquo;Our guests consistently have the best luck trolling the weedline on the northwest shore for walleye.
                  Early morning (5–8 AM) and the two hours before sunset are magical. For bass, work the rocky points on the east side.
                  A Minnesota fishing license is required and available at the Perham bait shop — they&apos;ll also give you the
                  latest scoop on what&apos;s been hitting.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nearby Attractions ── */}
      <section className="py-16 px-4 max-w-6xl mx-auto" aria-label="Nearby towns and attractions">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
            Beyond the Lake
          </p>
          <h2
            className="text-4xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            Explore the area
          </h2>
          <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#2C2C2C80" }}>
            When you want to venture off the dock, the surrounding towns have plenty to offer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {nearbyAttractions.map((attraction) => (
            <div
              key={attraction.place}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2318" }}
            >
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ backgroundColor: "#6B8E2310" }}
              >
                <attraction.icon size={18} style={{ color: "#6B8E23" }} aria-hidden="true" />
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
          ))}
        </div>
      </section>

      {/* ── Outdoor highlights ── */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2D501608" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Camera,
              title: "Photography & Stargazing",
              desc: "Otter Tail County has minimal light pollution, making it one of the best regions in the Midwest for stargazing and northern lights photography. Clear nights from November through March offer the best chances.",
            },
            {
              icon: Bike,
              title: "Trails & Biking",
              desc: "The Prairie Wetlands Trail near Fergus Falls and the Heartland State Trail connecting Perham to Park Rapids offer excellent cycling and hiking through classic MN lake country.",
            },
            {
              icon: TreePine,
              title: "State Parks Nearby",
              desc: "Maplewood State Park (30 min) features pristine maple forests with stunning fall colors, hiking, and horse trails. Mille Lacs Kathio State Park is a beautiful 90-minute drive.",
            },
            {
              icon: Crosshair,
              title: "Hunting",
              desc: "The region is exceptional for waterfowl (ducks & geese), pheasant, grouse, deer, and turkey. Public land nearby and local outfitters can connect you with guides and access.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl flex flex-col gap-3"
              style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2318" }}
            >
              <item.icon size={22} style={{ color: "#6B8E23" }} aria-hidden="true" />
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C80" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="Ready to experience it for yourself?"
        subheading="Pick your season and book your spot on Pickerel Lake. Charlotte is here to help you plan the perfect trip."
        buttonLabel="Book Your Stay"
        buttonHref="/book"
        secondaryLabel="View the Property"
        secondaryHref="/property"
      />
    </>
  );
}
