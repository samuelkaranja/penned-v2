import React from "react";
import "./userdetails.css";
import Image from "../../assets/code.jpg";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const UserDetails: React.FC = () => {
  const { token, user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="userdetails">
      {token ? (
        <>
          <div className="author">
            <div className="author_image">
              <img src={Image} alt="" />
            </div>
            <div className="author_info">
              <span>Fullname: {user?.fullname}</span>
              <span>Username: {user?.username}</span>
              <span>Email: {user?.email}</span>
              <p>
                About: Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="author_btns">
            <a href="/#">Follow</a>
            <a href="/#">Message</a>
          </div>
        </>
      ) : (
        <h2>No User</h2>
      )}
    </div>
  );
};

export default UserDetails;
