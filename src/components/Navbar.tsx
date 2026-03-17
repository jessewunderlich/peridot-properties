"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import PeridotGem from "@/components/PeridotGem";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/destinations", label: "Destinations" },
  { href: "/local-guide", label: "Local Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/book-direct", label: "Book Direct" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "#FAF8F5",
        borderColor: "#6B8E2330",
        boxShadow: "0 1px 8px rgba(45,80,22,0.07)",
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Peridot Properties home">
          <PeridotGem
            size={24}
            className="group-hover:scale-110 transition-transform"
          />
          <span
            className="text-xl font-semibold tracking-wide"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#2D5016",
            }}
          >
            Peridot Properties
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.slice(0, -1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 rounded text-sm font-medium transition-colors hover:text-peridot"
                style={{ color: "#2C2C2C", fontFamily: "var(--font-inter), sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/book-direct"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:shadow-md"
              style={{
                backgroundColor: "#6B8E23",
                color: "#FAF8F5",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              Book Direct
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={22} style={{ color: "#2C2C2C" }} />
          ) : (
            <Menu size={22} style={{ color: "#2C2C2C" }} />
          )}
        </button>
      </nav>

      {/* Mobile menu + backdrop */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            className="md:hidden border-t px-4 pb-4 pt-2 relative z-50"
            style={{ backgroundColor: "#FAF8F5", borderColor: "#6B8E2330" }}
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded text-sm font-medium transition-colors hover:bg-peridot/10"
                    style={{ color: "#2C2C2C", fontFamily: "var(--font-inter), sans-serif" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
