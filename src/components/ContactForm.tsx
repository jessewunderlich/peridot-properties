"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: "",
  message: "",
};

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/meerpkle";
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          guests: form.guests,
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          message: form.message || "No additional message",
          _subject: `New inquiry from ${form.name} — ${form.checkIn} to ${form.checkOut}`,
        }),
      });
      if (res.ok) {
        router.push("/thank-you");
        return;
      } else {
        alert("Something went wrong. Please email charlotte@peridot.properties directly.");
      }
    } catch {
      alert("Something went wrong. Please email charlotte@peridot.properties directly.");
    }
    setSubmitting(false);
  }

  const inputStyle = {
    backgroundColor: "#FAF8F5",
    border: "1px solid #6B8E2330",
    color: "#2C2C2C",
    borderRadius: "0.5rem",
    padding: "0.625rem 0.875rem",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.15s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.8rem",
    fontWeight: "600",
    marginBottom: "0.35rem",
    color: "#2D5016",
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 flex flex-col items-center text-center gap-4"
        style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2320" }}
      >
        <CheckCircle size={48} style={{ color: "#6B8E23" }} aria-hidden="true" />
        <h3
          className="text-2xl font-semibold"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#2D5016" }}
        >
          Message Received!
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C80" }}>
          Thanks for reaching out! Charlotte will get back to you within 24 hours.
          We can&apos;t wait to share Minnesota&apos;s lakes with you.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-6 sm:p-8 space-y-5"
      style={{ backgroundColor: "#FAF8F5", border: "1px solid #6B8E2320", boxShadow: "0 4px 20px rgba(45,80,22,0.07)" }}
      aria-label="Contact and inquiry form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" style={labelStyle}>Your Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            style={inputStyle}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email Address *</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="jane@example.com"
            style={inputStyle}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="guests" style={labelStyle}>Number of Guests *</label>
          <select
            id="guests"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select guests</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="checkIn" style={labelStyle}>Desired Check-In *</label>
          <input
            id="checkIn"
            type="date"
            name="checkIn"
            value={form.checkIn}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="checkOut" style={labelStyle}>Desired Check-Out *</label>
          <input
            id="checkOut"
            type="date"
            name="checkOut"
            value={form.checkOut}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Questions or Special Requests</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your trip — we love hearing what brings you to the lake!"
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:shadow-md disabled:opacity-60"
        style={{ backgroundColor: "#6B8E23", color: "#FAF8F5" }}
      >
        {submitting ? (
          "Sending..."
        ) : (
          <>
            <Send size={15} aria-hidden="true" />
            Send Inquiry
          </>
        )}
      </button>

      <p className="text-center text-xs" style={{ color: "#2C2C2C50" }}>
        We typically respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
