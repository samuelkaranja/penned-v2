import React from "react";
import "./createpost.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { createPost } from "../../store/slices/features/post/postSlice";
import { toast } from "react-toastify";

interface PostFormData {
  title: string;
  subtitle: string;
  image: FileList | string;
  description: string;
}

const CreatePost: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>();

  const handlePostSubmit = async (data: PostFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("image", data.image[0]); // first file only
    formData.append("description", data.description);

    try {
      await dispatch(createPost(formData as any)).unwrap();
      toast.success("Post created successfully!");
      // Optionally reset form or redirect
    } catch (error) {
      alert(error || "Failed to create post.");
    }
  };

  return (
    <div className="createpost">
      <div className="frm">
        <form onSubmit={handleSubmit(handlePostSubmit)}>
          <div>
            <label>Title:</label>
            <input
              {...register("title", { required: true })}
              type="text"
              name="title"
              //   value={formData.title}
              //   onChange={handleChange}
            />
            {errors.title && errors.title.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Titile required
              </p>
            ) : null}
          </div>
          <div>
            <label>SubTitle:</label>
            <input
              {...register("subtitle", { required: true })}
              type="text"
              name="subtitle"
              //   value={formData.subtitle}
              //   onChange={handleChange}
            />
            {errors.subtitle && errors.subtitle.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Subtitle required
              </p>
            ) : null}
          </div>
          <div>
            <label>Image:</label>
            <input
              {...register("image", { required: true })}
              type="file"
              name="image"
              accept="image/*"
              //   onChange={handleFileChange}
            />
            {errors.image && errors.image.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Image required
              </p>
            ) : null}
          </div>
          <div>
            <label>Description:</label>

            {errors.description && errors.description.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Description required
              </p>
            ) : null}
            <textarea
              {...register("description", { required: true })}
              cols={30}
              rows={10}
              name="description"
              placeholder="Write your post here..."
              //   value={formData.description}
              //   onChange={handleChange}
            ></textarea>
            {errors.description && errors.description.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Description required
              </p>
            ) : null}
          </div>
          <button type="submit" className="post_btn">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
