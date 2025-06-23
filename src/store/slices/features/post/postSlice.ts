import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
  title: string;
  subtitle: string;
  image: FileList | string;
  description: string;
}

interface PostState {
  post: Post | null;
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  post: null,
  loading: false,
  error: null,
};

//CreatePost
export const createPost = createAsyncThunk<
  Post,
  FormData,
  { rejectValue: string }
>("post/createPost", async (postData, thunkApi) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return thunkApi.rejectWithValue("You must be logged in to create a post.");
  }

  try {
    const response = await axios.post("http://localhost:3000/posts", postData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Post created:", response.data);
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(
      error.response?.data?.message || "Failed to create post"
    );
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create post";
      });
  },
});

export default postSlice.reducer;
