"use client";

import { useEffect } from "react";


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
      className="or-booking-wrapper rounded-2xl overflow-hidden min-h-[500px]"
      style={{ border: "1px solid #4F6F1625", boxShadow: "0 4px 24px rgba(45,80,22,0.10)", backgroundColor: "#FAF8F5" }}
      data-ownerrez-widget="peridot-properties"
    >
      <div className="p-6 sm:p-8 space-y-8">
        
        {/* Availability Calendar */}
        <div>
          <p className="text-xs font-semibold tracking-wide uppercase mb-4" style={{ color: "#2F6271" }}>
            Availability
          </p>
          <div 
            className="ownerrez-widget" 
            data-propertyid="7793e94b1f944ec0844bf19d1afd63aa" 
            data-widget-type="Peridot Properties Single Month Calendar - Single Month Calendar" 
            data-widgetid="b68ab7b5c9d74f089140b6f1c3bb26fe"
          ></div>
        </div>

        <hr style={{ borderColor: "#4F6F1615" }} />

        {/* Booking Form */}
        <div>
          <p className="text-xs font-semibold tracking-wide uppercase mb-4" style={{ color: "#2F6271" }}>
            Reserve Your Stay
          </p>
          <div 
            className="ownerrez-widget" 
            data-propertyid="7793e94b1f944ec0844bf19d1afd63aa" 
            data-widget-type="Peridot Properties Booking Widget - Booking/Inquiry" 
            data-widgetid="071cf3a2907547cc8291b6b0aadbd058"
          ></div>
        </div>

      </div>
    </div>
  );
}
