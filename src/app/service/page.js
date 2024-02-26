import styles from './style.module.scss';
import Header from '../components/header/Header';
import TypeSwitchers from '../components/typeSwitchers/TypeSwitchers';
import UserCards from '../components/userCards/UserCards';
import BottomButton from '../components/button/Button';
import ThemeSwitcher from '../components/themeSwitcher/ThemeSwitcher';

export default function Service() {
  return (
    <main>

        <Header title="Récapitulatif du service" />
      
        <div className="wrapper">
            <TypeSwitchers activeIndex={2} />

            <h2 className={styles.color_title}>Employés sélectionnés</h2>

            <UserCards activeType="cuisine" />
        </div>

        <div className="bottom-container wrapper">
            <h2 className={styles.color_title}>Services</h2>
            <ThemeSwitcher />
            <BottomButton text="Commencer le service !" link="/cuisine" />
        </div>

    </main>
  );
}