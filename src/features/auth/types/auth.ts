// import type { InferType } from "yup";
// import { loginSchema, registerSchema } from "../model/validation";

// export type LoginFormData = InferType<typeof loginSchema>;
// export type RegisterFormData = InferType<typeof registerSchema>;

export type AuthFormMode = "login" | "register";

export type AuthFormData = {
  name: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
  rememberMe: boolean;
};

export type AuthFormProps = {
  mode: AuthFormMode;
};
