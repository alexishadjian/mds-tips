"use client";

import styles from './date.module.scss';


const Dateajd = () => {      

        const today = new Date();
        const dateString = today.toLocaleDateString("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
        });
        return (
            <p className={styles.date}>{dateString}</p>
        );
  };
  
  export default Dateajd;