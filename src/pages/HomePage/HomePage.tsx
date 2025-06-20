import React from "react";
import { Banner, Search, PostList } from "../../components";
import "./homepage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home">
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
