import Link from 'next/link';
import ContactLink from '../ContactLink';
import HeaderWrapper from './HeaderWrapper';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <HeaderWrapper>
      <nav className={styles.nav}>
        <div className={styles.nav__brand}>
          <Link href="/" className={styles.nav__logo}>
            Lucas Capriata
          </Link>
        </div>

        <div className={styles.nav__menu}>
          <Link href="/cv" className={styles.nav__link}>
            CV
          </Link>
          <ContactLink className={styles.nav__link}>
            Contact
          </ContactLink>
        </div>
      </nav>
    </HeaderWrapper>
  );
}
