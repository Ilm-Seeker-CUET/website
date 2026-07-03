import { SOCIETY_INFO, PAST_EVENTS } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "About | CIISS",
  description: SOCIETY_INFO.about,
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className={styles.aboutHero}>
        <div className="container">
          <p className="section-label">About Us</p>
          <h1 className={styles.heroTitle}>
            CUET Islamic{" "}
            <span className={styles.heroAccent}>Ilm Seeker</span> Society
          </h1>
          <p className={styles.heroSubtitle}>{SOCIETY_INFO.about}</p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={`${styles.mvSection} section`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🎯</div>
              <h2 className={styles.mvTitle}>Our Mission</h2>
              <div className="gold-line" />
              <p className={styles.mvText}>{SOCIETY_INFO.mission}</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🌟</div>
              <h2 className={styles.mvTitle}>Our Vision</h2>
              <div className="gold-line" />
              <p className={styles.mvText}>{SOCIETY_INFO.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="section">
        <div className="container">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Our Activities</h2>
          <div className={styles.activitiesGrid}>
            {[
              {
                icon: "📖",
                title: "Islamic Mahfil",
                desc: "Grand annual gatherings with renowned scholars, heart-softening reminders, and collective worship for the entire CUET community.",
              },
              {
                icon: "🏆",
                title: "Competitions",
                desc: "Seerah quizzes, Quranic knowledge challenges, and academic competitions to test and expand Islamic knowledge.",
              },
              {
                icon: "📚",
                title: "Book Fairs",
                desc: "Campus-wide Islamic book fairs featuring prominent publishers with student-friendly discounts on authentic literature.",
              },
              {
                icon: "🤲",
                title: "Iftar Gatherings",
                desc: "Collective fasting-breaking events during Ramadan fostering brotherhood and spiritual growth.",
              },
              {
                icon: "🎤",
                title: "Seminars & Lectures",
                desc: "Week-long awareness campaigns, youth lectures, and seminars on Islam, science, and professional ethics.",
              },
              {
                icon: "📜",
                title: "Quran Campaigns",
                desc: "Campus-wide Quran distribution drives and related competitions to connect students with the Book of Allah.",
              },
            ].map((activity) => (
              <div
                key={activity.title}
                className={`glass-card ${styles.activityCard}`}
              >
                <span className={styles.activityIcon}>{activity.icon}</span>
                <h3 className={styles.activityTitle}>{activity.title}</h3>
                <p className={styles.activityDesc}>{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={`${styles.statsSection} section-sm`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { value: `${PAST_EVENTS.length}+`, label: "Events Organized" },
              { value: "500+", label: "Students Reached" },
              { value: "3+", label: "Years Active" },
              { value: "5", label: "Segments in 2026" },
            ].map((stat) => (
              <div key={stat.label} className={styles.statBlock}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
