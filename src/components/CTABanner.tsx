import Link from "next/link";

interface CTABannerProps {
  heading: string;
  subheading?: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  heading,
  subheading,
  buttonLabel,
  buttonHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(135deg, #2D5016 0%, #4A7C8C 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl font-semibold mb-3"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
        >
          {heading}
        </h2>
        {subheading && (
          <p className="text-base mb-8" style={{ color: "#FAF8F5CC" }}>
            {subheading}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "#C8A951", color: "#2D5016" }}
          >
            {buttonLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-block px-8 py-3 rounded-full text-sm font-semibold border transition-all hover:bg-white/10"
              style={{ borderColor: "#FAF8F560", color: "#FAF8F5" }}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
