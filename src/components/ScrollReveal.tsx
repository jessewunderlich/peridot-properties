"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  delay?: number;
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
  threshold?: number;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
}

export default function ScrollReveal({
  children,
  delay = 0,
  variant = "fade-up",
  threshold = 0.15,
  className = "",
  style,
  as: Tag = "div",
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("sr-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <Tag
      ref={ref}
      className={`sr-hidden sr-${variant} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
