import styles from './page.module.scss';
import { datas } from "@/datas/datas";
import Menu from './components/menu/Menu';
import TypeSwitcher from './components/typeSwitcher/TypeSwitcher';
import UserCard from './components/userCard/UserCard';
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
          < Menu/>
        </div>
      </div>
      <div className={styles.type_switchers + " flex center gap-m"}>
          {datas.types?.map((type, i) => (
              <TypeSwitcher text={type} key={i} active={(i===0) ? true : false }/>
          ))}
      </div>
      <div className={styles.user_cards + " flex column gap-xs"}>
          {datas.users?.map((user, i) => (
              <UserCard key={i} name={user.name} />
          ))}
      </div>
      <BottomButton text="Suivant" />
    </main>
  );
}
