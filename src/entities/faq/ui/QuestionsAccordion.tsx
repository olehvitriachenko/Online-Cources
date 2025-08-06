type Accordion = {
  title: string;
  description: string;
  linkInfo: string;
};

type Props = { accordion: Accordion; isOpen: boolean; onToggle: () => void };

const QuestionsAccordion: React.FC<Props> = ({
  accordion,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="accordion-group">
      <div className="accordion">
        <details className="accordion__details" open={isOpen}>
          <summary
            className="accordion__summary"
            onClick={(e) => {
              e.preventDefault();
              onToggle();
            }}
          >
            <h2 className="accordion__title">{accordion.title}</h2>
            <span className="accordion__marker marker"></span>
          </summary>
        </details>
        <div className="accordion__definition" role="definition">
          <div className="accordion__definition-inner">
            <div className="accordion__definition-body">
              <p>{accordion.description}</p>
              <a href="/" className="accordion__link button button--faq">
                {accordion.linkInfo}
                <span className="button--faq-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAccordion;
