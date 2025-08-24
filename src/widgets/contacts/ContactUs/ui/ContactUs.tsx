import Section from "../../../../shared/ui/Section";
import { contactsData } from "../config/data";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "../types/form.types";
import ContactsInfo from "../../../../shared/contacts/contacts-info/ui/ContactsInfo";

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
            <form
              className="contacts__form contacts-form"
              onSubmit={handleSubmit((data) => {
                console.log(`Registering... ${data}`);
                reset();
              })}
            >
              <div className="contacts-form__inner grid grid--2-cols">
                <div className="contacts-form__field grid__item input">
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

                <div className="contacts-form__field grid__item input">
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
                <div className="contacts-form__field grid__item input">
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
                <div className="contacts-form__field grid__item input">
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
                <div className="contacts-form__field grid__item--full input">
                  <label className="input__label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="input__field"
                    type="subject"
                    id="subject"
                    {...register("subject")}
                    placeholder="Enter your Subject"
                  />
                </div>
                <div className="contacts-form__field grid__item--full input input--message">
                  <label className="input__label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="input__field input__field--message"
                    id="message"
                    {...register("message")}
                    placeholder="Enter your Message here..."
                  />
                </div>
              </div>
              <button className="contacts-form__button button">
                Send Your Message
              </button>
            </form>
            <ContactsInfo />
          </div>
        </>
      }
    />
  );
}

export default ContactUs;
