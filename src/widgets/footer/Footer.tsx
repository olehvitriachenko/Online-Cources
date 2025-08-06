function Footer() {
  return (
    <>
      <footer className="footer container">
        <h1 className="footer__title visually-hidden">Footer Section</h1>
        <div className="footer__main">
          <div className="footer__info">
            <span className="footer__logo logo">
              <p className="visually-hidden">Logo</p>
            </span>

            <a
              href="mailto:hello@skillbridge.com"
              className="footer__info-email"
            >
              <span className="icon icon--email"></span> hello@skillbridge.com
            </a>
            <a href="telto:+9191813232309" className="footer__info-tel">
              <span className="icon icon--tel"></span> +91 91813 23 2309
            </a>
            <a href="https://www.google.com/maps" className="footer__info-map">
              <span className="icon icon--map"></span> Somewhere in the World
            </a>
          </div>
          <nav className="footer__nav">
            <div className="footer__home"></div>
            <div className="footer__about"></div>
            <div className="footer__soc1als"></div>
          </nav>
        </div>
        <div className="footer__copyright">
          <p>© 2023 Skillbridge. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
