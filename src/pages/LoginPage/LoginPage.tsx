import React from "react";
import "./loginpage.css";
import Image from "../../assets/startablog.jpg";
import { LoginForm } from "../../components";

const LoginPage: React.FC = () => {
  return (
    <div className="loginpage">
      <div className="user">
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="frm">
          <h2>Log in</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
