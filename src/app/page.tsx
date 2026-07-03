import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "@/components/ui/CountdownTimer";
import Reveal from "@/components/ui/Reveal";
import { CURRENT_EVENT, PAST_EVENTS, SOCIETY_INFO } from "@/lib/data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <Reveal direction="up" className={styles.heroContent}>
          <p className={styles.heroLabel}>
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <h1 className={styles.heroTitle}>
            CUET Islamic{" "}
            <span className={styles.heroTitleAccent}>Ilm Seeker</span> Society
          </h1>
          <p className={styles.heroDesc}>
            A student-led spiritual and intellectual platform at Chittagong
            University of Engineering &amp; Technology — transforming
            engineering students into integrity-driven leaders.
          </p>
          <div className={styles.heroCta}>
            <Link
              href={`/events/${CURRENT_EVENT.slug}`}
              className="btn btn-gold"
            >
              {CURRENT_EVENT.title} →
            </Link>
            <Link href="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Featured Event Banner ── */}
      <section className={styles.featuredBanner}>
        <Reveal className="container">
          <div className={styles.featuredInner}>
            {/* Poster Side */}
            {CURRENT_EVENT.image && (
              <div className={styles.featuredPoster}>
                <Image
                  src={CURRENT_EVENT.image}
                  alt={CURRENT_EVENT.title}
                  width={480}
                  height={480}
                  className={styles.posterImage}
                  priority
                />
              </div>
            )}
            {/* Info Side */}
            <div className={styles.featuredInfo}>
              <span className={styles.featuredBadge}>Featured Event</span>
              <h2 className={styles.featuredTitle}>{CURRENT_EVENT.title}</h2>
              <p className={styles.featuredTagline}>{CURRENT_EVENT.tagline}</p>
              <CountdownTimer targetDate="2026-07-06T09:00:00+06:00" />
              <div className={styles.featuredMeta}>
                <span>📅 {CURRENT_EVENT.date}</span>
                <span>📍 {CURRENT_EVENT.location}</span>
                <span>🎯 {CURRENT_EVENT.segments.length} Segments</span>
              </div>
              <div className={styles.featuredActions}>
                <Link
                  href={`/events/${CURRENT_EVENT.slug}`}
                  className="btn btn-gold"
                >
                  View Full Details →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Segments Preview ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="section-label">What&apos;s Happening</p>
            <h2 className="section-title">Event Segments</h2>
            <p className="section-subtitle">
              {CURRENT_EVENT.title} features multiple segments spanning across
              several days.
            </p>
          </Reveal>
          <div className={styles.segmentsGrid}>
            {CURRENT_EVENT.segments.map((seg, i) => (
              <Reveal key={seg.id} delay={i * 100}>
                <div className={`glass-card ${styles.segmentCard}`}>
                  <span className={styles.segmentNumber}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.segmentTitle}>{seg.title}</h3>
                  <p className={styles.segmentDate}>{seg.date}</p>
                  <p className={styles.segmentDesc}>{seg.description}</p>
                  <Link
                    href={`/events/${CURRENT_EVENT.slug}/${seg.slug}`}
                    className="btn btn-outline"
                    style={{ marginTop: "var(--space-md)" }}
                  >
                    View Details →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className={`${styles.aboutSection} section`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <Reveal className={styles.aboutContent} direction="left">
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">About CIISS</h2>
              <div className="gold-line" />
              <p className={styles.aboutText}>{SOCIETY_INFO.about}</p>
              <div className={styles.aboutStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>6+</span>
                  <span className={styles.statLabel}>Events Organized</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>500+</span>
                  <span className={styles.statLabel}>Students Reached</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>3+</span>
                  <span className={styles.statLabel}>Years Active</span>
                </div>
              </div>
              <Link href="/about" className="btn btn-outline">
                Read Full Story →
              </Link>
            </Reveal>
            <Reveal className={styles.aboutVisual} direction="right">
              <div className={styles.missionCard}>
                <h3>Our Mission</h3>
                <p>{SOCIETY_INFO.mission}</p>
              </div>
              <div className={styles.visionCard}>
                <h3>Our Vision</h3>
                <p>{SOCIETY_INFO.vision}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Past Events ── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">Past Events</h2>
            <p className="section-subtitle">
              A look back at the milestones of CIISS.
            </p>
          </Reveal>
          <div className={styles.pastGrid}>
            {PAST_EVENTS.map((event, i) => (
              <Reveal key={event.id} delay={i * 100}>
                <div className={`glass-card ${styles.pastCard}`}>
                  <span className={styles.pastDate}>{event.date}</span>
                  <h3 className={styles.pastTitle}>{event.title}</h3>
                  <p className={styles.pastDesc}>{event.description}</p>
                  <span className={styles.pastLocation}>
                    📍 {event.location}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <Reveal className={styles.ctaInner} direction="up">
            <h2 className={styles.ctaTitle}>
              Join Us at {CURRENT_EVENT.title}
            </h2>
            <p className={styles.ctaDesc}>
              Be part of the biggest Islamic gathering on CUET campus.
            </p>
            <Link
              href={`/events/${CURRENT_EVENT.slug}`}
              className="btn btn-gold"
            >
              View Full Event Details →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
