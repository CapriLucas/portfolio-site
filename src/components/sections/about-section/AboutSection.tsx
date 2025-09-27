import { getDictionary } from '@/lib/i18n';
import styles from './AboutSection.module.scss';

export default async function AboutSection() {
  const dict = await getDictionary('en');

  return (
    <section className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__content}>
          <div className={styles.about__text}>
            <h2 className={styles.about__title}>
              {dict.about.title}
            </h2>
            <p className={styles.about__intro}>
              {dict.about.intro}
            </p>
          </div>

          <div className={styles.about__techCard}>
            <h4 className={styles.about__techTitle}>
              {dict.about.technologies}
            </h4>
            <div className={styles.about__techList}>
              {dict.about.techList.map((tech, index) => (
                <span
                  key={index}
                  className={styles.about__techTag}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}