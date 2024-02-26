import styles from './page.module.scss';
import TypeSwitcher from './components/typeSwitcher/TypeSwitcher'



export default function Home() {
  return (
    <main className={styles.main}>
      <span>Jeudi, 21 avr</span>
      <div className={styles.top + " flex space"}>
        <div className="col4">
          <h1>Qui travaille aujourd’hui ?</h1>
        </div>
        <div>
          menu
        </div>
      </div>
      <div className={styles.type_switchers + " flex center gap-l"}>
        <TypeSwitcher text="salle" active/>
        <TypeSwitcher text="cuisine"/>
        <TypeSwitcher text="service"/>
      </div>
    </main>
  );
}
