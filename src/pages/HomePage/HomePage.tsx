import React from "react";
import "./homepage.css";
import { NavBar, Banner } from "../../components";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <NavBar />
      <Banner />
    </div>
  );
};

export default HomePage;
