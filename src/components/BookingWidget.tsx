"use client";

import { useEffect } from "react";
import { Calendar } from "lucide-react";
import Script from "next/script";

export default function BookingWidget() {
  useEffect(() => {
    // If the widget script is already loaded and we just navigated back to this page,
    // we need to tell it to rescan the DOM and render the new widget container.
    // @ts-expect-error - OwnerRez is added to window by the widget script
    if (window.OwnerRez && typeof window.OwnerRez.loadDefaultWidgets === "function") {
      // @ts-expect-error - OwnerRez global
      window.OwnerRez.loadDefaultWidgets();
    }
  }, []);

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

      {/* OwnerRez Widgets */}
      <div className="p-6 space-y-8" style={{ backgroundColor: "#FAF8F5" }}>
        
        {/* Availability Calendar */}
        <div 
          className="ownerrez-widget" 
          data-propertyid="7793e94b1f944ec0844bf19d1afd63aa" 
          data-widget-type="Peridot Properties Availability Calendar - Multiple Month Calendar" 
          data-widgetid="b969355329d443b189781e9a90878e14"
        ></div>

        <hr style={{ borderColor: "#6B8E2320" }} />

        {/* Booking Form */}
        <div 
          className="ownerrez-widget" 
          data-propertyid="7793e94b1f944ec0844bf19d1afd63aa" 
          data-widget-type="Peridot Properties Booking Widget - Booking/Inquiry" 
          data-widgetid="071cf3a2907547cc8291b6b0aadbd058"
        ></div>

        <Script
          src="https://app.ownerrez.com/widget.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
