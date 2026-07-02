import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <Image
                src="/logo.jpeg"
                alt="CIISS Logo"
                width={44}
                height={44}
                className={styles.footerLogoImg}
              />
              <span className={styles.footerBrandName}>CIISS</span>
            </div>
            <p className={styles.footerDesc}>
              CUET Islamic Ilm Seeker Society — fostering a campus environment
              where rigorous engineering education goes hand-in-hand with
              authentic Islamic values and spiritual development.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div className={styles.footerColumn}>
            <h4>Events</h4>
            <ul>
              <li>
                <Link href="/events">Islamic Mahfil 2026</Link>
              </li>
              <li>
                <Link href="/events">Past Events</Link>
              </li>
              <li>
                <Link href="/events">Segments</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerColumn}>
            <h4>Contact</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>Kaptai Road, Chittagong, Bangladesh, 4349</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>01881-277639</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>💬</span>
              <span>Facebook Messenger</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} CUET Islamic Ilm Seeker Society. All
            rights reserved.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://www.messenger.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Messenger"
            >
              ✉
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
