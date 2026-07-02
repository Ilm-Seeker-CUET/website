import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
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
            <Link href="/events" className="btn btn-gold">
              Islamic Mahfil 2026 →
            </Link>
            <Link href="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
