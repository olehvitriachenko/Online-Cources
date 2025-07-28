import React from "react";
import Modal from "react-modal";
import { Link, useLocation } from "react-router-dom";
import Button from "../../atoms/Button/Button";

type ModalProps = {
  isOpen: boolean;
  onRequestClose?: () => void;
  contentLabel?: string;
};
Modal.setAppElement("#root");

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="modal"
    >
      <div className="modal__control">
        <Button
          onClick={onRequestClose || (() => {})}
          className="modal__close"
          children={
            <>
              <span className="visually-hidden">Close Modal Menu</span>
            </>
          }
        />
      </div>
      <div className="modal__content">
        <ul className="header__nav-list header__nav-list--modal visible-mobile">
          <li className="header__item">
            <Link
              to="/"
              className={`header__link${
                currentPath === "/" ? " header__link--selected" : ""
              }`}
              onClick={onRequestClose}
            >
              Home
            </Link>
          </li>
          <li className="header__item">
            <Link
              to="/courses"
              className={`header__link${
                currentPath === "/courses" ? " header__link--selected" : ""
              }`}
              onClick={onRequestClose}
            >
              Courses
            </Link>
          </li>
          <li className="header__item">
            <Link
              to="/about"
              className={`header__link${
                currentPath === "/about" ? " header__link--selected" : ""
              }`}
              onClick={onRequestClose}
            >
              About Us
            </Link>
          </li>
          <li className="header__item">
            <Link
              to="/pricing"
              className={`header__link${
                currentPath === "/pricing" ? " header__link--selected" : ""
              }`}
              onClick={onRequestClose}
            >
              Pricing
            </Link>
          </li>
          <li className="header__item">
            <Link
              to="/contact"
              className={`header__link${
                currentPath === "/contact" ? " header__link--selected" : ""
              }`}
              onClick={onRequestClose}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default ModalComponent;
