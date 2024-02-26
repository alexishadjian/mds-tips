import styles from './tip.module.scss';
import Header from '../components/header/Header';
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import Tip from '../components/tipAmount/TipAmount';


export default function Service() {
    return (
        <main>
  
            <Header title="Ajouter un pourboire" />

            <Input name="table" label="Nom de table" placeholder="cerise" />
            <Input name="amount" label="Montant du pourboire" placeholder="3" />
        
            <div className={styles.amounts + " flex center gap-m"}>
                <Tip amount={0.50} />
                <Tip amount={1.00} />
                <Tip amount={2.00} />
            </div>

            <Button text="Ajouter le pourboire" link="/add" />
  
        </main>
    );
  }