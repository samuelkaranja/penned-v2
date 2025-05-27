import React from "react";
import "./signuppage.css";
import { SignUpForm } from "../../components";

const SignUpPage: React.FC = () => {
  return (
    <div className="signUp">
      <div className="user">
        <div className="frm">
          <h2>Create Account</h2>
          <SignUpForm />
        </div>
        <div className="image">{/* <img src={Image} alt="" /> */}</div>
      </div>
    </div>
  );
};

export default SignUpPage;
