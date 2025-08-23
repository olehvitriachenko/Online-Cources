import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(4, "You have to input min 4 symbols")
    .required("Please enter your name"),
  email: yup
    .string()
    .email("Email is wrong")
    .required("This field is required, please enter your email"),
  password: yup
    .string()
    .min(8, "You have to use min 8 symbols")
    .required("Please enter your password"),

  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms")
    .required(),
});
