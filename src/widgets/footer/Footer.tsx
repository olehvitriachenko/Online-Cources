import { Link } from "react-router";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner container">
          <h1 className="footer__title visually-hidden">Footer Section</h1>
          <div className="footer__main">
            <div className="footer__info">
              <span className="footer__logo logo">
                <p className="visually-hidden">Logo</p>
              </span>

              <div className="footer__contacts">
                <a
                  href="mailto:hello@skillbridge.com"
                  className="footer__contacts-link footer__contacts-link--email"
                >
                  <span className="icon icon--email"></span>{" "}
                  hello@skillbridge.com
                </a>
                <a
                  href="telto:+9191813232309"
                  className="footer__contacts-link footer__contacts-link--tel"
                >
                  <span className="icon icon--tel"></span> +91 91813 23 2309
                </a>
                <a
                  href="https://www.google.com/maps"
                  className="footer__contacts-link footer__contacts-link--map"
                >
                  <span className="icon icon--map"></span> Somewhere in the
                  World
                </a>
              </div>
            </div>
            <nav className="footer__nav">
              <div className="footer__links">
                <Link to="/" className="footer__link--title">
                  Home
                </Link>
                <div className="footer__links-inner">
                  <Link to="/" className="footer__link">
                    Our Benefits
                  </Link>
                  <Link to="/" className="footer__link">
                    Our Testimonials
                  </Link>
                  <Link to="/#questions" className="footer__link">
                    Our Faq
                  </Link>
                </div>
              </div>
              <div className="footer__links">
                <Link to="/" className="footer__link--title">
                  About Us
                </Link>
                <div className="footer__links-inner">
                  <Link to="/" className="footer__link">
                    Company
                  </Link>
                  <Link to="/" className="footer__link">
                    Achievements
                  </Link>
                  <Link to="/#questions" className="footer__link">
                    Our Goals
                  </Link>
                </div>
              </div>
              <div className="footer__soc1als soc1als">
                <h2 className="soc1als__title">Social Profiles</h2>
                <nav className="soc1als__nav">
                  <ul className="soc1als__list">
                    <li className="soc1als__item">
                      <a
                        href="https://www.facebook.com/"
                        className="soc1als__item soc1als-icon soc1als-icon--facebook"
                      >
                        <span className="visually-hidden">
                          Link to Facebook
                        </span>
                      </a>
                    </li>
                    <li className="soc1als__item">
                      <a
                        href="https://x.com/"
                        className="soc1als__item soc1als-icon soc1als-icon--twitter"
                      >
                        <span className="visually-hidden">
                          Link to X(Twitter)
                        </span>
                      </a>
                    </li>
                    <li className="soc1als__item">
                      <a
                        href="https://www.linkedin.com/"
                        className="soc1als__item soc1als-icon soc1als-icon--linkedin"
                      >
                        <span className="visually-hidden">
                          Link to LinkedIn
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </nav>
          </div>
          <div className="footer__copyright">
            <p>© 2023 Skillbridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
