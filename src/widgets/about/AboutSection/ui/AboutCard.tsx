type aboutCard = {
  icon: string;
  title: string;
  description: string;
};

type Content = {
  title: string;
  description: string;
  aboutCards: aboutCard[];
};

type Props = {
  content: Content;
};

const AboutCard: React.FC<Props> = ({ content }: Props) => {
  return (
    <>
      <div className="about-us">
        <header className="about-us__header">
          <h2 className="about-us__title">{content.title}</h2>
          <div className="about-us__description">
            <p>{content.description}</p>
          </div>
        </header>
        <div className="about-us__body">
          <ul className="about-us__list grid grid--2-cols">
            {content.aboutCards.map((card, index) => (
              <li key={index} className="about-us__item about-card">
                <img src={card.icon} className="about-card__icon" />
                <div className="about-card__body">
                  <h3 className="about-card__title">{card.title}</h3>
                  <div className="about-card__description">
                    <p>{card.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
