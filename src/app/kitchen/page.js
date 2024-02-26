import { datas } from "@/datas/datas";
import Menu from '../components/menu/Menu';
import TypeSwitchers from '../components/typeSwitchers/TypeSwitchers';
import UserCards from '../components/userCards/UserCards';
import BottomButton from '../components/bottomButton/BottomButton';

export default function kitchen() {
  return (
    <main>

      
      <TypeSwitchers activeIndex={1} />

      <UserCards />

      <BottomButton text="Suivant" link="/cuisine" />

    </main>
  );
}