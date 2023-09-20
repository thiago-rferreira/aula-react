import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Logo" width={128} height={64} />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/" passHref>
              <div className={styles.navItem}>Home</div>
            </Link>
          </li>
          <li>
            <Link href="/estado" passHref>
              <div className={styles.navItem}>Aula State</div>
            </Link>
          </li>
          <li>
            <Link href="/input" passHref>
              <div className={styles.navItem}>Aula Input</div>
            </Link>
          </li>
          <li>
            <Link href="/objeto" passHref>
              <div className={styles.navItem}>Aula Objeto</div>
            </Link>
          </li>
          <li>
            <Link href="/objetoPlural" passHref>
              <div className={styles.navItem}>Aula Objeto Plural</div>
            </Link>
          </li>
          <li>
            <Link href="/aulaClasse" passHref>
              <div className={styles.navItem}>Aula Classe</div>
            </Link>
          </li>
          <li>
            <Link href="/exercicioClasse" passHref>
              <div className={styles.navItem}>Exercício Classe</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
