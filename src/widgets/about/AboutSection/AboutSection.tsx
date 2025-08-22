import JoinUs from "../../../entities/joinus/JoinUs";
import Section from "../../../shared/ui/Section";
import { aboutSectionData, aboutSectionDataCards } from "./config/about";
import AboutCard from "./ui/AboutCard";

function AboutSection() {
  return (
    <Section
      title={aboutSectionData.title}
      description={aboutSectionData.description}
      tabs={false}
      hasLink={false}
      className="section__body--about"
      content={
        <>
          {aboutSectionDataCards.map((content) => (
            <AboutCard content={content} />
          ))}
          <JoinUs />
        </>
      }
    />
  );
}

export default AboutSection;
