"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export default function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass = `reveal-${direction}`;

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
