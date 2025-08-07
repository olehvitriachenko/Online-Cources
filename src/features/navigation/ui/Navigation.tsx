import { Link, useLocation } from "react-router-dom";
import BurgerButton from "../../../shared/ui/BurgerButton";

function Navigation({ onBurgerClick }: { onBurgerClick: () => void }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div className="header__main">
        <nav className="header__nav">
          <div className="header__nav-inner">
            <div className="header__nav-left">
              <span className="header__logo logo">
                <p className="visually-hidden">Logo</p>
              </span>
              <ul className="header__nav-list hidden-mobile">
                <li className="header__item">
                  <Link
                    to="/"
                    className={`header__link${
                      currentPath === "/" ? " header__link--selected" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="header__item">
                  <Link
                    to="/courses"
                    className={`header__link${
                      currentPath === "/courses"
                        ? " header__link--selected"
                        : ""
                    }`}
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
                  >
                    About Us
                  </Link>
                </li>
                <li className="header__item">
                  <Link
                    to="/pricing"
                    className={`header__link${
                      currentPath === "/pricing"
                        ? " header__link--selected"
                        : ""
                    }`}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="header__item">
                  <Link
                    to="/contact"
                    className={`header__link${
                      currentPath === "/contact"
                        ? " header__link--selected"
                        : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="header__nav-list">
              <li className="header__item">
                <Link to="/signup" className="header__link">
                  Sign Up
                </Link>
              </li>
              <li className="header__item">
                <Link
                  to="/login"
                  className="button header__link header__link--accent"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <BurgerButton onClick={onBurgerClick} />
        </nav>
      </div>
    </>
  );
}

export default Navigation;
