import { getDictionary } from '@/lib/i18n';
import { Experience } from '@/lib/types';
import styles from './ExperienceSection.module.scss';

// Mock data - to be moved to a data file later
const mockExperience: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Full-Stack Developer',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications serving 10k+ users. Architected microservices infrastructure and mentored junior developers.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
    impact: 'Improved application performance by 40% and reduced deployment time by 60%'
  },
  {
    id: '2',
    company: 'Digital Agency Co.',
    position: 'Full-Stack Developer',
    period: '2020 - 2022',
    description: 'Developed custom web solutions for clients across various industries. Collaborated with design teams to create pixel-perfect, responsive interfaces.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Firebase'],
    impact: 'Delivered 15+ client projects on time with 98% satisfaction rate'
  },
  {
    id: '3',
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    period: '2019 - 2020',
    description: 'Built responsive web applications from ground up. Implemented modern development workflows and testing strategies.',
    technologies: ['React', 'Redux', 'SASS', 'Jest'],
    impact: 'Reduced bug reports by 50% through comprehensive testing implementation'
  }
];

export default async function ExperienceSection() {
  const dict = await getDictionary('en');

  return (
    <section className={styles.experience}>
      <div className={styles.experience__container}>
        <div className={styles.experience__header}>
          <h2 className={styles.experience__title}>
            {dict.experience.title}
          </h2>
          <p className={styles.experience__subtitle}>
            {dict.experience.subtitle}
          </p>
        </div>

        <div className={styles.experience__list}>
          {mockExperience.map((exp) => (
            <div key={exp.id} className={styles.experience__card}>
              <div className={styles.experience__cardHeader}>
                <h4 className={styles.experience__position}>
                  {exp.position}
                </h4>
                <div className={styles.experience__company}>
                  <span>📍 {exp.company}</span>
                  <span className={styles.experience__period}>• {exp.period}</span>
                </div>
              </div>

              <p className={styles.experience__description}>
                {exp.description}
              </p>

              {exp.impact && (
                <div className={styles.experience__impact}>
                  <strong>Impact:</strong> {exp.impact}
                </div>
              )}

              <div className={styles.experience__technologies}>
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.experience__tag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}