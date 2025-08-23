import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginData } from "../config/data";
import { loginFormSchema } from "../model/validation";
import type { LoginFormData, props } from "../types/login.types";
import { useState } from "react";

function AuthLogin({ onSubmit }: props) {
  const [isShow, setIsShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="auth__form">
      <div className="auth__form-inner">
        <div className="auth__field input">
          <label className="input__label" htmlFor="email">
            Email
          </label>
          <input
            className="input__field"
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter your Email"
          />
          {errors.email && (
            <p className="input__error">{errors.email.message}</p>
          )}
        </div>
        <div className="auth__field input">
          <label className="input__label input__label" htmlFor="password">
            Password
          </label>
          <div className="auth__field-inner input__inner">
            <div className="input__inner--password">
              <input
                className="input__field input__field--password"
                type={isShow ? "text" : "password"}
                id="password"
                {...register("password")}
                placeholder="Enter your Password"
              />
              <label htmlFor="" className="password-eye">
                <label className="password-eye">
                  <input
                    type="checkbox"
                    className="password-eye__checkbox"
                    checked={isShow}
                    onChange={() => setIsShow((prev) => !prev)}
                  />
                  <span className="password-eye__icon"></span>
                </label>
              </label>
            </div>
            <a href="/" className="input__field--forgot-password">
              {loginData.forgotPassword}
            </a>
          </div>

          {errors.password && (
            <p className="input__error">{errors.password.message}</p>
          )}
        </div>
        <div className="input__checkbox">
          <label className="checkbox">
            <input
              className="checkbox__button"
              type="checkbox"
              {...register("rememberMe")}
            />
            <span className="checkbox__agree">Remember Me</span>
          </label>
        </div>
        <button type="submit" className="auth__submit button">
          Login
        </button>
      </div>
      <div className="auth__divider" role="separator" aria-label="or">
        <span className="auth__divider-line" />
        <span className="auth__divider-text">OR</span>
        <span className="auth__divider-line" />
      </div>
      <div className="auth__form-entrance">
        <button className="auth__link button button--google">
          <span className="icon icon--google"></span> Login with Google
        </button>

        <div className="auth__entrance">
          <p>
            {loginData.entranceText}{" "}
            <Link to={"/signup"} className="auth__entrance-link">
              {loginData.entranceLink}
              <span className="icon icon--arrow-right-top"></span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default AuthLogin;
