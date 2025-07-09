import React from "react";
import "./conmmentsform.css";

const CommentsForm: React.FC = () => {
  return (
    <div className="commentsform">
      <form>
        <textarea
          name=""
          id=""
          rows={7}
          cols={20}
          placeholder="Post a Comment....."
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default CommentsForm;
