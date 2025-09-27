'use client';

import { ReactNode } from 'react';
import styles from './Header.module.scss';

interface HeaderWrapperProps {
  children: ReactNode;
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  return (
    <header className={`${styles.header} ${styles['header--visible']}`}>
      <div className={styles.header__container}>{children}</div>
    </header>
  );
}
