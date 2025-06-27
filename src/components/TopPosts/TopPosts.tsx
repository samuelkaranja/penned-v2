import React from "react";
import "./topposts.css";
import Image from "../../assets/frontend.jpg";

const TopPosts: React.FC = () => {
  return (
    <div className="topposts">
      <h3>Top Posts</h3>
      <div className="top">
        <div className="image">
          <img src={Image} />
        </div>
        <div className="more">
          <span className="title">Front-End Developer</span>
          <span className="subtitle">
            A frontend developer builds the user interface...
          </span>
        </div>
      </div>

      <div className="top">
        <div className="image">
          <img src={Image} />
        </div>
        <div className="more">
          <span className="title">Front-End Developer</span>
          <span className="subtitle">
            A frontend developer builds the user interface...
          </span>
        </div>
      </div>

      <div className="top">
        <div className="image">
          <img src={Image} />
        </div>
        <div className="more">
          <span className="title">Front-End Developer</span>
          <span className="subtitle">
            A frontend developer builds the user interface...
          </span>
        </div>
      </div>

      <div className="top">
        <div className="image">
          <img src={Image} />
        </div>
        <div className="more">
          <span className="title">Front-End Developer</span>
          <span className="subtitle">
            A frontend developer builds the user interface...
          </span>
        </div>
      </div>

      <div className="top">
        <div className="image">
          <img src={Image} />
        </div>
        <div className="more">
          <span className="title">Front-End Developer</span>
          <span className="subtitle">
            A frontend developer builds the user interface...
          </span>
        </div>
      </div>

      <div className="top">
        <div className="image">
          <img src={Image} />
        </div>
        <div className="more">
          <span className="title">Front-End Developer</span>
          <span className="subtitle">
            A frontend developer builds the user interface...
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopPosts;
