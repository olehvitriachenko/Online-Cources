type PricingType = {
  type: string;
  price: string;
  termin: string;
  linkText: string;
  feature: string;
  featuresList: { include: boolean; feature: string }[];
};
type Props = { pricingType: PricingType[] };

const PricingList: React.FC<Props> = ({ pricingType }) => {
  return (
    <>
      <div className="pricing-card">
        {pricingType.map((pricing, index) => (
          <div className="pricing-card__card" key={index}>
            <h3 className="pricing-card__title">{pricing.type} Plan</h3>
            <div className="pricing-card__inner">
              <p>
                <span className="pricing-card__price">{pricing.price}</span>
                <span className="pricing-card__termin">{pricing.termin}</span>
              </p>
            </div>
            <div className="pricing-card__content">
              <div className="pricing-card__features features">
                <h4 className="features__title">{pricing.feature}</h4>
                <ul className="features__list">
                  {pricing.featuresList.map((feature, index) => {
                    return (
                      <li className="features__item" key={index}>
                        <span
                          className={`features__item-content feature-content ${
                            feature.include
                              ? "feature-content--included"
                              : "feature-content--excluded"
                          }`}
                        >
                          <span className="visually-hidden">
                            Is including = {feature.include}
                          </span>
                        </span>
                        <span className="features__item-description">
                          {feature.feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <a href="/" className="features__link">
                {pricing.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default PricingList;
