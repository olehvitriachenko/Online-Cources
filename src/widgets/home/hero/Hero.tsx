import Intro from "./ui/Intro";
import Partners from "../../../entities/partners/ui/Partners";
import poster from "public/images/hero/poster.jpg";

function Hero() {
  return (
    <section className="hero container">
      <header className="hero__header">
        <div className="hero__header-inner">
          <div className="hero__icon icon icon--blaze"></div>
          <h1 className="hero__title">
            <span className="hero__title-alt">Unlock</span> Your Creative
            Potential
          </h1>
        </div>
        <div className="hero__content">
          <div className="hero__content-title">
            <h2 className="hero__subtitle">
              with Online Design and Development Courses.
            </h2>
            <div className="hero__header-description">
              <p>Learn from Industry Experts and Enhance Your Skills.</p>
            </div>
          </div>
          <div className="hero__content-links">
            <a href="/courses" className="button hero__link">
              Explore Courses
            </a>
            <a href="/price" className="button button--light hero__link">
              Contact View Pricing
            </a>
          </div>
        </div>
      </header>
      <div className="hero__body">
        <div className="hero__partners">
          <Partners />
        </div>
        <div className="hero__intro">
          <Intro linkToPoster={poster} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
