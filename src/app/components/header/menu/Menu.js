"use client";

import { useState } from 'react';
import styles from './menu.module.scss';     
import Svg from "@/app/components/Svg";


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
        
        <div className={styles.elementMenu}>
          <div className={styles.Svg}><Svg icon="exit" /></div>
          <a className={styles.link} href="#">Service</a>
        </div>
        
        
        <div className={styles.elementMenu}>
          <div className={styles.Svg}><Svg icon="exit" /></div>
          <a className={styles.link} href="#">Administrateur</a>
          
        </div>
        
        
        <div className={styles.bottomElement}>
          <a className={styles.endservice} href="#">Fermer le service</a>
          <div className={styles.Svg}><Svg icon="exit" /></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;