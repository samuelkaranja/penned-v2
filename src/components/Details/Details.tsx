import React, { useEffect } from "react";
import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import "./details.css";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../store/slices/features/postSlice";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedPost, loading, error } = useSelector(
    (state: RootState) => state.post
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchPostById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!selectedPost) return <p>Post not found</p>;

  return (
    <div className="details">
      <div className="more">
        <div className="blog-header">
          <h1 className="title">{selectedPost?.title}</h1>
          <h6 className="subtitle">{selectedPost?.subtitle}</h6>
        </div>
        <div className="author">
          <div className="name">
            <small>Author: {selectedPost?.author.split(" ")[0]}</small>
            <small>
              Published:
              {new Date(selectedPost?.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
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
          <img src={selectedPost?.image} alt="" />
        </div>
        <div className="details">
          <p>{selectedPost?.description}</p>
        </div>
      </div>
      <div className="feedback">{/* <Comments /> */}</div>
    </div>
  );
};

export default Details;
