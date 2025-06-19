import React from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import "./blogpost.css";

const BlogPost: React.FC = () => {
  return (
    <div className="post">
      <img src="" alt="" />
      <div className="body">
        <div className="dl">
          <small style={{ fontSize: "11px" }}>
            Created On: January 2025
            {/* {new Date(post?.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })} */}
          </small>
          <small>
            <CiHeart />
          </small>
        </div>
        <Link to="" className="title">
          Title
        </Link>
        <p className="subtitle">Subtitle</p>
        <small className="author">
          author: samuel
          {/* {post?.author.toLowerCase().split(" ")[0]} */}
        </small>
      </div>
    </div>
  );
};

export default BlogPost;
