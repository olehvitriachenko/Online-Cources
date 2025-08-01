import ModalComponent from "../../features/navigation/ui/ModalNavigation";
import Navigation from "../../features/navigation/ui/Navigation";
import { useState } from "react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__extra">
          <a href="#" className="header__extra-faded">
            <span className="icon icon--arrow">
              Free Courses 🌟 Sale Ends Soon, Get It Now
            </span>
          </a>
        </div>
        <div className="header__body container">
          <Navigation onBurgerClick={() => setIsModalOpen(true)} />
        </div>
      </header>

      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Header;
