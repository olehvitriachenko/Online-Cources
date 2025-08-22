import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAuthSchema } from "../model/validation";
import { authData } from "../config/authData";
import type { AuthFormProps, AuthFormData } from "../types/auth";
import { Link } from "react-router";

function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: yupResolver(getAuthSchema(mode)),
  });

  const { title, description, authType, subdescription } = authData[mode];
  return (
    <div className="auth">
      <header className="auth__header">
        <h1 className="auth__title">{title}</h1>
        <div className="auth__description">
          <p>{description}</p>
        </div>
      </header>

      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth__form-inner">
          {mode === "register" && (
            <div className="auth__field">
              <label className="auth__label" htmlFor="name">
                Full Name
              </label>
              <input
                className="auth__input"
                id="name"
                {...register("name")}
                placeholder="Enter your Name"
              />
            </div>
          )}
          <div className="auth__field">
            <label className="auth__label" htmlFor="email">
              Email
            </label>
            <input
              className="auth__input"
              type="email"
              id="email"
              {...register("email")}
              placeholder="Enter your Email"
            />
            {errors.email && (
              <p className="auth__error">{errors.email.message}</p>
            )}
          </div>
          <div className="auth__field">
            <label className="auth__label" htmlFor="password">
              Password
            </label>
            <input
              className="auth__input"
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter your Password"
            />
            {errors.password && (
              <p className="auth__error">{errors.password.message}</p>
            )}
          </div>
          {mode === "register" && (
            <div className="auth__checkbox">
              <label className="checkbox">
                <input
                  className="checkbox__button"
                  type="checkbox"
                  {...register("agreeToTerms")}
                />
                <span className="checkbox__agree">
                  I agree with <a href="/terms">Terms of Use</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="auth__error">{errors.agreeToTerms.message}</p>
              )}
            </div>
          )}
          {mode === "register" && (
            <div className="auth__checkbox">
              <label className="checkbox">
                <input
                  className="checkbox__button"
                  type="checkbox"
                  {...register("agreeToTerms")}
                />
                <span className="checkbox__agree">
                  I agree with <a href="/terms">Terms of Use</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="auth__error">{errors.agreeToTerms.message}</p>
              )}
            </div>
          )}
          <button type="submit" className="auth__submit button">
            {mode === "login" ? "Log In" : "Sign Up"}
          </button>
        </div>
        <div className="auth__divider" role="separator" aria-label="or">
          <span className="auth__divider-line" />
          <span className="auth__divider-text">OR</span>
          <span className="auth__divider-line" />
        </div>
        <div className="auth__form-entrance">
          <button className="auth__link button button--google">
            <span className="icon icon--google"></span> {authType} with Google
          </button>

          <div className="auth__subdescription">
            <p>
              {subdescription}{" "}
              <Link
                to={mode === "register" ? "/login" : "/signup"}
                className="auth__subdescription-link"
              >
                {mode === "register" ? "Login" : "Sign Up"}
                <span className="icon icon--arrow-right-top"></span>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
