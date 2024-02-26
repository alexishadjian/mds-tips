"use client";

import { useState } from 'react';
import styles from './menu.module.scss';            

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
        <div className={styles.closeIcon} onClick={toggleMenu}>X</div>
        <a href="#">Service</a>
        <a href="#">Administrateur</a>
        <a className={styles.endservice} href="#">Terminer le service</a>
      </div>
    </div>
  );
};

export default Menu;