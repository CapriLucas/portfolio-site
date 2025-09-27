import Link from 'next/link';
import styles from './Hero.module.scss';

interface HeroAction {
  href: string;
  label: string;
  primary?: boolean;
}

interface HeroProps {
  title: string;
  subtitle: string;
  actions?: HeroAction[];
  showScrollIndicator?: boolean;
  backgroundGradient?: string;
}

export default function Hero({
  title,
  subtitle,
  actions = []
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>{title}</h1>
        <p className={styles.hero__subtitle}>{subtitle}</p>

        {actions.length > 0 && (
          <div className={styles.hero__actions}>
            {actions.map((action, index) => (
              <Link
                key={action.href}
                href={action.href}
                className={`${styles.hero__cta} ${
                  action.primary || index === 0 ? styles['hero__cta--primary'] : ''
                }`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}