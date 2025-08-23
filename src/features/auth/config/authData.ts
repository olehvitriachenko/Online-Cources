import type { AuthFormMode } from "../types/auth";

export const authData: Record<
  AuthFormMode,
  {
    title: string;
    description: string;
  }
> = {
  login: {
    title: "Login",
    description: "Welcome back! Please log in to access your account.",
    // subdescription: "Don’t have an account?",
  },
  register: {
    title: "Sign Up",
    description: "Create an account to unlock exclusive features.",
  },
};
