import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RegisterFormData } from "../types/register.types";
import { registerSchema } from "../model/validation";
import { registerData } from "../config/data";
import type { props } from "../types/register.types";
import { useState } from "react";
function AuthRegister({ onSubmit }: props) {
  const [isShow, setIsShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="auth__form">
      <div className="auth__form-inner">
        <div className="auth__field input">
          <label className="input__label" htmlFor="name">
            Full Name
          </label>
          <input
            className="input__field"
            id="name"
            {...register("name")}
            placeholder="Enter your Name"
          />
          {errors.name && <p className="input__error">{errors.name.message}</p>}
        </div>
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
          <label className="input__label" htmlFor="password">
            Password
          </label>
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
          {errors.password && (
            <p className="input__error">{errors.password.message}</p>
          )}
        </div>
        <div className="input__checkbox">
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
            <p className="__error">{errors.agreeToTerms.message}</p>
          )}
        </div>
        <button type="submit" className="auth__submit button">
          Sign Up
        </button>
      </div>
      <div className="auth__divider" role="separator" aria-label="or">
        <span className="auth__divider-line" />
        <span className="auth__divider-text">OR</span>
        <span className="auth__divider-line" />
      </div>
      <div className="auth__form-entrance">
        <button className="auth__link button button--google">
          <span className="icon icon--google"></span> Sign Up with Google
        </button>

        <div className="auth__entrance">
          <p>
            {registerData.entranceText}{" "}
            <Link to={"/login"} className="auth__entrance-link">
              {registerData.entranceLink}
              <span className="icon icon--arrow-right-top"></span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default AuthRegister;
