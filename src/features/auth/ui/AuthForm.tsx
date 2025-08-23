// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { getAuthSchema } from "../model/validation";
import { authData } from "../config/authData";
import AuthLogin from "../../Login/ui/AuthLogin";
import AuthRegister from "../../Register/ui/AuthRegister";
import type { AuthFormProps } from "../types/auth";
import { useLocation } from "react-router";

function AuthForm({ mode }: AuthFormProps) {
  const location = useLocation();
  const path = location.pathname;

  const handleSubmitLogin = (data: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    console.log("Logining user: ", data);
  };
  const handleSubmitSignup = (data: {
    name: string;
    email: string;
    password: string;
    // signToTerms: boolean;
  }) => {
    console.log("Registering user: ", data);
  };

  const { title, description } = authData[mode];
  return (
    <div className="auth">
      <header className="auth__header">
        <h1 className="auth__title">{title}</h1>
        <div className="auth__description">
          <p>{description}</p>
        </div>
      </header>
      {path === "/login" ? (
        <AuthLogin onSubmit={handleSubmitLogin} />
      ) : (
        <AuthRegister onSubmit={handleSubmitSignup} />
      )}
    </div>
  );
}

export default AuthForm;
