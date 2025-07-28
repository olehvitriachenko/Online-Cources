import Intro from "../../molecules/Hero/Intro";
import Partners from "../../molecules/Hero/Partners";

function Hero() {
  return (
    <section className="hero">
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
      <div className="hero__body сontainer">
        <div className="hero__partners">
          <Partners />
        </div>
        <div className="hero__intro">
          <Intro />
        </div>
      </div>
    </section>
  );
}

export default Hero;
