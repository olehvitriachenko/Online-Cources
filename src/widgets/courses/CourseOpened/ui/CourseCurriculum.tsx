import type { CourseProgramItem } from "../CourseOpenedHero";
import { useState } from "react";

type Props = {
  courseProgramList: CourseProgramItem[];
};

function CourseCurriculum({ courseProgramList }: Props) {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  return (
    <div className="section__body-inner grid grid--2-cols">
      {courseProgramList.map((courseItem) => (
        <div className="course-curriculum">
          <h2 className="course-curriculum__number number">
            {courseItem.number}
          </h2>
          <h3 className="course-curriculum__title">{courseItem.title}</h3>
          <ul className="course-curriculum__list">
            {courseItem.lessonsList.map((lesson) => (
              <li
                key={lesson.id}
                className={`course-curriculum__item lesson ${
                  activeLessonId === lesson.id ? "lesson--active" : ""
                }`}
                onClick={() => setActiveLessonId(lesson.id)}
              >
                <div className="lesson__inner">
                  <h4 className="lesson__title">{lesson.title}</h4>
                  <div className="lesson__description">
                    <p>{lesson.lessonNumber}</p>
                  </div>
                </div>
                <p className="lesson__duration">
                  <span className="icon icon--time"></span>
                  {lesson.duration}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CourseCurriculum;
