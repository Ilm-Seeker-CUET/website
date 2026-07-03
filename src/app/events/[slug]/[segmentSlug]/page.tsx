import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { CURRENT_EVENT } from "@/lib/data";
import styles from "./page.module.css";

// For now only one event — will expand with Firebase later
function getSegmentData(slug: string, segmentSlug: string) {
  if (slug !== CURRENT_EVENT.slug) return null;
  const segment = CURRENT_EVENT.segments.find((s) => s.slug === segmentSlug);
  if (!segment) return null;
  return { event: CURRENT_EVENT, segment };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; segmentSlug: string }>;
}) {
  const { slug, segmentSlug } = await params;
  const data = getSegmentData(slug, segmentSlug);
  if (!data) return { title: "Segment Not Found | CIISS" };
  return {
    title: `${data.segment.title} - ${data.event.title} | CIISS`,
    description: data.segment.description,
  };
}

export default async function SegmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string; segmentSlug: string }>;
}) {
  const { slug, segmentSlug } = await params;
  const data = getSegmentData(slug, segmentSlug);
  if (!data) notFound();

  const { event, segment } = data;
  const bgImage = event.bgImage;
  const posterImage = segment.image;

  return (
    <>
      <section className={styles.segmentHero}>
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
              <Link href={`/events/${event.slug}`} className={styles.backLink}>
                ← Back to {event.title}
              </Link>
              <h1 className={styles.heroTitle}>{segment.title}</h1>
              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📅</span>
                  <span>{segment.date}</span>
                </div>
              </div>
            </Reveal>
            {posterImage && (
              <Reveal className={styles.heroPoster} direction="right">
                <Image
                  src={posterImage}
                  alt={segment.title}
                  width={400}
                  height={400}
                  className={styles.heroPosterImg}
                  priority
                />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal direction="up" className={styles.contentBlock}>
            <h2 className="section-title">Overview</h2>
            <div className="gold-line" />
            <p className={styles.descriptionText}>{segment.description}</p>
            
            <h3 className={styles.detailsTitle}>Key Details</h3>
            <ul className={styles.detailsList}>
              {segment.details.map((detail, i) => (
                <li key={i} className={styles.detailItem}>
                  <span className={styles.detailBullet}>✦</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {segment.registrationUrl && (
              <div className={styles.actionBlock}>
                <a
                  href={segment.registrationUrl}
                  className="btn btn-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register for {segment.title} →
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
