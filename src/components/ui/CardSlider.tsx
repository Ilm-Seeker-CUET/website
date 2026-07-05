"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import styles from "./CardSlider.module.css";

interface CardSliderProps {
  children: React.ReactNode;
  /** How many cards to show at once on desktop (default 3) */
  visibleCount?: number;
  /** Auto-slide interval in ms (default 4000). Set 0 to disable. */
  autoPlayInterval?: number;
}

export default function CardSlider({
  children,
  visibleCount = 3,
  autoPlayInterval = 4000,
}: CardSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

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

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const el = trackRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>(`.${styles.slide}`);
      if (!card) return;
      const gap = 24;
      const scrollAmount = card.offsetWidth + gap;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    },
    []
  );

  // Auto-slide: scroll right, loop back to start when reaching the end
  useEffect(() => {
    if (!autoPlayInterval || isPaused) return;

    const timer = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;

      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
      if (atEnd) {
        // Loop back to start
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, isPaused, scroll]);

  return (
    <div
      className={styles.slider}
      style={{ "--visible-count": visibleCount } as React.CSSProperties}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
