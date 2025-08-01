import { TestimonialsData, TestimonialsList } from "./config/testimonials";
import Section from "../../../shared/ui/Section";
import TestimonialCard from "./ui/TestimonialsCard";

function Testimonials() {
  return (
    <Section
      title={TestimonialsData.title}
      description={TestimonialsData.description}
      link={TestimonialsData.link}
      content={
        <>
          <ul className="section__list grid grid--2-cols">
            {TestimonialsList.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            ))}
          </ul>
        </>
      }
    />
  );
}

export default Testimonials;
