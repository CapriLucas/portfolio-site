import { getDictionary } from '@/lib/i18n';
import Hero from '@/components/hero/Hero';
import AboutSection from '@/components/sections/about-section/AboutSection';
import ProjectsSection from '@/components/sections/projects-section/ProjectsSection';
import ExperienceSection from '@/components/sections/experience-section/ExperienceSection';
import ContactSection from '@/components/sections/contact-section/ContactSection';
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
      />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
