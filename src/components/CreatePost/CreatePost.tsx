import React, { useEffect, useState } from "react";
import "./createpost.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { createPost } from "../../store/slices/features/post/postSlice";
import { resetPost } from "../../store/slices/features/post/postSlice";
import { toast } from "react-toastify";
import { SimpleEditor } from "../../../@/components/tiptap-templates/simple/simple-editor";

interface PostFormData {
  title: string;
  subtitle: string;
  image: FileList;
  content: string;
}

const CreatePost: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.post);
  //const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormData>();

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState<string>("");

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handlePostSubmit = async (data: PostFormData) => {
    if (!editorContent.trim() || editorContent === "<p></p>") {
      toast.error("Content is required.");
      return;
    }

    if (!data.image || data.image.length === 0) {
      toast.error("Image is required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("content", editorContent);
    formData.append("image", data.image[0]); // Upload first file

    // Debug: log fields
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      await dispatch(createPost(formData)).unwrap();
      toast.success("Post created successfully!");
      dispatch(resetPost());
      reset();
      setEditorContent("");
      setPreviewUrl(null);
    } catch (error: any) {
      console.error("Post create error:", error);
      toast.error(error || "Failed to create post.");
    }
  };

  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="createpost">
      <div className="frm">
        <form onSubmit={handleSubmit(handlePostSubmit)}>
          {/* Title */}
          <div>
            <label>Title:</label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Enter post title"
            />
            {errors.title && <p className="error">Title is required</p>}
          </div>

          {/* Subtitle */}
          <div>
            <label>SubTitle:</label>
            <input
              type="text"
              {...register("subtitle", { required: true })}
              placeholder="Enter subtitle"
            />
            {errors.subtitle && <p className="error">Subtitle is required</p>}
          </div>

          {/* Image Upload */}
          <div>
            <label>Image:</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              onChange={handleImagePreview}
            />
            {errors.image && <p className="error">Image is required</p>}
            {previewUrl && (
              <div className="image-preview">
                <img src={previewUrl} alt="Preview" width="200" />
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <label>Content:</label>
            <div className="blog-editor-container">
              <SimpleEditor value={editorContent} onChange={setEditorContent} />
            </div>
            {/* {editorContent.trim() === "" && (
              <p className="error">Content is required</p>
            )} */}
          </div>

          {/* Submit Button */}
          <button type="submit" className="post_btn" disabled={loading}>
            {loading ? "Creating post..." : "Add Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
