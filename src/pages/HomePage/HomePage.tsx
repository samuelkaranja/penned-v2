import React from "react";
import { NavBar, Banner, Search, PostList, Footer } from "../../components";
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
      <Footer />
    </div>
  );
};

export default HomePage;
