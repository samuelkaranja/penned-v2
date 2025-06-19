import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// Sign Up
export const signUpUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "auth/signUpUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        userData
      );
      return response.data;
      console.log(response.data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "SignUp Failed";
      });
  },
});

export default authSlice.reducer;
