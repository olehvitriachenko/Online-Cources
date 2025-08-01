import type { ReactNode } from "react";

type SectionProps = Partial<{
  title: string;
  description: string;
  link: string;
  screenReader: string;
  content: ReactNode;
  className: string;
  tabs: ReactNode;
}>;

// Зробити опшионал

const Section: React.FC<SectionProps> = ({
  title,
  description,
  link,
  content,
  screenReader = "Section",
  className = "",
  tabs,
}: SectionProps) => {
  return (
    <section className={`section container `}>
      <h1 className="visually-hidden">{screenReader}</h1>
      <header className={`section__header `}>
        <h2 className={`section__title h1`}>{title}</h2>
        <div className={`section__header-content `}>
          <div className={`section__description`}>
            <p>{description}</p>
          </div>
          {!tabs && (
            <a href="" className={`section__link button button--view `}>
              {link}
            </a>
          )}

          {tabs && <div className="section__tabs">{tabs}</div>}
        </div>
      </header>
      <div className={`section__body ${className}`}>{content}</div>
    </section>
  );
};
export default Section;
