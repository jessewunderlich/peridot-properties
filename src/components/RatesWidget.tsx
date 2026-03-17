"use client";

import { useEffect } from "react";
import { DollarSign } from "lucide-react";
import Script from "next/script";

export default function RatesWidget() {
  useEffect(() => {
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
    >
      {/* Widget header */}
      <div
        className="px-6 py-5 flex items-center gap-3"
        style={{ background: "linear-gradient(135deg, #2D5016 0%, #4A7C8C 100%)" }}
      >
        <DollarSign size={22} style={{ color: "#C8A951" }} aria-hidden="true" />
        <div>
          <h3
            className="text-lg font-semibold"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
          >
            Current Rates
          </h3>
          <p className="text-xs" style={{ color: "#FAF8F580" }}>
            Live seasonal pricing — always up to date
          </p>
        </div>
      </div>

      {/* OwnerRez Rates Widget */}
      <div className="p-6" style={{ backgroundColor: "#FAF8F5" }}>
        <div
          className="ownerrez-widget"
          data-propertyid="7793e94b1f944ec0844bf19d1afd63aa"
          data-widget-type="Peridot Properties Rates Widget - Rates"
          data-widgetid="46d17202101a446382ebdffa390b5cdb"
        ></div>

        <Script
          src="https://app.ownerrez.com/widget.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
