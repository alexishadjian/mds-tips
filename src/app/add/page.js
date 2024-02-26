// import styles from './tip.module.scss';
import Header from '../components/header/Header';
import Input from '../components/input/Input';


export default function Service() {
    return (
        <main>
  
            <Header title="Ajout d'employés" />

            <Input name="lastname" label="Nome" placeholder="Doe" />
            <Input name="firstname" label="Prénom" placeholder="John" />
        
            //Switcher
            
  
        </main>
    );
  }