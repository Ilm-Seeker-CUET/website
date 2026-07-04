"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CURRENT_EVENT } from "@/lib/data";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const EVENT_DATE = "2026-07-06T09:00:00+06:00";

function getMiniCountdown(): string {
  const diff = new Date(EVENT_DATE).getTime() - Date.now();
  if (diff <= 0) return "Live Now";
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  if (d > 0) return `${d}d ${h}h`;
  const m = Math.floor((diff / (1000 * 60)) % 60);
  return `${h}h ${m}m`;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mini countdown tick
  useEffect(() => {
    setCountdown(getMiniCountdown());
    const timer = setInterval(() => {
      setCountdown(getMiniCountdown());
    }, 60000); // update every minute
    return () => clearInterval(timer);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.png"
              alt="CIISS Logo"
              width={40}
              height={40}
              className={styles.logoImg}
            />
          </div>
          <div>
            <span className={styles.logoTextMain}>CIISS</span>
            <span className={styles.logoTextAccent}>Ilm Seeker Society</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.active : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/events/${CURRENT_EVENT.slug}`}
            className={`${styles.navCta}`}
          >
            <span className={styles.ctaLabel}>Islamic Week 2026</span>
            {countdown && (
              <span className={styles.ctaCountdown}>{countdown}</span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={`/events/${CURRENT_EVENT.slug}`}
          className={`${styles.navCta}`}
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.ctaLabel}>Islamic Week 2026</span>
          {countdown && (
            <span className={styles.ctaCountdown}>{countdown}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
