export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
};

export type props = {
  onSubmit: (data: RegisterFormData) => void;
};
