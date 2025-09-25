'use client';

import { ReactNode } from 'react';
import styles from './Hero.module.scss';

interface HeroWrapperProps {
  children: ReactNode;
}

export default function HeroWrapper({ children }: HeroWrapperProps) {
  return (
    <main className={styles.hero}>
      {children}
    </main>
  );
}
