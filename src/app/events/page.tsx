import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { CURRENT_EVENT, PAST_EVENTS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Events | CIISS",
  description:
    "Browse all events organized by CUET Islamic Ilm Seeker Society — upcoming gatherings and past milestones.",
};

export default function EventsPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className={styles.pageHeader}>
        <Reveal className="container" direction="up">
          <p className="section-label">Our Events</p>
          <h1 className="section-title">Events &amp; Programs</h1>
          <p className="section-subtitle">
            From campus-wide campaigns to grand spiritual gatherings — explore everything CIISS organizes.
          </p>
        </Reveal>
      </section>

      {/* ── Upcoming / Featured Event ── */}
      <section className="section-sm">
        <Reveal className="container">
          <p className="section-label">Featured</p>
          <h2 className="section-title">Upcoming Event</h2>
          <div className={styles.featuredCard}>
            {CURRENT_EVENT.image && (
              <div className={styles.featuredPoster}>
                <Image
                  src={CURRENT_EVENT.image}
                  alt={CURRENT_EVENT.title}
                  width={400}
                  height={400}
                  className={styles.featuredPosterImg}
                />
              </div>
            )}
            <div className={styles.featuredContent}>
              <span className={styles.featuredBadge}>Upcoming</span>
              <h3 className={styles.featuredTitle}>{CURRENT_EVENT.title}</h3>
              <p className={styles.featuredTagline}>{CURRENT_EVENT.tagline}</p>
              <p className={styles.featuredDesc}>{CURRENT_EVENT.description}</p>
              <div className={styles.featuredMeta}>
                <span>📅 {CURRENT_EVENT.date}</span>
                <span>📍 {CURRENT_EVENT.location}</span>
                <span>
                  🎯 {CURRENT_EVENT.segments.length} Segments
                </span>
              </div>
              <Link
                href={`/events/${CURRENT_EVENT.slug}`}
                className="btn btn-gold"
              >
                View Full Details →
              </Link>
            </div>
            <div className={styles.featuredSegments}>
              <h4 className={styles.segmentsListTitle}>Segments</h4>
              {CURRENT_EVENT.segments.map((seg, i) => (
                <div key={seg.id} className={styles.segmentItem}>
                  <span className={styles.segmentIndex}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className={styles.segmentItemTitle}>{seg.title}</span>
                    <span className={styles.segmentItemDate}>{seg.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Past Events ── */}
      <section className={`${styles.pastSection} section`}>
        <div className="container">
          <Reveal>
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">Past Events</h2>
            <p className="section-subtitle">
              A look back at the milestones that shaped CIISS.
            </p>
          </Reveal>

          <div className={styles.timeline}>
            {PAST_EVENTS.slice()
              .reverse()
              .map((event, i) => (
                <Reveal
                  key={event.id}
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={`${styles.timelineItem} ${
                    i % 2 === 0 ? styles.timelineLeft : styles.timelineRight
                  }`}
                >
                  <div className={styles.timelineDot} />
                  <div className={`glass-card ${styles.timelineCard}`}>
                    <span className={styles.timelineDate}>{event.date}</span>
                    <h3 className={styles.timelineTitle}>{event.title}</h3>
                    <p className={styles.timelineDesc}>{event.description}</p>
                    <span className={styles.timelineLocation}>
                      📍 {event.location}
                    </span>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
