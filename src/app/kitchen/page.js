import Header from '../components/header/Header';
import TypeSwitchers from '../components/typeSwitchers/TypeSwitchers';
import UserCards from '../components/userCards/UserCards';
import BottomButton from '../components/button/Button';

export default function Kitchen() {
  return (
    <main>

      <Header title="Qui travaille aujourd’hui ?" />
      
      <TypeSwitchers activeIndex={1} />

      <UserCards activeType="cuisine" />

      <div className="bottom-container wrapper">
        <BottomButton text="Suivant" link="/service" />
      </div>

    </main>
  );
}