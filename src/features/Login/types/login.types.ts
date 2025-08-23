export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type props = {
  onSubmit: (data: LoginFormData) => void;
};

// import type { InferType } from "yup";
// import { loginFormSchem

// export type LoginFormData = InferType<typeof loginFormSchema>;

// export type props = {
//   onSubmit: (data: LoginFormData) => void;
// };
