import React from "react";
import "./signupform.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpForm: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="signupform">
      <form>
        <div className="frm">
          <label htmlFor="fullname">Full Name</label>
          <input
            {...register("fullname", { required: "Full Name is required" })}
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
          />
          {typeof errors.fullname?.message === "string" && (
            <p className="alert">{errors.fullname.message}</p>
          )}
        </div>
        <div className="frm">
          <label htmlFor="username">Username</label>
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            name="username"
            id="username"
            placeholder="johndoe28"
          />
          {typeof errors.username?.message === "string" && (
            <p className="alert">{errors.username.message}</p>
          )}
        </div>
        <div className="frm">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
          />
          {typeof errors.email?.message === "string" && (
            <p className="alert">{errors.email.message}</p>
          )}
        </div>
        <div className="frm">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            name="password"
            id="password"
            placeholder="**********"
          />
          {typeof errors.password?.message === "string" && (
            <p className="alert">{errors.password.message}</p>
          )}
        </div>
        <div className="frm">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="**********"
          />
          {typeof errors.confirmPassword?.message === "string" && (
            <p className="alert">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="option">
        <span>Already have an Account?</span>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
