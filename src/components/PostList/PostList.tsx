import React, { useEffect } from "react";
import "./postlist.css";
import BlogPost from "../BlogPost/BlogPost";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { fetchPosts } from "../../store/slices/features/postSlice";

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="postlist">
      <div className="posts">
        {posts.length > 0 ? (
          posts.map((post) => <BlogPost post={post} key={post.id} />)
        ) : (
          <h2>No posts available!!</h2>
        )}
      </div>
    </div>
  );
};

export default PostList;
