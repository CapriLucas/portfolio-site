import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';
import styles from './ProjectsSection.module.scss';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__imageContainer}>
        {project.imageUrl ? (
          <Image
            alt={project.title}
            src={project.imageUrl}
            fill
            className={styles.projectCard__image}
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className={styles.projectCard__placeholder}>
            <span>💻</span>
            <span>{project.title}</span>
          </div>
        )}
      </div>

      <div className={styles.projectCard__body}>
        <h3 className={styles.projectCard__title}>{project.title}</h3>
        <div className={styles.projectCard__content}>
          <p className={styles.projectCard__description}>
            {project.description}
          </p>
          <div className={styles.projectCard__technologies}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.projectCard__tag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.projectCard__actions}>
        {project.demoUrl && (
          <Link href={project.demoUrl} target="_blank" className={styles.projectCard__button}>
            🔗 Demo
          </Link>
        )}
        {project.githubUrl && (
          <Link href={project.githubUrl} target="_blank" className={styles.projectCard__button}>
            📦 Code
          </Link>
        )}
      </div>
    </div>
  );
}