import Link from "next/link";
import { Calendar, Shield, DollarSign, Mail } from "lucide-react";

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

      {/* OwnerRez Widget */}
      <div className="p-6" style={{ backgroundColor: "#FAF8F5" }}>
        <div 
          className="ownerrez-widget" 
          data-propertyid="7793e94b1f944ec0844bf19d1afd63aa" 
          data-widget-type="Peridot Properties Booking Widget - Booking/Inquiry" 
          data-widgetid="071cf3a2907547cc8291b6b0aadbd058"
        ></div>
        <script src="https://app.ownerrez.com/widget.js" async></script>
      </div>
    </div>
  );
}
