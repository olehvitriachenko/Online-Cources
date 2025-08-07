import Section from "../../../shared/ui/Section";
import { CoursesData, CoursesList } from "./config/courses";
import CourseCard from "./ui/CourseCard";

function CoursesSection() {
  return (
    <Section
      title={CoursesData.title}
      description={CoursesData.description}
      link={CoursesData.link}
      id="courses"
      content={
        <>
          <ul className="section__list grid grid--2-cols">
            {CoursesList.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </ul>
        </>
      }
    />
  );
}

export default CoursesSection;
