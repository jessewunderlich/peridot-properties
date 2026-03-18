import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Bed, Bath, Waves } from "lucide-react";

interface PropertyCardProps {
  name: string;
  location: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  sleeps: number;
  maxOccupancy?: number;
  lakeFrontage: string;
  imageUrl: string;
  href: string;
  priceRange?: string;
  comingSoon?: boolean;
}

export default function PropertyCard({
  name,
  location,
  description,
  bedrooms,
  bathrooms,
  sleeps,
  maxOccupancy,
  lakeFrontage,
  imageUrl,
  href,
  priceRange,
  comingSoon,
}: PropertyCardProps) {
  return (
    <article
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ border: "1px solid #6B8E2320", boxShadow: "0 4px 20px rgba(45,80,22,0.08)" }}
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${name} on ${location}`}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, 600px"
        />
        {comingSoon && (
          <span
            className="absolute top-3 right-3 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "#C8A951", color: "#2D5016" }}
          >
            Coming Soon
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1" style={{ backgroundColor: "#FAF8F5" }}>
        <div>
          <h3
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            {name}
          </h3>
          <p className="flex items-center gap-1 text-xs mt-1" style={{ color: "#4A7C8C" }}>
            <MapPin size={12} aria-hidden="true" />
            {location}
          </p>
        </div>
        <p className="text-sm leading-relaxed flex-1 line-clamp-3 sm:line-clamp-4" style={{ color: "#2C2C2C" }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-4 pt-2 border-t text-xs" style={{ borderColor: "#6B8E2315" }}>
          <span className="flex items-center gap-1" style={{ color: "#2C2C2C80" }}>
            <Bed size={13} aria-hidden="true" /> {bedrooms} bedrooms
          </span>
          <span className="flex items-center gap-1" style={{ color: "#2C2C2C80" }}>
            <Bath size={13} aria-hidden="true" /> {bathrooms} bathrooms
          </span>
          <span className="flex items-center gap-1" style={{ color: "#2C2C2C80" }}>
            <Users size={13} aria-hidden="true" /> {maxOccupancy ? `Beds for ${sleeps} · max ${maxOccupancy}` : `Sleeps ${sleeps}`}
          </span>
          <span className="flex items-center gap-1" style={{ color: "#2C2C2C80" }}>
            <Waves size={13} aria-hidden="true" /> {lakeFrontage} frontage
          </span>
        </div>
        {priceRange && (
          <p className="text-xs font-semibold" style={{ color: "#6B8E23" }}>
            {priceRange}
          </p>
        )}
        <Link
          href={href}
          className="mt-2 text-center py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
        >
          {comingSoon ? "Preview Property" : "View Property"}
        </Link>
      </div>
    </article>
  );
}
