import { getDictionary } from '@/lib/i18n';
import styles from './home.module.scss';

export default async function Home() {
  const dict = await getDictionary('en');

  return (
    <main className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>{dict.home.title}</h1>
        <p className={styles.hero__subtitle}>{dict.home.subtitle}</p>
        <div className={styles.hero__actions}>
          <a href="/projects" className={styles.hero__cta}>
            {dict.home.cta.projects}
          </a>
          <a href="/contact" className={styles.hero__cta}>
            {dict.home.cta.contact}
          </a>
        </div>
      </div>
    </main>
  );
}
