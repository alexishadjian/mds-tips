import Header from '../components/header/Header';
import TypeSwitchers from '../components/typeSwitchers/TypeSwitchers';
import UserCards from '../components/userCards/UserCards';
import BottomButton from '../components/bottomButton/BottomButton';

export default function kitchen() {
  return (
    <main>

      <Header title="Qui travaille aujourd’hui ?" />
      
      <TypeSwitchers activeIndex={1} />

      <UserCards activeType="cuisine" />

      <BottomButton text="Suivant" link="/cuisine" />

    </main>
  );
}