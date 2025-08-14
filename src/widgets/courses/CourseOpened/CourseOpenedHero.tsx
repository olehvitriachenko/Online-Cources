import Section from "../../../shared/ui/Section";
import Intro from "../../home/hero/ui/Intro";
import CourseCurriculum from "./ui/CourseCurriculum";
import poster from "public/images/course/course-poster.jpg";

type Lesson = {
  id: string;
  title: string;
  lessonNumber: string;
  duration: string;
};

export type CourseProgramItem = {
  number: string;
  title: string;
  lessonsList: Lesson[];
};

type Course = {
  id: string;
  title: string;
  description: string;
  courseProgramList: CourseProgramItem[];
};

type Props = {
  course: Course;
};

function CourseOpenedHero({ course }: Props) {
  return (
    <Section
      title={course.title}
      description={course.description}
      tabs={false}
      hasLink={false}
      className="section__body--courses-opened"
      content={
        <>
          <Intro linkToPoster={poster} className="intro__video--large" />
          <CourseCurriculum courseProgramList={course.courseProgramList} />
        </>
      }
    />
  );
}

export default CourseOpenedHero;
