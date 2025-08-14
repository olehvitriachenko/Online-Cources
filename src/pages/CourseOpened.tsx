import CourseOpenedHero from "../widgets/courses/CourseOpened/CourseOpenedHero";
import { useSearchParams } from "react-router-dom";
import { courseOpenedSectionData } from "../widgets/courses/CourseOpened/config/courseOpened";
import { useSсrollToTop } from "../shared/lib/useScrollToTop";

function CourseOpened() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const course = courseOpenedSectionData.find((item) => item.id === id);

  useSсrollToTop(id);

  if (!course) return null;
  return <CourseOpenedHero course={course} />;
}

export default CourseOpened;
