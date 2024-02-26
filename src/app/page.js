import styles from './page.module.scss';
import Header from './components/header/Header';
import TypeSwitchers from './components/typeSwitchers/TypeSwitchers';
import UserCards from './components/userCards/UserCards';
import Button from './components/button/Button';

export default function Home() {
  return (
    <main className={styles.main}>

      <Header title="Qui travaille aujourd’hui ?" />
      
      <TypeSwitchers activeIndex={0} />

      <UserCards activeType="salle" />

      <div className="bottom-container wrapper">
        <Button text="Suivant" link="/kitchen" />
      </div>

    </main>
  );
}