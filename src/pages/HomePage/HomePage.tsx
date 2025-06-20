import React from "react";
import { Banner, Search, PostList, NavBar } from "../../components";
import "./homepage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <NavBar />
      <Banner />
      <div className="archive">
        <h2>Posts</h2>
        <Search />
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
