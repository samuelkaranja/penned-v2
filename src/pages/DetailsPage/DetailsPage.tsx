import React from "react";
import "./detailspage.css";
import { Details, TopPosts } from "../../components";

const DetailsPage: React.FC = () => {
  return (
    <div className="detailspage">
      <div className="info">
        <Details />
      </div>
      <div className="postcard">
        <TopPosts />
      </div>
    </div>
  );
};

export default DetailsPage;
