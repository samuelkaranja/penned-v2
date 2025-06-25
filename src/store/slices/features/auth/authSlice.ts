import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface SignUpData {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  username: string;
  fullname: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

// Sign Up
export const signUpUser = createAsyncThunk<
  User,
  SignUpData,
  { rejectValue: string }
>("auth/signUpUser", async (userData, thunkAPI) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      userData
    );
    console.log("User:", response.data);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Signup failed"
    );
  }
});

// Login
export const loginUser = createAsyncThunk<
  { user: User; token: string },
  LoginData,
  { rejectValue: string }
>("auth/loginUser", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      credentials
    );
    const { access_token, user } = response.data;
    localStorage.setItem("token", access_token);
    localStorage.setItem("user", JSON.stringify(user));
    return { token: access_token, user };
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Login failed"
    );
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    // Handle sign up actions
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

    // Handle login actions
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login Failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
