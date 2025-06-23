import React from "react";
import "./createpostpage.css";
import { CreatePost } from "../../components";

const CreatePostPage: React.FC = () => {
  return (
    <div className="create-post-page">
      <h2>Create Post</h2>
      <CreatePost />
    </div>
  );
};

export default CreatePostPage;
