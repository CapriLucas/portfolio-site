import { getDictionary } from '@/lib/i18n';
import Hero from '@/components/hero/Hero';
import styles from './home.module.scss';

export default async function Home() {
  const dict = await getDictionary('en');

  return (
    <div className={styles.container}>
      <Hero
        title={dict.home.title}
        subtitle={dict.home.subtitle}
        actions={[
          { href: '/projects', label: dict.home.cta.projects, primary: true },
          { href: '/contact', label: dict.home.cta.contact },
        ]}
        showScrollIndicator
      />
      <section className={styles.section}>
        <h2>Next Section</h2>
      </section>
    </div>
  );
}
