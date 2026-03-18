"use client";

import { useEffect } from "react";


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
      className="or-rates-wrapper rounded-2xl overflow-hidden"
      style={{ border: "1px solid #6B8E2325", boxShadow: "0 4px 24px rgba(45,80,22,0.10)", backgroundColor: "#FAF8F5" }}
    >
      <div className="p-6">
        <div
          className="ownerrez-widget"
          data-propertyid="7793e94b1f944ec0844bf19d1afd63aa"
          data-widget-type="Peridot Properties Rates Widget - Rates"
          data-widgetid="46d17202101a446382ebdffa390b5cdb"
        ></div>
      </div>
    </div>
  );
}
