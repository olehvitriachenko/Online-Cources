import Section from "../../../shared/ui/Section";
import { coursesInformation, coursesCardData } from "./config/courses";
import HeroCard from "./ui/HeroCard";

function CoursesHero() {
  return (
    <Section
      hasLink={false}
      title={coursesInformation.title}
      description={coursesInformation.description}
      content={
        <>
          <div className="section__courses">
            {coursesCardData.map((card) => (
              <HeroCard card={card} key={card.id} />
            ))}
          </div>
        </>
      }
    />
  );
}

export default CoursesHero;
