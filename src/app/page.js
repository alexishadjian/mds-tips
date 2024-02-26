import styles from './page.module.scss';
import Header from './components/header/Header';
import TypeSwitchers from './components/typeSwitchers/TypeSwitchers';
import UserCards from './components/userCards/UserCards';
import BottomButton from './components/bottomButton/BottomButton';

export default function Home() {
  return (
    <main className={styles.main}>

      <Header title="Qui travaille aujourd’hui ?" />
      
      <TypeSwitchers activeIndex={0} />

      <UserCards activeType="salle" />

      <BottomButton text="Suivant" link="/kitchen" />

    </main>
  );
}