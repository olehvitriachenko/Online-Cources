import Section from "../Utils/Section";
import { BenefitsData, BenefitsList } from "../../../data/benefits";

function Benefits() {
  return (
    <Section
      title={BenefitsData.title}
      description={BenefitsData.description}
      link={BenefitsData.link}
      content={
        <>
          <ul className="section__list grid grid--2-cols">
            {BenefitsList.map((benefit, index) => {
              return (
                <li className="grid__item" key={index}>
                  <div className="enefits">
                    <h3 className="benefits__number">{benefit.number}</h3>
                    <div className="benefits__body">
                      <h4 className="benefits__title">{benefit.title}</h4>
                      <div className="benefits__description">
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                    <a href="" className="benefits__link button button--box">
                      <span className="visually-hidden">Check Benefit</span>
                      <span className="icon icon--arrow-right"></span>
                    </a>
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
