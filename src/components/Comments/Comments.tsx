import React from "react";
import "./comments.css";

const Comments: React.FC = () => {
  return (
    <div className="comments">
      <h3>
        All Comments <span className="count">10</span>
      </h3>
    </div>
  );
};

export default Comments;
