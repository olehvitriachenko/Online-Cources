import Section from "../../../shared/ui/Section";
import { BenefitsData, BenefitsList } from "./config/benefits";

function Benefits() {
  return (
    <Section
      title={BenefitsData.title}
      description={BenefitsData.description}
      link={BenefitsData.link}
      content={
        <>
          <ul className="section__list grid grid--3-cols">
            {BenefitsList.map((benefit, index) => {
              return (
                <li className="grid__item benefits" key={index}>
                  <div className="benefits__body">
                    <h3 className="benefits__number">{benefit.number}</h3>
                    <div className="benefits__body-inner">
                      <h4 className="benefits__title">{benefit.title}</h4>
                      <div className="benefits__description">
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                    <div className="benefits__links">
                      <a href="" className="button button--box benefits__link">
                        <span className="visually-hidden">Check Benefit</span>
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      }
    />
  );
}

export default Benefits;
