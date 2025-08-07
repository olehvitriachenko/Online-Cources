type Card = {
  title: string;
  description: string;
  courseLink: string;
  id: string;
  courseImages: {
    img: string;
  }[];
  duration: string;
  level: string;
  author: string;
  subtitle: string;
  courseRoadmap: { number: string; description: string }[];
};

type Props = {
  card: Card;
};

export default function HeroCard({ card }: Props) {
  return (
    <div className="course-card">
      <header className="course-card__header">
        <div className="course-card__header-inner">
          <div className="course-card__header-details">
            <h2 className="course-card__title">{card.title}</h2>
            <div className="courses-card__description">
              <p>{card.description}</p>
            </div>
          </div>
          <a href="/" className="course-card__link button button--view">
            {card.courseLink}
          </a>
        </div>
        <ul className="course-card__header-list">
          {card.courseImages.map((image) => (
            <li className="course-card__header-item">
              <img
                src={image.img}
                alt="course image"
                className="course-card__image"
              />
            </li>
          ))}
        </ul>
        <div className="course-card__info">
          <div className="course-card__info-inner">
            <span className="course-card__info-duration badge">
              {card.duration}
            </span>
            <span className="course-card__info-level badge">{card.level}</span>
          </div>
          <span className="course-card__info-author">{card.author}</span>
        </div>
      </header>
      <div className="course-card__curriculum curriculum">
        <div className="curriculum__head">
          <h3 className="curriculum__title">{card.subtitle}</h3>
        </div>
        <ul className="curriculum__list">
          {card.courseRoadmap.map((curriculum) => (
            <li className="curriculum__item">
              <h4 className="curriculum__sutbitle number number--mini">
                {curriculum.number}
              </h4>
              <div className="curriculum__description">
                <p>{curriculum.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
