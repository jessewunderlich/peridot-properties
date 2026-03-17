import type { Metadata } from "next";
import Link from "next/link";
import {
  DollarSign,
  Shield,
  MessageCircle,
  Clock,
  CheckCircle,
  Calculator,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Book Direct & Save | Peridot Properties",
  description:
    "Save 10–15% when you book directly with Peridot Properties. No platform fees, flexible cancellation, and personal service from Charlotte.",
  openGraph: {
    title: "Book Direct & Save | Peridot Properties",
    description:
      "Skip the Airbnb fees. Book direct with Charlotte and save on your Minnesota lake vacation.",
  },
};

const benefits = [
  {
    icon: DollarSign,
    title: "Save 10–15%",
    description:
      "When you book directly with us, you avoid the service fees charged by Airbnb, VRBO, and other platforms. That's real money back in your pocket — $187–312 on a typical 5-night stay.",
  },
  {
    icon: Shield,
    title: "Flexible Cancellation",
    description:
      "Direct guests receive more generous cancellation terms. We understand plans change — especially with Minnesota weather.",
  },
  {
    icon: MessageCircle,
    title: "Personal Service",
    description:
      "You\u2019re emailing Charlotte, not a call center. She knows every corner of Lakeside Luxe and every local secret worth knowing.",
  },
  {
    icon: Clock,
    title: "Early Access to Dates",
    description:
      "Return guests and direct bookers get first notice when new dates open up — especially around popular holidays and fishing openers.",
  },
  {
    icon: CheckCircle,
    title: "Guaranteed Best Rate",
    description:
      "We never offer lower rates through third-party platforms. Book direct and you always get the best price available.",
  },
];

const comparisonRows = [
  { item: "Nightly rate (5 nights at $300)", direct: "$1,500", platform: "$1,500" },
  { item: "Guest service fee", direct: "$0", platform: "$210–300" },
  { item: "Cleaning fee", direct: "Included", platform: "$150–200" },
  { item: "Processing fee", direct: "$44", platform: "Hidden in service fee" },
  { item: "Total", direct: "$1,544", platform: "$1,860–2,000", highlight: true },
  { item: "Your savings", direct: "$316–456", platform: "—", highlight: true },
];

export default function BookDirectPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)" }}
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#C8A951" }}
        >
          Skip the Middleman
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#FAF8F5",
          }}
        >
          Book Direct & Save
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "#FAF8F5CC" }}>
          Booking platforms charge 14–20% in fees on every reservation. When you
          book directly with Peridot Properties, that money stays with you.
        </p>
      </section>

      {/* Fee Comparison */}
      <section className="py-14 px-4" aria-label="Fee comparison">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#6B8E2318" }}
            >
              <Calculator size={22} style={{ color: "#6B8E23" }} aria-hidden="true" />
            </div>
            <h2
              className="text-3xl font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#2D5016",
              }}
            >
              See the difference
            </h2>
            <p className="text-sm mt-2" style={{ color: "#2C2C2C80" }}>
              A typical 5-night summer stay at $300/night
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid #6B8E2320" }}
          >
            {/* Header */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-4 px-3 sm:px-5 py-3 text-xs font-semibold uppercase tracking-wide"
              style={{ backgroundColor: "#2D5016", color: "#FAF8F5" }}
            >
              <span />
              <span className="text-center">Direct</span>
              <span className="text-center">Airbnb/VRBO</span>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.item}
                className="grid grid-cols-3 gap-2 sm:gap-4 px-3 sm:px-5 py-3 text-xs sm:text-sm border-t"
                style={{
                  borderColor: "#6B8E2315",
                  backgroundColor: row.highlight ? "#6B8E2308" : "#FAF8F5",
                }}
              >
                <span
                  className={row.highlight ? "font-semibold" : ""}
                  style={{ color: "#2C2C2C" }}
                >
                  {row.item}
                </span>
                <span
                  className="text-center font-semibold"
                  style={{ color: "#6B8E23" }}
                >
                  {row.direct}
                </span>
                <span
                  className="text-center"
                  style={{ color: "#2C2C2C80" }}
                >
                  {row.platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="py-14 px-4"
        style={{ backgroundColor: "#2D501608" }}
        aria-label="Benefits of booking direct"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#4A7C8C" }}
            >
              Why Book Direct
            </p>
            <h2
              className="text-3xl font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#2D5016",
              }}
            >
              More than just savings
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-5 rounded-2xl"
                style={{
                  backgroundColor: "#FAF8F5",
                  border: "1px solid #6B8E2318",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#6B8E2318" }}
                >
                  <b.icon
                    size={18}
                    style={{ color: "#6B8E23" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    color: "#2D5016",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#2C2C2C80" }}
                >
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Properties CTA */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-semibold mb-4"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#2D5016",
            }}
          >
            Ready to find your stay?
          </h2>
          <p className="text-sm mb-8" style={{ color: "#2C2C2C80" }}>
            Lakeside Luxe is on Pickerel Lake in Richville, MN &mdash; Charlotte&apos;s
            favorite corner of Minnesota lake country.
          </p>
          <Link
            href="/properties"
            className="inline-block px-8 py-4 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
          >
            Browse Properties
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="py-14 px-4 max-w-3xl mx-auto"
        aria-label="Send a booking inquiry"
      >
        <div className="text-center mb-8">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#4A7C8C" }}
          >
            Get In Touch
          </p>
          <h2
            className="text-3xl font-semibold"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#2D5016",
            }}
          >
            Send Charlotte a message
          </h2>
          <p className="text-sm mt-3" style={{ color: "#2C2C2C80" }}>
            Questions about any of our properties? Fill out the form and
            Charlotte will be in touch within 24 hours.
          </p>
        </div>
        <ContactForm />
      </section>

      <CTABanner
        heading="Your perfect lake trip starts here"
        subheading="Browse our properties, pick your dates, and book direct for the best rate. Charlotte is always happy to help plan your trip."
        buttonLabel="Browse Properties"
        buttonHref="/properties"
        secondaryLabel="About Peridot Properties"
        secondaryHref="/about"
      />
    </>
  );
}
