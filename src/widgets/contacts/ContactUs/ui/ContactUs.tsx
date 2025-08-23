import Section from "../../../../shared/ui/Section";
import { contactsData } from "../config/data";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "../types/form.types";

function ContactUs() {
  const { register, handleSubmit, reset } = useForm<ContactFormData>();
  return (
    <Section
      tabs={false}
      hasLink={false}
      title={contactsData.title}
      description={contactsData.description}
      content={
        <>
          <div className="contacts">
            <form className="contacts-form">
              <div className="auth__field input">
                <label className="input__label" htmlFor="name">
                  First Name
                </label>
                <input
                  className="input__field"
                  id="name"
                  {...register("firstName")}
                  placeholder="Enter your Name"
                />
              </div>

              <div className="auth__field input">
                <label className="input__label" htmlFor="surname">
                  Last Name
                </label>
                <input
                  className="input__field input"
                  id="surname"
                  {...register("lastName")}
                  placeholder="Enter your Last Name"
                />
              </div>
              <div className="auth__field input">
                <label className="input__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input__field input"
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Enter your Email"
                />
              </div>
              <div className="auth__field input">
                <label className="input__label" htmlFor="email">
                  Phone
                </label>
                <input
                  className="input__field input"
                  type="phone"
                  id="phone"
                  {...register("phone")}
                  placeholder="Enter your Phone Number"
                />
              </div>
              <div className="auth__field input">
                <label className="input__label" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="input__field"
                  type="subject"
                  id="subject"
                  {...register("phone")}
                  placeholder="Enter your Subject"
                />
              </div>
              <div className="auth__field input">
                <label className="input__label" htmlFor="subject">
                  Subject
                </label>
                <textarea
                  className="input__field"
                  id="text"
                  {...register("message")}
                  placeholder="Enter your Message here..."
                />
              </div>
            </form>
            <aside className="contacts-info"></aside>
          </div>
        </>
      }
    />
  );
}

export default ContactUs;
