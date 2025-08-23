import AuthShowcaseCard from "../../authShowcaseCard/ui/AuthShowcaseCard";
import { showcaseData } from "../../authShowcaseCard/config/data";
import { useState } from "react";

function AuthSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? showcaseData.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setIndex((prev) => (prev === showcaseData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="auth-slider">
      <div className="auth-slider__content">
        {showcaseData.map((showcase, i) => (
          <AuthShowcaseCard
            key={showcase.id}
            showcase={showcase}
            className={i === index ? "active" : ""}
          />
        ))}
      </div>
      <div className="auth-slider__buttons">
        <button className="button button--slide" onClick={prevSlide}>
          <span className="icon icon--arrow-slide"></span>
        </button>
        <button className="button button--slide" onClick={nextSlide}>
          <span className="icon icon--arrow-slide icon--arrow-slide-right"></span>
        </button>
      </div>
    </div>
  );
}

export default AuthSlider;
