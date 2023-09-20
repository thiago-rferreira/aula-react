import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Logo" width={64} height={64} />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/" passHref>
              <div className={styles.navItem}>Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <div className={styles.navItem}>About</div>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <div className={styles.navItem}>Contact</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
