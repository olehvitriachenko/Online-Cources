import * as yup from "yup";

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .email("Email is wrong")
    .required("This field is required, please enter your email"),
  password: yup
    .string()
    .min(8, "You have to use min 8 symbols")
    .required("Please enter your password"),
  rememberMe: yup
    .boolean()
    // .transform((value) => value ?? false)
    .required(),
});
