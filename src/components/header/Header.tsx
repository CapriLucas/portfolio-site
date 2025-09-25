import { getDictionary } from '@/lib/i18n';
import Link from 'next/link';
import HeaderWrapper from './HeaderWrapper';
import styles from './Header.module.scss';

export default async function Header() {
  const dict = await getDictionary('en');

  return (
    <HeaderWrapper>
      <nav className={styles.nav}>
        <div className={styles.nav__brand}>
          <Link href="/" className={styles.nav__logo}>
            Lucas Capriata
          </Link>
        </div>

        <div className={styles.nav__menu}>
          <Link href="/" className={styles.nav__link}>
            {dict.navigation.home}
          </Link>
          <Link href="/about" className={styles.nav__link}>
            {dict.navigation.about}
          </Link>
          <Link href="/projects" className={styles.nav__link}>
            {dict.navigation.projects}
          </Link>
          <Link href="/experience" className={styles.nav__link}>
            {dict.navigation.experience}
          </Link>
          <Link href="/contact" className={styles.nav__link}>
            {dict.navigation.contact}
          </Link>
        </div>
      </nav>
    </HeaderWrapper>
  );
}
