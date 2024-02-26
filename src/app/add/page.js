import Header from '../components/header/Header';
import Input from '../components/input/Input';
import Switcher from '../components/switcher/Switcher';


export default function Service() {
    return (
        <main>
  
            <Header title="Ajout d'employés" />

            <Input name="lastname" label="Nome" placeholder="Doe" />
            <Input name="firstname" label="Prénom" placeholder="John" />
        
            <Switcher icon1="bell" icon2="stove" /> 
  
        </main>
    );
  }