import React from "react";
import "./loginform.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {};

  return (
    <div className="loginform">
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Submit</button>
      </form>
      <div className="link-options">
        <div className="reset-password">
          <Link to="">Reset Password</Link>
        </div>
        <div className="sign-up">
          <span>Don't have an account? </span>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
