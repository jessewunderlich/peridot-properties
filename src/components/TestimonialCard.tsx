import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div
      className="p-6 rounded-2xl flex flex-col gap-4"
      style={{ backgroundColor: "#FAF8F5", border: "1px solid #4F6F1620", boxShadow: "0 2px 12px rgba(45,80,22,0.06)" }}
    >
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="#C8A951" style={{ color: "#C8A951" }} aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className="text-base leading-relaxed italic"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2C2C2C", fontSize: "1.05rem" }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div>
        <p className="text-sm font-semibold" style={{ color: "#2D5016" }}>{author}</p>
        <p className="text-xs" style={{ color: "#2C2C2C60" }}>{location}</p>
      </div>
    </div>
  );
}
