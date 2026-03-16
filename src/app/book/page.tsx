import type { Metadata } from "next";
import { DollarSign, Shield, MessageCircle, Clock, CheckCircle, Sun, Leaf, Snowflake, Bird } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book Now | Peridot Properties — Pickerel Lake, MN",
  description:
    "Book your Pickerel Lake vacation rental directly with Charlotte and save 10–15%. Check availability, view seasonal pricing, and send a booking inquiry.",
  openGraph: {
    title: "Book Now | Peridot Properties",
    description:
      "Book direct and save 10–15% on your Pickerel Lake vacation. Flexible cancellation, personal host service, and the best rates guaranteed.",
  },
};

const pricingSeasons = [
  {
    icon: Sun,
    season: "Peak Summer",
    dates: "June – August",
    rate: "$300 – $400",
    unit: "per night",
    note: "Minimum 3-night stay on weekends",
    color: "#C8A951",
  },
  {
    icon: Leaf,
    season: "Shoulder Season",
    dates: "May, September & October",
    rate: "$200 – $275",
    unit: "per night",
    note: "2-night minimum most weekends",
    color: "#8B6914",
  },
  {
    icon: Snowflake,
    season: "Winter",
    dates: "November – March",
    rate: "$150 – $250",
    unit: "per night",
    note: "Ice fishing weekends book fast!",
    color: "#4A7C8C",
  },
  {
    icon: Bird,
    season: "Spring",
    dates: "April – May",
    rate: "$175 – $250",
    unit: "per night",
    note: "Walleye opener weekend premium applies",
    color: "#6B8E23",
  },
];

const directBookingBenefits = [
  {
    icon: DollarSign,
    title: "Save 10–15%",
    description:
      "When you book directly with us, you avoid the service fees charged by Airbnb, VRBO, and other platforms. That&apos;s real money back in your pocket.",
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
      "You&apos;re talking to Charlotte, not a call center. She knows the property, the lake, and the area. Have a question? You&apos;ll get a real answer fast.",
  },
  {
    icon: Clock,
    title: "Early Access to Dates",
    description:
      "Return guests and direct bookers often get first notice when new dates open up — especially around popular holidays and fishing openers.",
  },
  {
    icon: CheckCircle,
    title: "Guaranteed Best Rate",
    description:
      "We never offer lower rates through third-party platforms. Book direct and you always get the best price available.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: "linear-gradient(160deg, #2D5016 0%, #4A7C8C 100%)" }}
      >
        <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#C8A951" }}>
          Book Direct &amp; Save
        </p>
        <h1
          className="text-5xl sm:text-6xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
        >
          Book Your Stay
        </h1>
        <p className="text-base max-w-xl mx-auto" style={{ color: "#FAF8F5CC" }}>
          Reserve your Pickerel Lake escape directly with Charlotte.
          No platform fees, flexible cancellation, and personal service from someone who genuinely loves this lake.
        </p>
      </section>

      {/* ── Main booking layout ── */}
      <section className="py-14 px-4" aria-label="Booking information">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Booking widget */}
          <div>
            <BookingWidget />
          </div>

          {/* Pricing */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
              Seasonal Rates
            </p>
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Pricing Overview
            </h2>
            <div className="space-y-3">
              {pricingSeasons.map((ps) => (
                <div
                  key={ps.season}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2318" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${ps.color}20` }}
                  >
                    <ps.icon size={18} style={{ color: ps.color }} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-semibold" style={{ color: "#2D5016" }}>{ps.season}</span>
                      <span className="text-base font-bold" style={{ color: ps.color }}>{ps.rate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "#2C2C2C60" }}>{ps.dates}</span>
                      <span className="text-xs" style={{ color: "#2C2C2C60" }}>{ps.unit}</span>
                    </div>
                    <p className="text-xs mt-0.5 italic" style={{ color: "#2C2C2C50" }}>{ps.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs mt-4 leading-relaxed" style={{ color: "#2C2C2C60" }}>
              Rates are per night, not including applicable taxes. A cleaning fee applies.
              Exact pricing confirmed at booking. Holiday weekends may carry a premium.
            </p>
          </div>
        </div>
      </section>

      {/* ── Direct Booking Benefits ── */}
      <section className="py-14 px-4" style={{ backgroundColor: "#2D501608" }} aria-label="Benefits of booking direct">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
              Why Book Direct
            </p>
            <h2
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
            >
              Skip the middleman
            </h2>
            <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "#2C2C2C80" }}>
              Booking platforms take 12–20% in fees from every reservation. That money can stay with you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {directBookingBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-5 rounded-2xl"
                style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2318" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: "#6B8E2318" }}
                >
                  <benefit.icon size={18} style={{ color: "#6B8E23" }} aria-hidden="true" />
                </div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#2C2C2C80" }}
                  dangerouslySetInnerHTML={{ __html: benefit.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Inquiry Form ── */}
      <section className="py-14 px-4 max-w-3xl mx-auto" aria-label="Send a booking inquiry">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#4A7C8C" }}>
            Get In Touch
          </p>
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
          >
            Send Charlotte a message
          </h2>
          <p className="text-sm mt-3" style={{ color: "#2C2C2C80" }}>
            Questions, custom requests, or just want to check availability for specific dates?
            Fill out the form and Charlotte will be in touch within 24 hours.
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
