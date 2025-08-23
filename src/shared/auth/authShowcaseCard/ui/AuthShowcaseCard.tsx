type Showcase = {
  id: number;
  description: string;
  name: string;
  icon: string;
  linkText: string;
};

type Props = {
  showcase: Showcase;
  className: string;
};

function AuthShowcaseCard({ showcase, className }: Props) {
  return (
    <>
      <div className={`showcase-card ${className}`}>
        <div className="showcase-card__head">
          <div className="showcase-card__description">
            <p>{showcase.description}</p>
          </div>
        </div>
        <div className="showcase-card__body">
          <div className="showcase-card__author">
            <img
              src={showcase.icon}
              alt="icon"
              className="showcase-card__author-icon"
            />
            <h3 className="showcase-card__author-name">{showcase.name}</h3>
          </div>
          <a href="/" className="showcase__link button button--gray">
            {showcase.linkText}
          </a>
        </div>
      </div>
    </>
  );
}

export default AuthShowcaseCard;
