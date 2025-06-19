import React from "react";
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import "./details.css";

const Details: React.FC = () => {
  return (
    <div className="details">
      <div className="more">
        <div className="blog-header">
          <h1 className="title">Title</h1>
          <h6 className="subtitle">Subtitle</h6>
        </div>
        <div className="author">
          <div className="name">
            <small>Author: samuel</small>
            <small>
              Published: January 2025
              {/* {new Date(selectedPost?.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })} */}
            </small>
          </div>
          <div className="social">
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaSquareXTwitter />
              </li>
              <li>
                <FaInstagramSquare />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src="" alt="" />
        </div>
        <div className="details">
          <p>Description</p>
        </div>
      </div>
      <div className="feedback">{/* <Comments /> */}</div>
    </div>
  );
};

export default Details;
