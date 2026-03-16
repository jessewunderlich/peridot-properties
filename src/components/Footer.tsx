import Link from "next/link";
import { Gem, MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#2D5016", color: "#FAF8F5" }}
      className="mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Gem size={22} style={{ color: "#C8A951" }} aria-hidden="true" />
            <span
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF8F5" }}
            >
              Peridot Properties
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#FAF8F580" }}>
            Boutique vacation rentals managed personally by Charlotte Wunderlich.
            Handpicked lakeside stays in Minnesota&apos;s lake country.
          </p>
          {/* Social links — uncomment when accounts are created
          <div className="flex gap-3 mt-5">
            <a href="https://facebook.com/peridotproperties" target="_blank" rel="noopener noreferrer" aria-label="Peridot Properties on Facebook" className="p-2 rounded-full transition-colors hover:opacity-80" style={{ backgroundColor: "#6B8E2340" }}>
              <Facebook size={16} style={{ color: "#FAF8F5" }} aria-hidden="true" />
            </a>
            <a href="https://instagram.com/peridotproperties" target="_blank" rel="noopener noreferrer" aria-label="Peridot Properties on Instagram" className="p-2 rounded-full transition-colors hover:opacity-80" style={{ backgroundColor: "#6B8E2340" }}>
              <Instagram size={16} style={{ color: "#FAF8F5" }} aria-hidden="true" />
            </a>
          </div>
          */}
        </div>

        {/* Navigation */}
        <div>
          <h3
            className="text-base font-semibold mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#C8A951" }}
          >
            Explore
          </h3>
          <ul className="space-y-2" role="list">
            {[
              { href: "/", label: "Home" },
              { href: "/properties", label: "Properties" },
              { href: "/destinations", label: "Destinations" },
              { href: "/about", label: "About Us" },
              { href: "/book-direct", label: "Book Direct" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-gold"
                  style={{ color: "#FAF8F580" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-base font-semibold mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#C8A951" }}
          >
            Get In Touch
          </h3>
          <ul className="space-y-3" role="list">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#C8A951" }} aria-hidden="true" />
              <span className="text-sm" style={{ color: "#FAF8F580" }}>
                33746 N Pickerel Dr<br />
                Richville, MN 56576
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" style={{ color: "#C8A951" }} aria-hidden="true" />
              <a
                href="mailto:charlotte@peridot.properties"
                className="text-sm transition-colors hover:text-gold"
                style={{ color: "#FAF8F580" }}
              >
                charlotte@peridot.properties
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" style={{ color: "#C8A951" }} aria-hidden="true" />
              <span className="text-sm" style={{ color: "#FAF8F580" }}>
                Phone number coming soon
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="border-t px-4 sm:px-6 lg:px-8 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
        style={{ borderColor: "#6B8E2340", color: "#FAF8F540" }}
      >
        <p>&copy; {new Date().getFullYear()} Peridot Properties. All rights reserved.</p>
        <p><Link href="/privacy" className="hover:underline">Privacy Policy</Link> &bull; Minnesota&apos;s Lake Country</p>
      </div>
    </footer>
  );
}
