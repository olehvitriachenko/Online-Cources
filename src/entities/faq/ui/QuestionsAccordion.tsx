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
    <details className="accordion" open={isOpen}>
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
      <div className="accordion__description">
        <p>{accordion.description}</p>
      </div>
      <nav className="accordion__nav">
        <a href="/" className="accordion__link">
          {accordion.linkInfo}
        </a>
      </nav>
    </details>
  );
};

export default QuestionsAccordion;
