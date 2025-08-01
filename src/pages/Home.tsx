import Hero from "../widgets/home/hero/Hero";
import Benefits from "../widgets/home/benefits/Benefits";
import Courses from "../widgets/home/courses/Courses";
import Pricing from "../entities/pricing/Pricing";
import Testimonials from "../widgets/home/testimonials/Testimonials";
import Questions from "../entities/faq/Questions";

function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <Questions />
    </>
  );
}

export default Home;
