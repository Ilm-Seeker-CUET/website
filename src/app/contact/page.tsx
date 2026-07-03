import { CONTACT_INFO } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | CIISS",
  description:
    "Get in touch with CUET Islamic Ilm Seeker Society — reach us via phone, Facebook, or visit us at CUET campus.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className={styles.contactHero}>
        <Reveal className="container" direction="up">
          <p className="section-label">Get In Touch</p>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Have questions about our events or want to get involved? Reach out
            — we&apos;d love to hear from you.
          </p>
        </Reveal>
      </section>

      {/* ── Contact Grid ── */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Cards */}
            <div className={styles.cardsColumn}>
              <Reveal className={`glass-card ${styles.contactCard}`} delay={100}>
                <span className={styles.cardIcon}>📍</span>
                <h3 className={styles.cardTitle}>Visit Us</h3>
                <p className={styles.cardText}>{CONTACT_INFO.address}</p>
                <p className={styles.cardSubtext}>
                  Chittagong University of Engineering & Technology
                </p>
              </Reveal>

              <Reveal className={`glass-card ${styles.contactCard}`} delay={200}>
                <span className={styles.cardIcon}>📞</span>
                <h3 className={styles.cardTitle}>Call Us</h3>
                <p className={styles.cardText}>{CONTACT_INFO.phone}</p>
                <p className={styles.cardSubtext}>Primary Hotline</p>
              </Reveal>

              <Reveal className={`glass-card ${styles.contactCard}`} delay={300}>
                <span className={styles.cardIcon}>✉️</span>
                <h3 className={styles.cardTitle}>Email Us</h3>
                <p className={styles.cardText}>ciiss.cuet@gmail.com</p>
                <a
                  href="mailto:ciiss.cuet@gmail.com"
                  className="btn btn-primary"
                >
                  Send an Email →
                </a>
              </Reveal>

              <Reveal className={`glass-card ${styles.contactCard}`} delay={400}>
                <span className={styles.cardIcon}>📘</span>
                <h3 className={styles.cardTitle}>Follow Us</h3>
                <p className={styles.cardText}>Facebook Page</p>
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Visit Facebook Page →
                </a>
              </Reveal>
            </div>

            {/* Info Panel */}
            <Reveal className={styles.infoPanel} direction="left">
              <div className={styles.infoPanelInner}>
                <h2 className={styles.infoPanelTitle}>
                  CUET Islamic Ilm Seeker Society
                </h2>
                <div className="gold-line" />
                <p className={styles.infoPanelText}>
                  We are a student-led spiritual and intellectual platform
                  operating within CUET. Whether you want to volunteer, attend
                  our events, or simply connect with like-minded students —
                  don&apos;t hesitate to reach out.
                </p>

                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Address</span>
                    <span className={styles.infoValue}>
                      {CONTACT_INFO.address}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Phone</span>
                    <span className={styles.infoValue}>
                      {CONTACT_INFO.phone}
                    </span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Social</span>
                    <a
                      href={CONTACT_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.infoLink}
                    >
                      Facebook Page ↗
                    </a>
                  </div>
                </div>

                <div className={styles.mapPlaceholder}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.2!2d91.97!3d22.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI3JzM2LjAiTiA5McKwNTgnMTIuMCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CUET Location"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
