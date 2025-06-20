import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
//import profile from "../../assets/code.jpg";
import "./navbar.css";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { logout } from "../../store/slices/features/auth/authSlice";

const NavBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <FaPenFancy className="pen" />
        <Link to="/" className="logo">
          penned
        </Link>
      </div>
      <div className="nav_links">
        {/* <>
          <Link to="/login" className="login">
            Login
          </Link>

          <Link to="/signup" className="signup">
            SignUp
          </Link>
        </> */}

        <div className="logged-in">
          {/* <Link to="/create-post" className="create">
            Create Post
          </Link>

          <span className="welcome">
            Welcome, <Link to="/profile">Samuel</Link>
          </span>

          <img src={profile} className="user-image" /> */}

          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
