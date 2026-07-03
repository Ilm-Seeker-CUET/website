import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { CURRENT_EVENT } from "@/lib/data";
import styles from "./page.module.css";

// For now only one event — will expand with Firebase later
function getEventBySlug(slug: string) {
  if (slug === CURRENT_EVENT.slug) return CURRENT_EVENT;
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found | CIISS" };
  return {
    title: `${event.title} | CIISS`,
    description: event.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const bgImage = event.bgImage || event.image;

  return (
    <>
      {/* ── Event Hero ── */}
      <section className={styles.eventHero}>
        {/* Background poster overlay */}
        {bgImage && (
          <div className={styles.heroBg}>
            <Image
              src={bgImage}
              alt=""
              fill
              className={styles.heroBgImage}
              priority
            />
            <div className={styles.heroOverlay} />
          </div>
        )}
        <div className="container">
          <div className={styles.heroInner}>
            <Reveal className={styles.heroText} direction="left">
              <span className={styles.heroBadge}>
                {event.isUpcoming ? "Upcoming Event" : "Past Event"}
              </span>
              <h1 className={styles.heroTitle}>{event.title}</h1>
              <p className={styles.heroTagline}>{event.tagline}</p>
              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📅</span>
                  <span>{event.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📍</span>
                  <span>{event.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>🎯</span>
                  <span>{event.segments.length} Segments</span>
                </div>
              </div>
            </Reveal>
            {event.image && (
              <Reveal className={styles.heroPoster} direction="right">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={350}
                  height={350}
                  className={styles.heroPosterImg}
                  priority
                />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ── Event Description ── */}
      <section className="section-sm">
        <div className="container">
          <Reveal className={styles.descriptionBlock} direction="up">
            <div className="gold-line" />
            <p className={styles.descriptionText}>{event.description}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Segments ── */}
      <section className={`${styles.segmentsSection} section`}>
        <div className="container">
          <p className="section-label">Program Schedule</p>
          <h2 className="section-title">Event Segments</h2>
          <p className="section-subtitle">
            Each segment is carefully designed to deliver a unique experience.
          </p>

          <div className={styles.segmentsList}>
            {event.segments.map((seg, i) => (
              <Reveal
                key={seg.id}
                className={styles.segmentBlock}
                delay={i * 100}
              >
                <div id={seg.id} style={{ scrollMarginTop: "100px" }}>
                  <div className={styles.segmentHeader}>
                    <span className={styles.segmentNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className={styles.segmentHeaderText}>
                      <h3 className={styles.segmentTitle}>{seg.title}</h3>
                      <span className={styles.segmentDate}>{seg.date}</span>
                    </div>
                  </div>

                  <p className={styles.segmentDescription}>{seg.description}</p>

                  <div style={{ marginTop: "var(--space-md)" }}>
                    <Link
                      href={`/events/${event.slug}/${seg.slug}`}
                      className="btn btn-outline"
                    >
                      View Segment Details →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
