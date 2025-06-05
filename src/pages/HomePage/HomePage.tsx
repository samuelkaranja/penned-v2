import React from "react";
import { NavBar, Banner, Search } from "../../components";
import "./homepage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <NavBar />
      <Banner />
      <div className="archive">
        <h2>Posts</h2>
        <Search />
      </div>
    </div>
  );
};

export default HomePage;
