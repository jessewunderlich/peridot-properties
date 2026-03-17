import type { Metadata } from "next";
import { Utensils, Music, Sailboat, Fish, ShoppingBag, Sparkles } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Local Guide | Peridot Properties",
  description:
    "Explore the best dining, events, and lake activities near Peridot Properties. Your guide to Minnesota's lake country.",
};

const guideSections = [
  {
    title: "Dining (Within 20 Min)",
    icon: Utensils,
    locations: [
      {
        area: "Perham (~10 mi)",
        places: [
          { name: "1894", desc: "Hand-patted burgers, housemade pizza, wings, tater tot hotdish. Happy hour daily 4-6 PM." },
          { name: "Lakes Cafe", desc: "Locally owned 25+ years, classic American cafe fare." },
          { name: "Disgruntled Brewing", desc: "Brewery atmosphere, top-rated in town." },
          { name: "Silver Moon Lounge & Steakhouse", desc: "Steaks, prime rib Fridays with meat raffles. Tue-Sat 11am-close, Sun 11am-8pm." },
          { name: "The Cactus", desc: "Steak, seafood, pasta, burgers, pizza, full bar." },
          { name: "Zorbaz (Perham)", desc: "Pizza, Mexican, outdoor seating, dog-friendly patio." },
        ],
      },
      {
        area: "Battle Lake (~15 mi)",
        places: [
          { name: "Zorbaz on Otter Tail Lake", desc: "Lakeside pizza bar, boat dock access, pick up food by boat, great margaritas." },
          { name: "The Rusty Nail", desc: "Family-owned burgers & beer bar." },
        ],
      },
      {
        area: "Detroit Lakes (~25-30 mi)",
        places: [
          { name: "The Fireside", desc: "Iconic northern MN dining, house-made food, open-air charcoal grill, lake views." },
          { name: "Brygge Taps & Taste", desc: "Craft beer, American cuisine." },
          { name: "Spanky's Stone Hearth", desc: "Prime steaks, fresh seafood, lakeside dining, stone fireplaces." },
          { name: "Lakeside Tavern & Brewery", desc: "Burgers, bar food, lakeside." },
        ],
      },
    ],
  },
  {
    title: "Events & Entertainment",
    icon: Music,
    note: "Charlotte can share the latest on bingo nights, karaoke, and street dances — just ask when you book!",
    items: [
      { name: "Silver Moon", desc: "Meat raffles on Prime Rib Fridays." },
      { name: "Zorbaz", desc: "Thursday trivia nights." },
      { name: "PACC (Perham Area Community Center)", desc: "Roller skating on select Saturdays." },
      { name: "Turtle Fest", desc: "Annual June festival in Perham." },
      { name: "Perham Area Chamber", desc: "Events calendar", url: "https://member.perham.com/events" },
    ],
  },
  {
    title: "Boat Rentals",
    icon: Sailboat,
    note: "Our property includes two kayaks and a canoe, but if you want motor power on the lake, these are our go-to rental companies.",
    items: [
      { name: "MN Tru North (Perham)", desc: "Pontoons starting at $375-400/day, also jetskis & kayaks.", url: "https://mntrunorth.com" },
      { name: "Baxstar Outdoors (Detroit Lakes area)", desc: "Premium pontoon rentals with HD digital mapping & fishing spots." },
    ],
  },
  {
    title: "Bait & Tackle",
    icon: Fish,
    note: "Pick up a Minnesota fishing license at any of these shops — they'll also give you the latest intel on what's hitting.",
    items: [
      { name: "Gene's Sport Shop", desc: "150 East Main St, Perham. Mon-Sat 7am-5:30pm, Sun 8am-2pm. Pro staff for advice." },
      { name: "North Side Bait & Tackle", desc: "448 1st Ave N, Perham." },
      { name: "Sport Shop Bait & Tackle", desc: "Perham." },
    ],
  },
  {
    title: "Groceries & Essentials",
    icon: ShoppingBag,
    items: [
      { name: "The Market at Perham", desc: "250 E Main St, open 7am-9pm daily. Produce, bakery, meat departments." },
      { name: "Family Dollar", desc: "102 Market Dr, Perham. 8am-10pm daily." },
    ],
  },
  {
    title: "Pre-Arrival Services (Add-Ons)",
    icon: Sparkles,
    items: [
      { name: "Grocery & Beverage Pre-Stocking", desc: "Want cold drinks waiting in the fridge when you arrive? Send Charlotte your shopping list and we'll have everything ready for you. Starting at $50 for the service plus the cost of items." },
    ],
  },
];

export default function LocalGuidePage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)" }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8A951" }}>
          Live like a local
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
        >
          Area Guide
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "#FAF8F5CC" }}>
          The best dining, events, and lake activities near our properties.
        </p>
      </section>

      {/* ── Guide Content ── */}
      <section className="py-16 px-4 max-w-4xl mx-auto" aria-label="Local recommendations">
        <div className="flex flex-col gap-12">
          {guideSections.map((section) => (
            <div key={section.title} className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-10 border border-[#6B8E2320]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#6B8E2315]">
                  <section.icon size={24} className="text-[#6B8E23]" aria-hidden="true" />
                </div>
                <h2
                  className="text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                >
                  {section.title}
                </h2>
              </div>
              
              {section.note && (
                <p className="text-sm italic mb-6 text-[#2C2C2C80]">
                  {section.note}
                </p>
              )}

              {section.locations ? (
                <div className="space-y-8">
                  {section.locations.map((loc) => (
                    <div key={loc.area}>
                      <h3 className="text-lg font-semibold text-[#4A7C8C] mb-3">
                        {loc.area}
                      </h3>
                      <ul className="space-y-4">
                        {loc.places.map((place) => (
                          <li key={place.name} className="text-sm">
                            <span className="font-semibold text-[#2C2C2C] block mb-1">
                              {place.name}
                            </span>
                            <span className="text-[#2C2C2C90]">
                              {place.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-4">
                  {section.items?.map((item) => (
                    <li key={item.name} className="text-sm">
                      <span className="font-semibold text-[#2C2C2C] block mb-1">
                        {item.name}
                      </span>
                      <span className="text-[#2C2C2C90]">
                        {item.desc}
                      </span>
                      {"url" in item && item.url && (
                        <>
                          {" "}
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs underline underline-offset-2 hover:opacity-70"
                            style={{ color: "#6B8E23" }}
                          >
                            Visit website &rarr;
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        heading="Ready to experience the lake life?"
        subheading="Book your family's next escape direct and save."
        buttonLabel="Browse Properties"
        buttonHref="/properties"
        secondaryLabel="Contact Charlotte"
        secondaryHref="/book-direct#contact"
      />
    </>
  );
}