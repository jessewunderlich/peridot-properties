import Link from "next/link";
import { Calendar, Shield, DollarSign, Phone } from "lucide-react";

export default function BookingWidget() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid #6B8E2325", boxShadow: "0 4px 24px rgba(45,80,22,0.10)" }}
      data-ownerrez-widget="peridot-properties"
    >
      {/* Widget header */}
      <div
        className="px-6 py-5 flex items-center gap-3"
        style={{ background: "linear-gradient(135deg, #2D5016 0%, #4A7C8C 100%)" }}
      >
        <Calendar size={22} style={{ color: "#C8A951" }} aria-hidden="true" />
        <div>
          <h3
            className="text-lg font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
          >
            Check Availability
          </h3>
          <p className="text-xs" style={{ color: "#FAF8F580" }}>
            Real-time availability via OwnerRez
          </p>
        </div>
      </div>

      {/* Placeholder content */}
      <div className="p-6" style={{ backgroundColor: "#FAF8F5" }}>
        <div
          className="rounded-xl p-8 text-center mb-5"
          style={{ backgroundColor: "#6B8E2308", border: "2px dashed #6B8E2330" }}
        >
          <Calendar size={36} style={{ color: "#6B8E23" }} className="mx-auto mb-3" aria-hidden="true" />
          <p className="text-sm font-medium mb-1" style={{ color: "#2D5016" }}>
            OwnerRez Booking Widget
          </p>
          <p className="text-xs" style={{ color: "#2C2C2C60" }}>
            Live availability calendar and booking form will appear here once the OwnerRez integration is configured.
          </p>
        </div>

        <div className="space-y-3 mb-5">
          <div className="flex items-center justify-between text-sm py-2 border-b" style={{ borderColor: "#6B8E2315" }}>
            <span style={{ color: "#2C2C2C80" }}>Peak Summer (June–Aug)</span>
            <span className="font-semibold" style={{ color: "#2D5016" }}>$300–$400 / night</span>
          </div>
          <div className="flex items-center justify-between text-sm py-2 border-b" style={{ borderColor: "#6B8E2315" }}>
            <span style={{ color: "#2C2C2C80" }}>Shoulder Season</span>
            <span className="font-semibold" style={{ color: "#2D5016" }}>$200–$275 / night</span>
          </div>
          <div className="flex items-center justify-between text-sm py-2" >
            <span style={{ color: "#2C2C2C80" }}>Winter / Off-Season</span>
            <span className="font-semibold" style={{ color: "#2D5016" }}>$150–$250 / night</span>
          </div>
        </div>

        <div className="space-y-2 mb-5">
          {[
            { icon: Shield, text: "Flexible cancellation for direct bookings" },
            { icon: DollarSign, text: "Save 10–15% booking direct vs. OTAs" },
            { icon: Phone, text: "Personal host support — reach Charlotte directly" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-xs" style={{ color: "#2C2C2C" }}>
              <Icon size={13} style={{ color: "#6B8E23" }} aria-hidden="true" />
              {text}
            </div>
          ))}
        </div>

        <Link
          href="mailto:charlotte@peridot.properties?subject=Booking%20Inquiry"
          className="block w-full text-center py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
        >
          Send a Booking Inquiry
        </Link>
        <p className="text-center text-xs mt-3" style={{ color: "#2C2C2C50" }}>
          Or call / text Contact via email
        </p>
      </div>
    </div>
  );
}
