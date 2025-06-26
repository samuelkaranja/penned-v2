import React from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import "./blogpost.css";

export interface BlogPostType {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  author: string;
  created_at: string;
}

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="post">
      <img src={post.image} alt="" />
      <div className="body">
        <div className="dl">
          <small style={{ fontSize: "11px" }}>
            Created On: {post.created_at}
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
        <Link to={`/details/${post.id}`} className="title">
          {post.title}
        </Link>
        <p className="subtitle">
          {post.subtitle.length > 50
            ? post?.subtitle.slice(0, 80) + "..."
            : post?.subtitle}
        </p>
        <small className="author">
          author: {post.author.toLowerCase().split(" ")[0]}
          {/* {post?.author.toLowerCase().split(" ")[0]} */}
        </small>
      </div>
    </div>
  );
};

export default BlogPost;
