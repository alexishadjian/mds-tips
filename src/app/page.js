import styles from './page.module.scss';
import { datas } from "@/datas/datas";
import Menu from './components/menu/Menu';
import TypeSwitchers from './components/typeSwitchers/TypeSwitchers';
import UserCards from './components/userCards/UserCards';
import BottomButton from './components/bottomButton/BottomButton';

export default function Home() {
  return (
    <main className={styles.main}>
      <span>Jeudi, 21 avr</span>
      <div className={styles.top + " flex space"}>
        <div className="col4">
          <h1>Qui travaille aujourd’hui ?</h1>
        </div>
        <div>
          <Menu />
        </div>
      </div>
      
      <TypeSwitchers activeIndex={0} />

      <UserCards />

      <BottomButton text="Suivant" link="/kitchen" />

    </main>
  );
}