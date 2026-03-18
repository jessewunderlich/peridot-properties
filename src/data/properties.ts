import {
  type LucideIcon,
  Wifi,
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
  Sun,
  Leaf,
  Snowflake,
  Bird,
  Map,
  ShoppingBag,
  Music,
  Camera,
  Bike,
  Crosshair,
} from "lucide-react";

export interface AmenityCategory {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export interface GalleryImage {
  url: string;
  id: number;
  alt: string;
}

export interface PricingSeason {
  season: string;
  icon: LucideIcon;
  dates: string;
  rate: string;
  unit: string;
  note: string;
  color: string;
}

export interface Distance {
  place: string;
  distance: string;
  note: string;
}

export interface Season {
  season: string;
  icon: LucideIcon;
  tagline: string;
  accentColor: string;
  bgColor: string;
  activities: { label: string }[];
}

export interface LakeInfoItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface NearbyAttraction {
  place: string;
  distance: string;
  icon: LucideIcon;
  highlights: string[];
}

export interface OutdoorHighlight {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Property {
  slug: string;
  name: string;
  tagline: string;
  comingSoon?: boolean;
  heroImage: string;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    county: string;
    lat: number;
    lng: number;
  };
  distances: Distance[];
  specs: {
    bedrooms: number;
    bathrooms: number;
    sleeps: number;
    maxOccupancy?: number;
    frontage: string;
  };
  description: string[];
  amenities: AmenityCategory[];
  houseRules: string[];
  pricing: PricingSeason[];
  priceRange: string;
  gallery: GalleryImage[];
  lake: {
    name: string;
    acres: number;
    maxDepth: number;
    fishSpecies: string[];
    description: string;
    info: LakeInfoItem[];
    fishingTips: string;
  };
  seasons: Season[];
  nearbyAttractions: NearbyAttraction[];
  outdoorHighlights: OutdoorHighlight[];
  testimonials: Testimonial[];
  jsonLd: object;
}

export const properties: Property[] = [
  {
    slug: "pickerel-lake-retreat",
    name: "Lakeside Luxe",
    tagline: "Your lakeside escape on Pickerel Lake",
    comingSoon: false,
    heroImage: "/images/pickerel-lake/hero-sunset.jpg",
    location: {
      address: "33746 N Pickerel Dr",
      city: "Richville",
      state: "MN",
      zip: "56576",
      county: "Otter Tail County",
      lat: 46.4985,
      lng: -95.1012,
    },
    distances: [
      { place: "Perham, MN", distance: "10 miles", note: "Grocery, restaurants, hardware" },
      { place: "Detroit Lakes, MN", distance: "~45 minutes", note: "Shopping, dining, entertainment" },
      { place: "Fergus Falls, MN", distance: "35 miles", note: "Full-service city" },
      { place: "Minneapolis, MN", distance: "~3 hours", note: "Via I-94 to US-10" },
      { place: "Fargo, ND", distance: "~1 hour 10 min", note: "Via I-94" },
      { place: "Brainerd, MN", distance: "~1 hour", note: "Via MN-210" },
    ],
    specs: {
      bedrooms: 5,
      bathrooms: 4,
      sleeps: 10,
      maxOccupancy: 12,
      frontage: "150ft",
    },
    description: [
      "Brand new and designed from the ground up with lake life in mind. The open-concept main floor captures lake views from every angle, with floor-to-ceiling windows in the living and dining areas that fill the space with natural light from morning through golden hour.",
      "The kitchen is a cook\u2019s dream \u2014 plenty of counter space, quality appliances, and a wide wraparound deck that runs the full width of the lake-facing side.",
      "Five bedrooms across three floors with beds for 10: the third floor hosts the master suite with a king bed, two queen bedrooms, and both a full shared bath and a 3/4 tile shower en-suite. The second floor has two twin bedrooms \u2014 perfect for kids \u2014 with a half bath. The ground-floor guest suite rounds it out with a king bed and its own 3/4 bath.",
      "Step outside to 150 feet of pristine Pickerel Lake frontage \u2014 a private dock, sandy swim area, fire pit, and three kayaks, two inflatable paddle boards, and a paddle boat that are yours to use all week.",
    ],
    amenities: [
      {
        category: "Kitchen",
        icon: Utensils,
        items: [
          "Full kitchen with quartz countertops",
          "Stainless steel appliances",
          "Drip coffee maker & French press",
          "Slow cooker",
          "Full set of dishes, pots & pans",
          "Outdoor propane grill",
        ],
      },
      {
        category: "Outdoor & Lake",
        icon: Waves,
        items: [
          "150ft of private lake frontage",
          "Private dock",
          "Sandy swim area",
          "Three kayaks",
          "Two inflatable paddle boards",
          "Paddle boat (seats up to 5)",
          "Life jackets for kids",
          "Fire pit with firewood provided",
        ],
      },
      {
        category: "Entertainment",
        icon: Tv,
        items: [
          '70" smart TV in living room',
          "Streaming apps (Netflix, Disney+)",
          "High-speed WiFi throughout",
          "Board games & card games",
          "Corn hole & lawn games",
          "Bluetooth speaker",
          "Books & magazines",
        ],
      },
      {
        category: "Comfort & Convenience",
        icon: Sofa,
        items: [
          "Central A/C & forced-air heat",
          "Washer & dryer in-unit",
          "Pack-n-play & Bumbo seats (2x) available",
          "Fresh linens & bath towels",
          "Beach towels for lake days",
          "Keypad entry \u2014 no key needed",
          "Off-street parking for up to 4 cars",
        ],
      },
    ],
    houseRules: [
      "Check-in: 4:00 PM | Check-out: 10:00 AM",
      "No smoking anywhere on the property",
      "No animals on the property \u2014 we maintain an allergen-free environment to accommodate all guests",
      "Maximum 12 people on the property at any time (beds for 10)",
      "Quiet hours 10 PM – 8 AM (neighbor-friendly lake)",
      "No parties or events beyond registered guests",
      "Leave firewood stacked neatly — we provide the first bundle",
      "Return boats/kayaks to the dock after use",
    ],
    pricing: [
      {
        season: "Summer",
        icon: Sun,
        dates: "June \u2013 August",
        rate: "$599 weekday / $699 weekend",
        unit: "per night",
        note: "4-night minimum \u2022 10% off 7+ nights \u2022 $395 cleaning fee",
        color: "#C8A951",
      },
      {
        season: "Off Season",
        icon: Snowflake,
        dates: "September \u2013 May",
        rate: "$299 weekday / $399 weekend",
        unit: "per night",
        note: "2-night minimum \u2022 20% off 7+ nights \u2022 $395 cleaning fee",
        color: "#4A7C8C",
      },
    ],
    priceRange: "From $299/night",
    gallery: [
      { id: 1, alt: "Stunning pink and purple sunset over Pickerel Lake", url: "/images/pickerel-lake/hero-sunset.jpg" },
      { id: 2, alt: "Golden sunset reflecting off Pickerel Lake", url: "/images/pickerel-lake/golden-sunset.jpg" },
      { id: 3, alt: "Aerial view of Pickerel Lake and surrounding homes", url: "/images/pickerel-lake/aerial-lake-view.jpg" },
      { id: 4, alt: "Aerial view of Pickerel Lake shoreline and docks", url: "/images/pickerel-lake/aerial-shoreline.jpg" },
      { id: 5, alt: "Pontoon boats gathered on Pickerel Lake at sunset", url: "/images/pickerel-lake/pontoon-gathering.jpg" },
      { id: 6, alt: "Water skis lined up on the dock — ready for lake days", url: "/images/pickerel-lake/water-skis.jpg" },
      { id: 7, alt: "Hazy sunrise over Pickerel Lake through the trees", url: "/images/pickerel-lake/hazy-sunrise.jpg" },
    ],
    lake: {
      name: "Pickerel Lake",
      acres: 829,
      maxDepth: 78,
      fishSpecies: ["Walleye", "Smallmouth Bass", "Northern Pike"],
      description:
        "Pickerel Lake sits in the heart of Otter Tail County, one of Minnesota's most celebrated lake regions. At nearly 830 acres with depths reaching 78 feet, it's a world-class fishery — walleye, smallmouth bass, northern pike — all within casting distance of your private dock.",
      info: [
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
            "A public boat launch is just minutes from the property on the south end of the lake. Our private dock is available for guest use.",
        },
        {
          icon: Wind,
          title: "Swimming & Water Sports",
          description:
            "The sandy swim area in front of the property is perfect for kids and adults alike. Water temps reach the mid-70s by July — ideal for tubing, wakeboarding, and swimming.",
        },
      ],
      fishingTips:
        "Our guests consistently have the best luck trolling the weedline on the northwest shore for walleye. Early morning (5–8 AM) and the two hours before sunset are magical. For bass, work the rocky points on the east side. A Minnesota fishing license is required and available at the Perham bait shop — they'll also give you the latest scoop on what's been hitting.",
    },
    seasons: [
      {
        season: "Summer",
        icon: Sun,
        tagline: "June through August",
        accentColor: "#C8A951",
        bgColor: "#FAF8F5",
        activities: [
          { label: "Walleye & smallmouth bass fishing" },
          { label: "Swimming off the private dock" },
          { label: "Kayaking & paddle boarding the shoreline" },
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
          { label: "Cozy nights by the fire pit" },
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
    ],
    nearbyAttractions: [
      {
        place: "Perham, MN",
        distance: "10 miles",
        icon: Map,
        highlights: [
          "1894, Lakes Cafe, Disgruntled Brewing, Brew, Nest",
          "Perham Wetlands trail system",
          "Gene's Sport Shop for bait & tackle",
          "Turtle Fest (annual June festival)",
          "Perham Cinema for rainy days",
        ],
      },
      {
        place: "Detroit Lakes, MN",
        distance: "~45 minutes",
        icon: Coffee,
        highlights: [
          "The Fireside, Brygge Taps & Taste, Spanky's Stone Hearth",
          "WE Fest country music festival (August)",
          "Baxstar Outdoors pontoon rentals",
          "Shopping downtown & on Hwy 10",
          "Becker County Museum",
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
        distance: "~45 minutes",
        icon: Music,
        highlights: [
          "Turkey River canoe route",
          "Pelican Falls State Wayside",
          "World's Largest Pelican statue (really)",
          "Mill Pond Park & hiking",
          "Small-town Minnesota charm",
        ],
      },
    ],
    outdoorHighlights: [
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
    ],
    testimonials: [],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "VacationRental",
      name: "Peridot Properties — Lakeside Luxe",
      description:
        "New-build 5-bedroom vacation home on Pickerel Lake with 150ft of private lake frontage. Sleeps 12. Located at 33746 N Pickerel Dr, Richville, MN 56576.",
      url: "https://peridot.properties/properties/pickerel-lake-retreat",
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
        latitude: "46.4985",
        longitude: "-95.1012",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Lake frontage", value: "150 feet" },
        { "@type": "LocationFeatureSpecification", name: "Bedrooms", value: "5" },
        { "@type": "LocationFeatureSpecification", name: "Bathrooms", value: "4" },
        { "@type": "LocationFeatureSpecification", name: "Maximum occupancy", value: "12" },
        { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Private dock", value: true },
      ],
      email: "charlotte@peridot.properties",
    },
  },
];

// Quick-lookup helpers
export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

// Convenience re-exports for the single spotlight property (used on homepage)
export const spotlightProperty = properties[0];

// Icons used on quick-highlights strip (shared between home + property pages)
export { BedDouble, ShowerHead, Layers, Wifi, Car };
