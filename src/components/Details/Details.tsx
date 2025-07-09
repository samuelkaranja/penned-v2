import React, { useState } from "react";
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import "./details.css";
import { useParams } from "react-router-dom";
import { allPosts } from "../PostList/PostList";
import CommentsForm from "../CommentsForm/CommentsForm";
import Comments from "../Comments/Comments";
//import CommentsForm from "../CommentsForm/CommentsForm";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postDetails = allPosts.find((post) => post.id.toString() === id);

  const [btnToggle, setBtnToggle] = useState(false);

  return (
    <div className="details">
      <div className="more">
        <div className="blog-header">
          <h1 className="title">{postDetails?.title}</h1>
          <h6 className="subtitle">{postDetails?.subtitle}</h6>
        </div>
        <div className="author">
          <div className="name">
            <small>Author: {postDetails?.author},</small>
            <small>
              Published: {postDetails?.created_at}
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
          <img src={postDetails?.image} alt="" />
        </div>
        <div className="details">
          <p>{postDetails?.description}</p>
        </div>
      </div>
      <div className="feedback">
        <Comments />
        <button
          className="comment-btn"
          onClick={() => setBtnToggle(!btnToggle)}
        >
          {btnToggle ? "Close" : "Comment"}
        </button>
        {btnToggle && <CommentsForm />}
      </div>
    </div>
  );
};

export default Details;
