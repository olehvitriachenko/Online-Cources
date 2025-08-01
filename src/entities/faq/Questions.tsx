import { useState } from "react";
import { questionsData, questionsAccordion } from "./config/questions";
import QuestionsAccordion from "./ui/QuestionsAccordion";

function Questions() {
  const [isActiveIndex, setIsActiveIndex] = useState<number | null>(null);
  return (
    <section className="questions container">
      <div className="questions__inner">
        <header className="questions__header">
          <h1 className="questions__title">{questionsData.title}</h1>
          <div className="questions__description">
            {questionsData.description}
          </div>
          <a href="/" className="questions__link button button--view">
            {questionsData.linkFaq}
          </a>
        </header>
        <div className="questions__body">
          {questionsAccordion.map((accordion, index) => (
            <QuestionsAccordion
              accordion={accordion}
              key={index}
              isOpen={isActiveIndex === index}
              onToggle={() =>
                setIsActiveIndex(isActiveIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Questions;
