"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function StickyBookButton() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isPropertyPage = pathname.startsWith("/properties/") && pathname !== "/properties";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2"
      style={{
        background:
          "linear-gradient(to top, rgba(250,248,245,0.98), rgba(250,248,245,0.9), transparent)",
      }}
    >
      <Link
        href={isPropertyPage ? "#booking" : "/properties/pickerel-lake-retreat#booking"}
        className="block w-full text-center py-3.5 rounded-full text-sm font-semibold shadow-lg transition-all active:scale-95"
        style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
      >
        {isPropertyPage ? "Check Availability" : "Book Now"}
      </Link>
    </div>
  );
}
