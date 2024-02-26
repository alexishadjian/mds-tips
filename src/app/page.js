import styles from './page.module.scss';


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
    </main>
  );
}
