import { getDictionary } from '@/lib/i18n';
import { Project } from '@/lib/types';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.scss';

// Mock data - to be moved to a data file later
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative project management tool built with Next.js and Firebase. Real-time updates, team collaboration, and progress tracking.',
    technologies: ['Next.js', 'Firebase', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/example/taskmanager'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Responsive weather application with location-based forecasts, interactive charts, and weather alerts using OpenWeather API.',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'SASS'],
    demoUrl: 'https://weather.example.com',
    githubUrl: 'https://github.com/example/weather-app'
  }
];

export default async function ProjectsSection() {
  const dict = await getDictionary('en');

  return (
    <section className={styles.projects}>
      <div className={styles.projects__container}>
        <div className={styles.projects__header}>
          <h2 className={styles.projects__title}>
            {dict.projects.title}
          </h2>
          <p className={styles.projects__subtitle}>
            {dict.projects.subtitle}
          </p>
        </div>

        <div className={styles.projects__grid}>
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}