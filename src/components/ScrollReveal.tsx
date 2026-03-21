"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Delay in ms before the animation starts (for staggering) */
  delay?: number;
  /** Animation variant */
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
  /** IntersectionObserver threshold (0–1) */
  threshold?: number;
  /** Extra class names */
  className?: string;
  /** HTML tag to render */
  as?: keyof HTMLElementTagNameMap;
}

export default function ScrollReveal({
  children,
  delay = 0,
  variant = "fade-up",
  threshold = 0.15,
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("sr-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay via CSS custom property
          el.style.setProperty("--sr-delay", `${delay}ms`);
          el.classList.add("sr-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    // @ts-expect-error — dynamic tag is safe here
    <Tag ref={ref} className={`sr-hidden sr-${variant} ${className}`}>
      {children}
    </Tag>
  );
}
