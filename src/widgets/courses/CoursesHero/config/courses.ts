import img1_1 from "public/images/course/CoursesHero/card-1/1.jpg";
import img2_1 from "public/images/course/CoursesHero/card-1/2.jpg";
import img3_1 from "public/images/course/CoursesHero/card-1/3.jpg";
import img1_2 from "public/images/course/CoursesHero/card-2/1.jpg";
import img2_2 from "public/images/course/CoursesHero/card-2/2.jpg";
import img3_2 from "public/images/course/CoursesHero/card-2/3.jpg";
import img1_3 from "public/images/course/CoursesHero/card-3/1.jpg";
import img2_3 from "public/images/course/CoursesHero/card-3/2.jpg";
import img3_3 from "public/images/course/CoursesHero/card-3/3.jpg";
import img1_4 from "public/images/course/CoursesHero/card-4/1.jpg";
import img2_4 from "public/images/course/CoursesHero/card-4/2.jpg";
import img3_4 from "public/images/course/CoursesHero/card-4/3.jpg";
import img1_5 from "public/images/course/CoursesHero/card-5/1.jpg";
import img2_5 from "public/images/course/CoursesHero/card-5/2.jpg";
import img3_5 from "public/images/course/CoursesHero/card-5/3.jpg";

export const coursesInformation = {
  title: "Online Courses on Design and Development",
  description:
    "Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.",
};

export const coursesCardData = [
  {
    title: `Web Design Fundamentals`,
    description: `Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.`,
    courseLink: `View Course`,
    id: "1",
    courseImages: [{ img: img1_1 }, { img: img2_1 }, { img: img3_1 }],

    duration: "4 Weeks",
    level: "Beginner",
    author: "By John Smith",
    subtitle: "Curriculum",
    courseRoadmap: [
      {
        number: "01",
        description: `Introduction to HTML`,
      },
      {
        number: "02",
        description: `Styling with CSS`,
      },
      {
        number: "03",
        description: `Introduction to Responsive Design`,
      },
      {
        number: "04",
        description: `Design Principles for Web`,
      },
      {
        number: "05",
        description: `Building a Basic Website`,
      },
    ],
  },
  {
    title: `UI/UX Design`,
    description: `Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.`,
    courseLink: `View Course`,
    id: "2",
    courseImages: [{ img: img1_2 }, { img: img2_2 }, { img: img3_2 }],

    duration: "6 Weeks",
    level: "Intermediate",
    author: "By Emily Johnson",
    subtitle: "Curriculum",
    courseRoadmap: [
      {
        number: "01",
        description: `Introduction to UI/UX Design`,
      },
      {
        number: "02",
        description: `User Research and Personas`,
      },
      {
        number: "03",
        description: `Wireframing and Prototyping`,
      },
      {
        number: "04",
        description: `Visual Design and Branding`,
      },
      {
        number: "05",
        description: `Usability Testing and Iteration`,
      },
    ],
  },
  {
    title: `Mobile App Development`,
    description: `Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.`,
    courseLink: `View Course`,
    id: "3",
    courseImages: [{ img: img1_3 }, { img: img2_3 }, { img: img3_3 }],
    duration: "8 Weeks",
    level: "Intermediate",
    author: "By David Brown",
    subtitle: "Curriculum",
    courseRoadmap: [
      {
        number: "01",
        description: `Introduction to Mobile App Development`,
      },
      {
        number: "02",
        description: `Fundamentals of Swift Programming (iOS)`,
      },
      {
        number: "03",
        description: `Fundamentals of Kotlin Programming (Android)`,
      },
      {
        number: "04",
        description: `Building User Interfaces`,
      },
      {
        number: "05",
        description: `App Deployment and Testing`,
      },
    ],
  },
  {
    title: `Graphic Design for Beginners`,
    description: `Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.`,
    courseLink: `View Course`,
    id: "4",
    courseImages: [{ img: img1_4 }, { img: img2_4 }, { img: img3_4 }],

    duration: "10 Weeks",
    level: "Beginner",
    author: "By Sarah Thompson",
    subtitle: "Curriculum",
    courseRoadmap: [
      {
        number: "01",
        description: `Introduction to Graphic Design`,
      },
      {
        number: "02",
        description: `Typography and Color Theory`,
      },
      {
        number: "03",
        description: `Layout Design and Composition`,
      },
      {
        number: "04",
        description: `Image Editing and Manipulation`,
      },
      {
        number: "05",
        description: `Designing for Print and Digital Media`,
      },
    ],
  },
  {
    title: `Front-End Web Development`,
    description: `Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.`,
    courseLink: `View Course`,
    id: "5",
    courseImages: [{ img: img1_5 }, { img: img2_5 }, { img: img3_5 }],

    duration: "10 Weeks",
    level: "Intermediate",
    author: "By Michael Adams",
    subtitle: "Curriculum",
    courseRoadmap: [
      {
        number: "01",
        description: `HTML Fundamentals`,
      },
      {
        number: "02",
        description: `CSS Styling and Layouts`,
      },
      {
        number: "03",
        description: `JavaScript Basics`,
      },
      {
        number: "04",
        description: `Building Responsive Websites`,
      },
      {
        number: "05",
        description: `Introduction to Bootstrap and React`,
      },
    ],
  },
];
