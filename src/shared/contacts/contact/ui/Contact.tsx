function Contact() {
  return (
    <>
      <div className="contact">
        <a
          href="mailto:hello@skillbridge.com"
          className="contact__link contact__link--email"
        >
          <span className="icon icon--email icon--email-border"></span>{" "}
          hello@skillbridge.com
        </a>
      </div>
      <div className="contact">
        <a
          href="telto:+9191813232309"
          className="contact__link contact__link--tel"
        >
          <span className="icon icon--tel icon--tel-border"></span> +91 91813 23
          2309
        </a>
      </div>
      <div className="contact">
        <a
          href="https://www.google.com/maps"
          className="contact__link contact__link--map"
        >
          <span className="icon icon--map icon--map-border"></span> Somewhere in
          the World
        </a>
      </div>
      <div className="contact contact__soc1als">
        <p className="soc1als__text">Social Profiles</p>
        <nav className="soc1als__nav">
          <ul className="soc1als__list">
            <li className="soc1als__item">
              <a
                href="https://www.facebook.com/"
                className="soc1als__item soc1als-icon soc1als-icon--facebook"
              >
                <span className="visually-hidden">Link to Facebook</span>
              </a>
            </li>
            <li className="soc1als__item">
              <a
                href="https://x.com/"
                className="soc1als__item soc1als-icon soc1als-icon--twitter"
              >
                <span className="visually-hidden">Link to X(Twitter)</span>
              </a>
            </li>
            <li className="soc1als__item">
              <a
                href="https://www.linkedin.com/"
                className="soc1als__item soc1als-icon soc1als-icon--linkedin"
              >
                <span className="visually-hidden">Link to LinkedIn</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Contact;
