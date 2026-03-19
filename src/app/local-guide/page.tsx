import type { Metadata } from "next";
import Image from "next/image";
import { Utensils, Music, Sailboat, Fish, ShoppingBag, Sparkles, TreePine, Bike, Map, MapPin } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Local Guide",
  description:
    "Your insider guide to dining, fishing, boat rentals, events, and activities near our lakefront vacation rentals in Minnesota's Otter Tail County.",
  alternates: { canonical: "/local-guide" },
  openGraph: {
    title: "Local Guide | Peridot Properties",
    description: "Dining, fishing, boat rentals, events, and activities near Pickerel Lake in Otter Tail County, MN.",
    url: "https://peridot.properties/local-guide",
    images: [{ url: "https://peridot.properties/images/pickerel-lake/aerial-lake-view.jpg", width: 1200, height: 800, alt: "Aerial view of Otter Tail County lake country" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Guide | Peridot Properties",
    description: "Dining, fishing, boat rentals, events, and activities near Pickerel Lake.",
    images: ["https://peridot.properties/images/pickerel-lake/aerial-lake-view.jpg"],
  },
};

const guideSections = [
  {
    title: "Dining",
    icon: Utensils,
    note: "Charlotte’s personal picks. Ask her what to order when you book — she has strong opinions.",
    locations: [
      {
        area: "Perham (~15 min)",
        places: [
          { name: "1894", desc: "Hand-patted burgers, housemade pizza, wings, tater tot hotdish. Happy hour daily 4\u20136 PM. Top-rated in town." },
          { name: "Brew Ales & Eats", desc: "American bar & grill with a big menu. 4.3 stars, 149 reviews. Solid go-to for families." },
          { name: "Lakes Cafe", desc: "Locally owned 25+ years. Classic American cafe — the kind of place where regulars know your name." },
          { name: "Disgruntled Brewing", desc: "Brewery atmosphere with craft beer on tap. Great spot for a laid-back afternoon." },
          { name: "Brew", desc: "Local craft beer and casual bites. A great spot to unwind after a day on the lake." },
          { name: "The Cactus", desc: "Steak, seafood, pasta, burgers, pizza, full bar. Something for everyone." },
          { name: "Zorbaz (Perham)", desc: "Pizza, Mexican food, outdoor seating, dog-friendly patio. A lake country institution." },
          { name: "The Salty Pickle Bar & Grill", desc: "3 mi south on Hwy 78. Famous Salty Gouda Pickles, smash burgers, volleyball courts. Bingo Wed & Sun, karaoke nights, live music in summer." },
          { name: "Mrs B\u2019s Cafe", desc: "Cozy American cafe, 4.4 stars. Great for a quieter breakfast or lunch." },
          { name: "BluTaco", desc: "Mexican fare in Perham for when you want something different." },
          { name: "Pizza Ranch", desc: "Buffet-style pizza & chicken. Reliable family spot, kids love it." },
        ],
      },
      {
        area: "Battle Lake (~20 min)",
        places: [
          { name: "Zorbaz on Otter Tail Lake", desc: "THE lakeside pizza bar. Boat dock access \u2014 you can literally pick up food by boat. Great margaritas, outdoor patio on the water." },
          { name: "The Rusty Nail", desc: "Family-owned burgers & beer bar. Casual, friendly, good food." },
        ],
      },
      {
        area: "Detroit Lakes (~45 min)",
        places: [
          { name: "The Fireside", desc: "Iconic northern MN dining. House-made food, open-air charcoal grill, lake views. Worth the drive." },
          { name: "Brygge Taps & Taste", desc: "Craft beer selection with American cuisine in a modern taproom." },
          { name: "Spanky\u2019s Stone Hearth", desc: "Prime steaks, fresh seafood, lakeside dining with stone fireplaces. Date night worthy." },
          { name: "Lakeside Tavern & Brewery", desc: "Burgers, bar food, craft brews right on the lake." },
        ],
      },
      {
        area: "Fergus Falls (~40 min)",
        places: [
          { name: "Outstate Brewing Company", desc: "Craft brewery downtown on the Otter Tail River. Great taproom atmosphere." },
        ],
      },
    ],
  },
  {
    title: "Events & Entertainment",
    icon: Music,
    note: "Charlotte always knows what\u2019s happening this weekend \u2014 ask her when you book and she\u2019ll share the latest.",
    items: [
      { name: "Nest", desc: "Cozy spot for coffee, brunch, and baked goods. Perfect morning stop." },
      { name: "The Salty Pickle", desc: "Bingo every Wednesday & Sunday. Karaoke nights. Horse races on Saturdays. Live outdoor shows in summer.", url: "https://thesaltypicklebarandgrill.com" },
      { name: "Zorbaz", desc: "Thursday trivia nights at multiple locations." },
      { name: "Turtle Fest (Perham)", desc: "June 17\u201321, 2026. Street fair, turtle races, parade, fireworks, 5K/10K, live music, food vendors. Downtown Perham." },
      { name: "WE Fest (Detroit Lakes)", desc: "August 5\u20138, 2026. Largest country music camping festival in the US. Headliners: Lainey Wilson, Thomas Rhett, Brooks & Dunn. 30,000+ fans nightly.", url: "https://wefest.com" },
      { name: "Oktoberfest Perham", desc: "Fall festival with hayrides, pumpkin carving, crafts, kids\u2019 activities, vendor street fair." },
      { name: "PACC (Perham Area Community Center)", desc: "Roller skating on select Saturdays. Newly renovated facility." },
      { name: "Perham Area Chamber Events", desc: "Full community calendar with weekly events.", url: "https://member.perham.com/events" },
    ],
  },
  {
    title: "Outdoor Activities",
    icon: TreePine,
    items: [
      { name: "Maplewood State Park (~25 min)", desc: "25 mi of hiking trails, 8 lakes, sandy beach at South Lida Lake, horseback trails, camping. Hallaway Hill overlook is a must. 5-mile scenic auto tour. 150 bird species. Vehicle permit required.", url: "https://www.dnr.state.mn.us/state_parks/park.html?id=spk00225" },
      { name: "Perham Lakeside Golf Club", desc: "27 holes of championship golf (Maple, Oak, Pine courses). Driving range, putting greens. 1 mile north of Perham. Est. 1946.", url: "https://perhamlakesidegolf.com" },
      { name: "Thumper Pond Golf Club (~12 mi, Ottertail)", desc: "18 holes, par 72, 6,606 yards. The longest course in the area." },
      { name: "Frazee Golf Course (~15 min)", desc: "9 holes, par 35. Quick and affordable round." },
      { name: "ITOW Veterans Museum (Perham)", desc: "805 W Main St. Self-guided tours by donation. Tue\u2013Fri 10am\u20131pm (summer). Group tours $3/adults, $2/students. (218) 346-7678." },
      { name: "Pelican Rapids (~45 min)", desc: "World\u2019s Largest Pelican statue (15.5 ft), pelican sculpture scavenger hunt around town, Mercantile on Main art gallery, suspension bridge over Pelican River." },
      { name: "Thea\u2019s Pumpkin Patch (Pelican Rapids)", desc: "8-acre pumpkin patch + 11-acre corn maze. Apple cider donuts. Fall seasonal." },
    ],
  },
  {
    title: "Biking & Trails",
    icon: Bike,
    items: [
      { name: "Central Lakes State Trail", desc: "55-mile paved trail starting in Fergus Falls (~40 min). Flat, shaded, passes through 10 communities. Rest stops every 7\u201310 miles. Trailhead has parking, restrooms, and a bike repair station.", url: "https://www.dnr.state.mn.us/state_trails/central_lakes/index.html" },
      { name: "Heartland State Trail (Detroit Lakes)", desc: "7.5-mile paved segment south of Detroit Lakes. The main trail runs 49 mi from Park Rapids to Cass Lake." },
      { name: "Perham Wetlands Trail", desc: "In-town trail system through restored prairie and wetlands. Easy walk or bike." },
    ],
  },
  {
    title: "Boat Rentals",
    icon: Sailboat,
    note: "Our property includes three kayaks, two inflatable paddle boards, and a paddle boat, but if you want motor power on the lake, these are our go-to companies.",
    items: [
      { name: "MN Tru North (Perham)", desc: "Pontoons, jetskis, kayaks. Your closest rental option.", url: "https://mntrunorth.com" },
      { name: "Mark\u2019s Fleet Supply (Perham)", desc: "Water sports rentals starting at $30/4hrs, $45/8hrs." },
      { name: "Baxstar Outdoors (Detroit Lakes area)", desc: "Premium pontoon rentals with HD digital mapping & fishing spots." },
    ],
  },
  {
    title: "Fishing",
    icon: Fish,
    note: "You\u2019ll need a Minnesota fishing license. Non-resident options: $14/24hrs, $36/72hrs, $43/7 days, $51/annual. Buy online at the MN DNR site or pick one up at any bait shop.",
    items: [
      { name: "Gene\u2019s Sport Shop", desc: "150 East Main St, Perham. Mon\u2013Sat 7am\u20135:30pm, Sun 8am\u20132pm. Pro staff who\u2019ll tell you what\u2019s hitting and where." },
      { name: "North Side Bait & Tackle", desc: "448 1st Ave N, Perham. Convenient stop for live bait and tackle." },
      { name: "MN DNR Fishing Licenses", desc: "Buy your license online before you arrive \u2014 valid immediately.", url: "https://www.dnr.state.mn.us/licenses/online-sales.html" },
    ],
  },
  {
    title: "Groceries & Liquor",
    icon: ShoppingBag,
    items: [
      { name: "The Market at Perham", desc: "250 E Main St. Open 7am\u20139pm daily. Full produce, bakery, and meat departments. Your main grocery stop." },
      { name: "Landmark Liquors", desc: "125 2nd Ave NE, Perham. Mon\u2013Sat 9am\u201310pm. Wine, beer, spirits." },
      { name: "Perham Municipal Liquor Store", desc: "Mon\u2013Sat 9am\u201310pm. Wide selection." },
      { name: "Family Dollar", desc: "102 Market Dr, Perham. 8am\u201310pm daily. Basics and essentials." },
    ],
  },
  {
    title: "Day Trips",
    icon: Map,
    items: [
      { name: "Fergus Falls (~40 min)", desc: "Downtown shops on Lincoln Ave, Otto the Big Otter statue, Broken Down Dam Park, Otter Tail County Historical Museum, A Center for the Arts (restored 1921 vaudeville theater), Scenic River Walk." },
      { name: "Detroit Lakes (~45 min)", desc: "Beach on Detroit Lake, downtown shopping, WE Fest grounds, Heartland Trail biking, great restaurant scene." },
      { name: "Pelican Rapids (~45 min)", desc: "World\u2019s Largest Pelican, Maplewood State Park, suspension bridge, art galleries, antique mall (14,000 sq ft)." },
      { name: "Fargo, ND (~1 hr 10 min)", desc: "Full city amenities. Shopping, dining, Fargo\u2013Moorhead attractions. Easy drive via I-94." },
    ],
  },
  {
    title: "Pre-Arrival Services",
    icon: Sparkles,
    note: "Because vacation starts the moment you walk in the door.",
    items: [
      { name: "Grocery & Beverage Pre-Stocking", desc: "Want the fridge and pantry fully loaded when you arrive? Send Charlotte your shopping list and we\u2019ll have everything ready. $100 service fee plus the cost of items." },
    ],
  },
];

export default function LocalGuidePage() {
  return (
    <>
      {/* \u2500\u2500 Page Header \u2500\u2500 */}
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
          Everything you need to know about dining, fishing, activities, and local secrets near our properties in Otter Tail County.
        </p>
      </section>

      {/* ── The Region ── */}
      <section className="py-14 px-4 max-w-5xl mx-auto" aria-label="About the region">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid #6B8E2320" }}
        >
          <div className="relative h-56 sm:h-72">
            <Image
              src="/images/pickerel-lake/aerial-lake-view.jpg"
              alt="Otter Tail County lake landscape with forest and calm water"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 960px"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(45,80,22,0.8), transparent 60%)" }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={16} style={{ color: "#C8A951" }} aria-hidden="true" />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#C8A951" }}
                >
                  Otter Tail County, Minnesota
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-semibold"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
              >
                The Heart of Lake Country
              </h2>
            </div>
          </div>
          <div className="p-6 sm:p-8" style={{ backgroundColor: "#FAF8F5" }}>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#2C2C2C" }}>
              Home to over 1,000 lakes, Otter Tail County is the heart of Minnesota&apos;s lake country.
              World-class walleye fishing, pristine shorelines, and small-town charm define this region.
              Towns like Perham, Richville, and Pelican Rapids offer everything you need while keeping
              the pace slow and the water close.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "1,000+ lakes in one county",
                "World-class walleye & bass fishing",
                "Near Perham, Detroit Lakes & Fergus Falls",
                "Year-round activities: fishing, hunting, skiing, snowmobiling",
              ].map((h) => (
                <span
                  key={h}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "#6B8E2315", color: "#2D5016" }}
                >
                  <Fish size={12} aria-hidden="true" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Guide Content \u2500\u2500 */}
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

      {/* \u2500\u2500 CTA \u2500\u2500 */}
      <CTABanner
        heading="Ready to experience the lake life?"
        subheading="Browse the property details or jump straight into booking."
        buttonLabel="Browse Properties"
        buttonHref="/properties"
        secondaryLabel="Book Now"
        secondaryHref="/properties/pickerel-lake-retreat#booking"
      />
    </>
  );
}
