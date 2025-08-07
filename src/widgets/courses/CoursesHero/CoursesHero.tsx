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
          {coursesCardData.map((card) => (
            <HeroCard card={card} key={card.id} />
          ))}
        </>
      }
    />
  );
}

export default CoursesHero;
