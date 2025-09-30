import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Project } from '@/lib/types';
import styles from './project.module.scss';

// Mock data - same as in ProjectsSection
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

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = mockProjects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Mock detailed markdown content
  const getProjectContent = (id: string) => {
    const contents: Record<string, string> = {
      '1': `
# E-Commerce Platform

## Overview
A comprehensive e-commerce solution built for modern businesses. This platform provides everything needed to run an online store, from product management to payment processing.

## Key Features
- **User Authentication**: Secure login and registration system
- **Product Catalog**: Advanced search and filtering capabilities
- **Shopping Cart**: Persistent cart across sessions
- **Payment Integration**: Stripe integration for secure payments
- **Admin Dashboard**: Comprehensive management interface
- **Order Management**: Complete order lifecycle tracking

## Technical Highlights
- Built with React and Node.js for optimal performance
- PostgreSQL database for reliable data storage
- Docker containerization for easy deployment
- Comprehensive test coverage with Jest

## Challenges Solved
One of the main challenges was implementing real-time inventory updates across multiple concurrent users. We solved this using optimistic locking and WebSocket connections for instant updates.

## Results
- 40% faster page load times compared to the previous solution
- 99.9% uptime in production
- Processed over $1M in transactions in the first year
      `,
      '2': `
# Task Management App

## Overview
A collaborative project management tool designed for modern teams. Built with real-time collaboration features and an intuitive interface.

## Key Features
- **Real-time Collaboration**: Multiple users can work simultaneously
- **Task Assignment**: Smart task distribution and tracking
- **Progress Tracking**: Visual progress indicators and reporting
- **Team Communication**: Integrated chat and notifications
- **File Sharing**: Secure document upload and sharing

## Technical Implementation
- Next.js for server-side rendering and optimal SEO
- Firebase for real-time database and authentication
- TypeScript for type safety and better developer experience
- Responsive design that works on all devices

## Innovation
The app features an innovative drag-and-drop interface that makes task management intuitive. We also implemented smart notifications that adapt to user behavior patterns.

## Impact
- 60% improvement in team productivity
- 95% user satisfaction rate
- Used by over 500 teams worldwide
      `,
      '3': `
# Weather Dashboard

## Overview
A comprehensive weather application that provides accurate forecasts and real-time weather data with beautiful visualizations.

## Key Features
- **Location-based Forecasts**: Automatic location detection
- **Interactive Charts**: Beautiful data visualizations with Chart.js
- **Weather Alerts**: Real-time severe weather notifications
- **Historical Data**: Access to past weather patterns
- **Multiple Locations**: Track weather for multiple cities

## Technical Stack
- React for dynamic user interface
- Chart.js for data visualization
- OpenWeather API for reliable weather data
- SASS for maintainable styling
- Progressive Web App capabilities

## Data Visualization
The dashboard features interactive charts showing temperature trends, precipitation probability, and wind patterns. Users can toggle between different time periods and weather metrics.

## Performance
- Sub-second load times
- Offline functionality for cached data
- Optimized for mobile devices
- 99% API uptime reliability
      `
    };
    return contents[id] || 'Content not available.';
  };

  return (
    <div className={styles.project}>
      <div className={styles.project__container}>
        <nav className={styles.project__nav}>
          <Link href="/" className={styles.project__backLink}>
            ← Back to Home
          </Link>
        </nav>

        <header className={styles.project__header}>
          <h1 className={styles.project__title}>{project.title}</h1>
          <p className={styles.project__description}>{project.description}</p>

          <div className={styles.project__technologies}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.project__tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.project__links}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.project__link}
              >
                🔗 Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.project__link}
              >
                📦 View Code
              </a>
            )}
          </div>
        </header>

        <main className={styles.project__content}>
          <div className={styles.project__markdown}>
            {getProjectContent(project.id).split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index}>{line.substring(2)}</h1>;
              }
              if (line.startsWith('## ')) {
                return <h2 key={index}>{line.substring(3)}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index}>{line.substring(4)}</h3>;
              }
              if (line.startsWith('- **')) {
                const match = line.match(/- \*\*(.*?)\*\*: (.*)/);
                if (match) {
                  return (
                    <li key={index}>
                      <strong>{match[1]}</strong>: {match[2]}
                    </li>
                  );
                }
              }
              if (line.startsWith('- ')) {
                return <li key={index}>{line.substring(2)}</li>;
              }
              if (line.trim() === '') {
                return <br key={index} />;
              }
              return <p key={index}>{line}</p>;
            })}
          </div>
        </main>
      </div>
    </div>
  );
}