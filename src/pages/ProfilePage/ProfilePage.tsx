import React from "react";
import "./profilepage.css";
import { UserDetails } from "../../components";

const ProfilePage: React.FC = () => {
  return (
    <div className="profilepage">
      <UserDetails />
    </div>
  );
};

export default ProfilePage;
