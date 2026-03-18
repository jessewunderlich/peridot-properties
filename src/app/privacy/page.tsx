import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Peridot Properties vacation rental website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h1
        className="text-4xl font-semibold mb-8"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          color: "#2D5016",
        }}
      >
        Privacy Policy
      </h1>
      <div
        className="space-y-6 text-sm leading-relaxed"
        style={{ color: "#2C2C2C" }}
      >
        <p>
          <strong>Last updated:</strong> March 2026
        </p>

        <h2
          className="text-xl font-semibold mt-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#2D5016",
          }}
        >
          Information We Collect
        </h2>
        <p>
          When you submit an inquiry through our booking widget (powered by
          OwnerRez), we collect the information you provide: your name, email
          address, desired dates, number of guests, and any message you
          include. We use this information solely to respond to your inquiry
          and process your booking.
        </p>

        <h2
          className="text-xl font-semibold mt-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#2D5016",
          }}
        >
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To respond to your booking inquiries</li>
          <li>To process and manage your reservation</li>
          <li>To communicate check-in/check-out details and house rules</li>
          <li>To send booking confirmations and receipts</li>
          <li>To improve our website and services</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third
          parties for marketing purposes.
        </p>

        <h2
          className="text-xl font-semibold mt-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#2D5016",
          }}
        >
          Analytics
        </h2>
        <p>
          We use Vercel Analytics to understand how visitors use our website.
          This service collects anonymous usage data (page views, device type,
          general location) and does not use cookies or collect personally
          identifiable information.
        </p>

        <h2
          className="text-xl font-semibold mt-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#2D5016",
          }}
        >
          Payment Processing
        </h2>
        <p>
          Payments are processed securely through OwnerRez using
          industry-standard payment processors. We do not store your credit
          card information on our servers.
        </p>

        <h2
          className="text-xl font-semibold mt-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#2D5016",
          }}
        >
          Cookies
        </h2>
        <p>
          Our website does not use tracking cookies. Vercel Analytics is
          cookie-free. If you book through a third-party platform (Airbnb,
          VRBO), their cookie policies apply on their sites.
        </p>

        <h2
          className="text-xl font-semibold mt-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#2D5016",
          }}
        >
          Data Retention
        </h2>
        <p>
          We retain booking inquiry data for up to 3 years to serve returning
          guests and comply with tax record-keeping requirements. You may
          request deletion of your data at any time by emailing{" "}
          <a
            href="mailto:charlotte@peridot.properties"
            className="underline"
            style={{ color: "#6B8E23" }}
          >
            charlotte@peridot.properties
          </a>
          .
        </p>

        <h2
          className="text-xl font-semibold mt-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#2D5016",
          }}
        >
          Contact
        </h2>
        <p>
          If you have questions about this privacy policy, contact Charlotte
          Wunderlich at{" "}
          <a
            href="mailto:charlotte@peridot.properties"
            className="underline"
            style={{ color: "#6B8E23" }}
          >
            charlotte@peridot.properties
          </a>
          .
        </p>
      </div>
    </section>
  );
}
