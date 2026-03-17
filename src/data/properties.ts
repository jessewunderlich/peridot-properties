import {
  type LucideIcon,
  Wifi,
  Flame,
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
    heroImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=800&fit=crop",
    location: {
      address: "33746 N Pickerel Dr",
      city: "Richville",
      state: "MN",
      zip: "56576",
      county: "Otter Tail County",
      lat: 46.5,
      lng: -95.1,
    },
    distances: [
      { place: "Perham, MN", distance: "10 miles", note: "Grocery, restaurants, hardware" },
      { place: "Detroit Lakes, MN", distance: "25–30 miles", note: "Shopping, dining, entertainment" },
      { place: "Fergus Falls, MN", distance: "35 miles", note: "Full-service city" },
      { place: "Minneapolis, MN", distance: "~3 hours", note: "Via I-94 to US-10" },
      { place: "Fargo, ND", distance: "~45 minutes", note: "Via I-94" },
      { place: "Brainerd, MN", distance: "~1 hour", note: "Via MN-210" },
    ],
    specs: {
      bedrooms: 4,
      bathrooms: 2,
      sleeps: 10,
      frontage: "150ft",
    },
    description: [
      "Built new in 2023, this home was designed from the ground up with lake life in mind. The open-concept main floor captures lake views from every angle, with floor-to-ceiling windows in the living and dining areas that fill the space with natural light from morning through golden hour.",
      "The kitchen is a cook's dream — plenty of counter space, quality appliances, and a fish-cleaning station just outside the back door for those who are serious about their catch. A propane fireplace anchors the living room, and the wide wraparound deck runs the full width of the lake-facing side.",
      "Four bedrooms sleep up to 10 comfortably: a primary king suite, a second queen room, a queen flex room (or twin option), and a bunk room loved by kids (and adults who call dibs early). Two full bathrooms mean no morning bottlenecks.",
      "Step outside to 150 feet of pristine Pickerel Lake frontage — a private dock, sandy swim area, fire pit, and two kayaks plus a canoe that are yours to use all week.",
    ],
    amenities: [
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
          '65" smart TV in living room',
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
    ],
    houseRules: [
      "Check-in: 4:00 PM | Check-out: 10:00 AM",
      "No smoking anywhere on the property",
      "No pets allowed — we appreciate your understanding",
      "Maximum 10 guests overnight",
      "Quiet hours 10 PM – 8 AM (neighbor-friendly lake)",
      "No parties or events beyond registered guests",
      "Leave firewood stacked neatly — we provide the first bundle",
      "Return boats/kayaks to the dock after use",
    ],
    pricing: [
      {
        season: "Peak Summer",
        icon: Sun,
        dates: "June – August",
        rate: "$300 – $400",
        unit: "per night",
        note: "Minimum 3-night stay on weekends",
        color: "#C8A951",
      },
      {
        season: "Shoulder Season",
        icon: Leaf,
        dates: "May, September & October",
        rate: "$200 – $275",
        unit: "per night",
        note: "2-night minimum most weekends",
        color: "#8B6914",
      },
      {
        season: "Winter",
        icon: Snowflake,
        dates: "November – March",
        rate: "$150 – $250",
        unit: "per night",
        note: "Ice fishing weekends book fast!",
        color: "#4A7C8C",
      },
      {
        season: "Spring",
        icon: Bird,
        dates: "April – May",
        rate: "$175 – $250",
        unit: "per night",
        note: "Walleye opener weekend premium applies",
        color: "#6B8E23",
      },
    ],
    priceRange: "From $150/night",
    gallery: [
      { id: 1, alt: "Living room with lake views and stone fireplace", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" },
      { id: 2, alt: "Kitchen with quartz countertops and stainless appliances", url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop" },
      { id: 3, alt: "Primary bedroom with king bed and lake views", url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop" },
      { id: 4, alt: "Private dock and sandy beach on Pickerel Lake", url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&h=600&fit=crop" },
      { id: 5, alt: "Fire pit area with Adirondack chairs at sunset", url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&h=600&fit=crop" },
      { id: 6, alt: "Deck overlooking the lake with dining table", url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&h=600&fit=crop" },
      { id: 7, alt: "Bunk room with four bunks for kids", url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop" },
      { id: 8, alt: "Bathroom with walk-in shower and modern fixtures", url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop" },
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
            "A public boat launch is just minutes from the property on the south end of the lake. Our dock accommodates boats up to 24ft with the boat lift.",
        },
        {
          icon: Wind,
          title: "Swimming & Water Sports",
          description:
            "The sandy swim area in front of the property is perfect for kids and adults alike. Water temps reach the mid-70s by July — ideal for tubing, wakeboarding, and swimming.",
        },
      ],
      fishingTips:
        '"Our guests consistently have the best luck trolling the weedline on the northwest shore for walleye. Early morning (5–8 AM) and the two hours before sunset are magical. For bass, work the rocky points on the east side. A Minnesota fishing license is required and available at the Perham bait shop — they\'ll also give you the latest scoop on what\'s been hitting."',
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
    ],
    nearbyAttractions: [
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
    testimonials: [
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
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "VacationRental",
      name: "Peridot Properties — Lakeside Luxe",
      description:
        "New-build 4-bedroom vacation home on Pickerel Lake with 150ft of private lake frontage. Sleeps 10. Located at 33746 N Pickerel Dr, Richville, MN 56576.",
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
      // telephone: "+1XXXXXXXXXX",
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
export { BedDouble, ShowerHead, Layers, Wifi, Car, Flame };
