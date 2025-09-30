import { getDictionary } from '@/lib/i18n';
import Link from 'next/link';
import ContactForm from './ContactForm';
import styles from './ContactSection.module.scss';

export default async function ContactSection() {
  const dict = await getDictionary('en');

  return (
    <section id="contact-section" className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__header}>
          <h2 className={styles.contact__title}>
            {dict.contact.title}
          </h2>
          <p className={styles.contact__subtitle}>
            {dict.contact.subtitle}
          </p>
        </div>

        <div className={styles.contact__content}>
          <div className={styles.contact__info}>
            <div className={styles.contact__infoCard}>
              <h4 className={styles.contact__infoTitle}>
                Let&apos;s Connect
              </h4>
              <p className={styles.contact__infoText}>
                I&apos;m always interested in hearing about new opportunities and interesting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className={styles.contact__socialLinks}>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className={styles.contact__socialLink}
                >
                  <span className={styles.contact__socialIcon}>🐙</span>
                  <span>{dict.footer.links.github}</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className={styles.contact__socialLink}
                >
                  <span className={styles.contact__socialIcon}>💼</span>
                  <span>{dict.footer.links.linkedin}</span>
                </Link>
                <Link
                  href="mailto:hello@example.com"
                  className={styles.contact__socialLink}
                >
                  <span className={styles.contact__socialIcon}>✉️</span>
                  <span>{dict.footer.links.email}</span>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.contact__form}>
            <div className={styles.contact__formCard}>
              <ContactForm dictionary={dict.contact} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}