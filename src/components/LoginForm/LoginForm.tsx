import React from "react";
import "./loginform.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { loginUser } from "../../store/slices/features/auth/authSlice";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    const resultAction = await dispatch(loginUser(data));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/");
    }
  };

  return (
    <div className="loginform">
      {error && (
        <p
          style={{
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
            color: "red",
            margin: 0,
          }}
        >
          {error}
        </p>
      )}
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
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
      <div className="link-options">
        <div className="reset-password">
          <Link to="">Reset Password</Link>
        </div>
        <div className="sign-up">
          <span>Don't have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
