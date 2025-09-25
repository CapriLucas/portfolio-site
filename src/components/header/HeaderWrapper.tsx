'use client';

import { useState, useEffect, ReactNode } from 'react';
import styles from './Header.module.scss';

interface HeaderWrapperProps {
  children: ReactNode;
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  // By default, the header is visible, change this
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 50);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isVisible ? styles['header--visible'] : ''}`}
    >
      <div className={styles.header__container}>{children}</div>
    </header>
  );
}
