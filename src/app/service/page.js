import styles from './service.module.scss';
import Header from '../components/header/Header';
import TypeSwitchers from '../components/typeSwitchers/TypeSwitchers';
import UserCards from '../components/userCards/UserCards';
import Button from '../components/button/Button';
import ThemeSwitcher from '../components/themeSwitcher/ThemeSwitcher';

export default function Service() {
  return (
    <main className={styles.main}>

        <Header title="Récapitulatif du service" />
      
        <div className="wrapper">
            <TypeSwitchers activeIndex={2} />

            <h2 className={styles.color_title}>Employés sélectionnés</h2>

            <UserCards activeType="cuisine" selected />
        </div>

        <div className="bottom-container wrapper flex column gap-l center-y">
            <h2 className={styles.color_title + " m-0"}>Services</h2>
            <ThemeSwitcher />
            <h2 className="m-0">midi</h2>
            <Button text="Commencer le service !" link="/tip" />
        </div>

    </main>
  );
}