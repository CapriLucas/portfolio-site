'use client';

import styles from './cv.module.scss';

export default function CVPage() {
  const handleDownload = () => {
    // This will be implemented when you have a PDF file
    // For now, we'll create a simple window.print() for PDF generation
    window.print();
  };

  return (
    <div className={styles.cv}>
      <div className={styles.cv__container}>
        <header className={styles.cv__header}>
          <h1 className={styles.cv__title}>Lucas Capriata</h1>
          <p className={styles.cv__subtitle}>Full-Stack Developer</p>
          <button className={styles.cv__download} onClick={handleDownload}>
            📄 Download PDF
          </button>
        </header>

        <section className={styles.cv__section}>
          <h2 className={styles.cv__sectionTitle}>Contact Information</h2>
          <div className={styles.cv__contact}>
            <p>📧 hello@example.com</p>
            <p>🐙 github.com/username</p>
            <p>💼 linkedin.com/in/username</p>
          </div>
        </section>

        <section className={styles.cv__section}>
          <h2 className={styles.cv__sectionTitle}>Professional Experience</h2>
          <div className={styles.cv__experience}>
            <div className={styles.cv__job}>
              <h3>Senior Full-Stack Developer</h3>
              <p className={styles.cv__company}>Tech Solutions Inc. • 2022 - Present</p>
              <ul className={styles.cv__responsibilities}>
                <li>Leading development of scalable web applications serving 10k+ users</li>
                <li>Architected microservices infrastructure and mentored junior developers</li>
                <li>Improved application performance by 40% and reduced deployment time by 60%</li>
              </ul>
            </div>

            <div className={styles.cv__job}>
              <h3>Full-Stack Developer</h3>
              <p className={styles.cv__company}>Digital Agency Co. • 2020 - 2022</p>
              <ul className={styles.cv__responsibilities}>
                <li>Developed custom web solutions for clients across various industries</li>
                <li>Collaborated with design teams to create pixel-perfect, responsive interfaces</li>
                <li>Delivered 15+ client projects on time with 98% satisfaction rate</li>
              </ul>
            </div>

            <div className={styles.cv__job}>
              <h3>Frontend Developer</h3>
              <p className={styles.cv__company}>StartupXYZ • 2019 - 2020</p>
              <ul className={styles.cv__responsibilities}>
                <li>Built responsive web applications from ground up</li>
                <li>Implemented modern development workflows and testing strategies</li>
                <li>Reduced bug reports by 50% through comprehensive testing implementation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.cv__section}>
          <h2 className={styles.cv__sectionTitle}>Technical Skills</h2>
          <div className={styles.cv__skills}>
            <div className={styles.cv__skillCategory}>
              <h4>Frontend</h4>
              <p>React, Next.js, TypeScript, SASS, CSS</p>
            </div>
            <div className={styles.cv__skillCategory}>
              <h4>Backend</h4>
              <p>Node.js, Express, PostgreSQL, MongoDB</p>
            </div>
            <div className={styles.cv__skillCategory}>
              <h4>Tools & DevOps</h4>
              <p>Docker, AWS, Git, Jest, CI/CD</p>
            </div>
          </div>
        </section>

        <section className={styles.cv__section}>
          <h2 className={styles.cv__sectionTitle}>Education</h2>
          <div className={styles.cv__education}>
            <h3>Computer Science Degree</h3>
            <p className={styles.cv__institution}>University Name • 2015 - 2019</p>
          </div>
        </section>
      </div>
    </div>
  );
}