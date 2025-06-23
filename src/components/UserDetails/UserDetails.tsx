import React from "react";
import "./userdetails.css";
import Image from "../../assets/code.jpg";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";

const UserDetails: React.FC = () => {
  //const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="userdetails">
      <div className="author">
        <div className="author_image">
          <img src={Image} alt="" />
        </div>
        <div className="author_info">
          <span>Fullname</span>
          <span>Username</span>
          <span>Email</span>
          <p>About</p>
        </div>
      </div>
      <div className="author_btns">
        <a href="/#">Follow</a>
        <a href="/#">Message</a>
      </div>
    </div>
  );
};

export default UserDetails;
