type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  author: string;
};
type Props = { course: Course };
const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <li className="grid__item course">
      <header className="course__header">
        <img src={course.image} alt="Course Image" className="course__image" />
        <div className="course__info">
          <div className="course__about">
            <span className="course__duration">{course.duration}</span>
            <span className="course__level">{course.level}</span>
          </div>
          <span className="course__author"></span>
        </div>
      </header>
      <div className="course__body">
        <h3 className="course__title">{course.title}</h3>
        <div className="course__description">
          <p>{course.description}</p>
        </div>
      </div>
    </li>
  );
};
export default CourseCard;
