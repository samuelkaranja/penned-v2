import React from "react";
import "./conmmentsform.css";

const CommentsForm: React.FC = () => {
  return (
    <div className="commentsform">
      <form>
        <textarea
          name=""
          id=""
          rows={8}
          cols={50}
          placeholder="Write Comment....."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentsForm;
