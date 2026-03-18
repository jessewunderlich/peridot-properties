"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqSections = [
  {
    title: "Booking & Policies",
    faqs: [
      {
        q: "What are the check-in and check-out times?",
        a: "Check-in is at 4:00 PM. Check-out is at 10:00 AM. If you need a different arrangement, reach out to Charlotte ahead of time and she\u2019ll do her best to accommodate.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Cancel for any reason at least 48 hours before check-in for a full refund. Cancel within 24\u201348 hours of check-in for a 50% refund. After check-in time, the reservation is non-refundable.",
      },
      {
        q: "How do I book?",
        a: "Use the booking calendar on the property page to select your dates and book directly. If your desired dates aren\u2019t available or you have questions, use the \u201cSend Inquiry\u201d button or email charlotte@peridot.properties.",
      },
      {
        q: "Is there a minimum stay?",
        a: "Summer (June\u2013August): 4-night minimum. Off season (September\u2013May): 2-night minimum.",
      },
      {
        q: "Are animals allowed?",
        a: "No animals are permitted on the property. We maintain an allergen-free environment to accommodate all guests, including those with sensitivities and allergies. We appreciate your understanding.",
      },
    ],
  },
  {
    title: "The Property",
    faqs: [
      {
        q: "How many guests can Lakeside Luxe accommodate?",
        a: "The property has 5 bedrooms and 4 bathrooms across three floors with beds for 10. The third floor has the master suite (king bed, 3/4 en-suite), two queen bedrooms, and a full shared bath. The second floor has two twin bedrooms with a half bath. The ground-floor guest suite has a king bed and its own 3/4 bath. Maximum 12 people on the property at any time.",
      },
      {
        q: "Is there WiFi?",
        a: "Yes, high-speed WiFi is available throughout the property.",
      },
      {
        q: "What\u2019s included?",
        a: "Full kitchen, washer/dryer, linens, towels (including beach towels), life jackets for kids, three kayaks, two inflatable paddle boards, a paddle boat (seats 5), a fire pit with firewood, board games, and a 70\u201d smart TV with streaming. Everything you need to just show up and enjoy.",
      },
      {
        q: "Is there air conditioning?",
        a: "Yes, Lakeside Luxe has central A/C and forced-air heat for year-round comfort.",
      },
      {
        q: "Is there a dock?",
        a: "Yes, there is a private dock available for guest use.",
      },
    ],
  },
  {
    title: "The Area",
    faqs: [
      {
        q: "Where is the nearest grocery store?",
        a: "The Market at Perham is about 10 miles away. Open 7am\u20139pm daily. It\u2019s a full grocery store with produce, bakery, and a meat department.",
      },
      {
        q: "Where can I buy a fishing license?",
        a: "Online at the MN DNR website (valid immediately \u2014 no waiting) or in person at Gene\u2019s Sport Shop in Perham. Non-resident options start at $14 for 24 hours.",
      },
      {
        q: "Is there cell service?",
        a: "Yes, cell service is available at the property. Coverage varies by carrier but is generally reliable.",
      },
      {
        q: "What\u2019s the nearest hospital?",
        a: "Perham Health is about 10 miles away. Address: 665 3rd St SW, Perham, MN 56573.",
      },
      {
        q: "Can I rent a boat?",
        a: "Yes! MN Tru North in Perham offers pontoon, jetski, and kayak rentals. See our Local Guide for the full list of nearby rental options.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b last:border-b-0"
      style={{ borderColor: "#6B8E2318" }}
    >
      <button
        className="w-full flex items-center justify-between text-left py-4 px-1 gap-4"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span
          className="text-sm font-semibold leading-snug"
          style={{ color: "#2D5016" }}
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200"
          style={{
            color: "#6B8E23",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <p
          className="text-sm leading-relaxed pb-4 px-1"
          style={{ color: "#2C2C2C" }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <div className="flex flex-col gap-10">
      {faqSections.map((section) => (
        <div key={section.title}>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#4A7C8C" }}
          >
            {section.title}
          </p>
          <div
            className="rounded-2xl px-5 sm:px-8"
            style={{
              backgroundColor: "#FAF8F5",
              border: "1px solid #6B8E2318",
            }}
          >
            {section.faqs.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
