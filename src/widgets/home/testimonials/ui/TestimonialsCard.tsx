type Testimonial = {
  id: string;
  info: string;
  icon: string;
  author: string;
  link: string;
};

type Props = {
  testimonial: Testimonial;
};

const testimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <>
      <li key={testimonial.id} className="testimonial-card">
        <div className="testimonial-card__description">
          <p>{testimonial.info}</p>
        </div>
        <div className="testimonial-card__content">
          <div className="testimonial-card__author">
            <img
              src={testimonial.icon}
              className="testimonial-card__author-logo"
              alt="author photo"
            />
            <span className="testimonial-card__author-name">
              {testimonial.author}
            </span>
          </div>
          <a href="/" className="testimonial-card__link button button--view">
            {testimonial.link}
          </a>
        </div>
      </li>
    </>
  );
};

export default testimonialCard;
