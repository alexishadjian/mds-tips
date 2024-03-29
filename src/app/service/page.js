import styles from './service.module.scss';
import Header from '../components/header/Header';
import TypeSwitchers from '../components/typeSwitchers/TypeSwitchers';
import UserCards from '../components/userCards/UserCards';
import Button from '../components/button/Button';
import Switcher from '../components/switcher/Switcher';

export default function Service() {
  return (
    <main className={styles.main}>

        <Header title="Récapitulatif du service" />
        
          <div className="wrapper">
              <TypeSwitchers activeIndex={2} />

              <h2 className={styles.color_title}>Employés sélectionnés</h2>
          </div>
            
          <UserCards activeType="cuisine" selected />

          <div className="bottom-container">
            <div className="wrapper flex column gap-l center-y">
              <h2 className={styles.color_title + " m-0"}>Services</h2>
              <Switcher icon1="sun" icon2="moon" isTheme />
              <h2 className="m-0">midi</h2>
              <Button text="Commencer le service !" link="/tip" picto={false} />
            </div>
          </div>

      </main>
  );
}