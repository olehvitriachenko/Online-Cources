import Hero from "../widgets/home/hero/Hero";
import Benefits from "../widgets/home/benefits/Benefits";
import Courses from "../widgets/home/courses/CoursesSection";
import Pricing from "../entities/pricing/PricingElement";
import Testimonials from "../widgets/home/testimonials/Testimonials";
import Questions from "../entities/faq/Questions";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <Questions />
    </div>
  );
}

export default Home;
