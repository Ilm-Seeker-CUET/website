"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import styles from "./CardSlider.module.css";

interface CardSliderProps {
  children: React.ReactNode;
  /** How many cards to show at once on desktop (default 3) */
  visibleCount?: number;
}

export default function CardSlider({
  children,
  visibleCount = 3,
}: CardSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    // Scroll by one card width + gap
    const card = el.querySelector<HTMLElement>(`.${styles.slide}`);
    if (!card) return;
    const gap = 24; // matches var(--space-xl)
    const scrollAmount = card.offsetWidth + gap;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={styles.slider}
      style={{ "--visible-count": visibleCount } as React.CSSProperties}
    >
      {/* Navigation Arrows */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => scroll("left")}
        aria-label="Previous"
        disabled={!canScrollLeft}
      >
        ‹
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => scroll("right")}
        aria-label="Next"
        disabled={!canScrollRight}
      >
        ›
      </button>

      {/* Track */}
      <div className={styles.track} ref={trackRef}>
        {Array.isArray(children)
          ? children.map((child, i) => (
              <div className={styles.slide} key={i}>
                {child}
              </div>
            ))
          : <div className={styles.slide}>{children}</div>
        }
      </div>

      {/* Progress Dots */}
      <div className={styles.dots}>
        <div
          className={`${styles.dot} ${canScrollLeft ? "" : styles.dotActive}`}
        />
        <div
          className={`${styles.dot} ${
            canScrollLeft && canScrollRight ? styles.dotActive : ""
          }`}
        />
        <div
          className={`${styles.dot} ${canScrollRight ? "" : styles.dotActive}`}
        />
      </div>
    </div>
  );
}
