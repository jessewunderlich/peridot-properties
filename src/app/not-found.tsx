import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-24 px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <Compass
        size={48}
        style={{ color: "#6B8E23" }}
        className="mb-6"
        aria-hidden="true"
      />
      <h1
        className="text-5xl font-semibold mb-4"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          color: "#2D5016",
        }}
      >
        Page Not Found
      </h1>
      <p className="text-sm mb-8 max-w-md" style={{ color: "#2C2C2C80" }}>
        Looks like you wandered off the trail. Let&apos;s get you back to the
        lake.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
        >
          Back to Home
        </Link>
        <Link
          href="/properties"
          className="px-6 py-3 rounded-full text-sm font-semibold border transition-all hover:opacity-80"
          style={{ borderColor: "#6B8E23", color: "#6B8E23" }}
        >
          Browse Properties
        </Link>
      </div>
    </section>
  );
}
