export type AuthFormMode = "login" | "register";

export type AuthFormProps = {
  mode: AuthFormMode;
  onSubmit: (data: AuthFormData) => void;
};
export type AuthFormData = {
  name?: string;
  email: string;
  password: string;
  agreeToTerms?: boolean;
};
