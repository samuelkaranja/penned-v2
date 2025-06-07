import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Post {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  author: string;
  created_at: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk<Post[]>(
  "post/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/blogs/");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data: Post[] = await response.json();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default postSlice.reducer;
