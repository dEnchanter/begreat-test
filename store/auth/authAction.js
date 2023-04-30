// features/user/userSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api/baseUrl";
import { DeleteAuthTokenMaster, setToken, setUserDataS } from "../../helper";
import { toast } from "react-hot-toast";

// Async thunk for login
export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      // Make API request to authenticate user
      const response = await axios.post(BASE_URL + "users/signin", credentials);
      // Extract relevant data from response
      const { accessToken, userData,message } = response.data;
      // Store token and user data in Redux store
      console.log(response.data,'>>>>>>>>>>>>userData')
      setToken(accessToken?.split('Bearer ')?.join(""));
      setUserDataS(response?.data);
      // toast.success(message);

      // console.log(userData);
      return response?.data;
    } catch (error) {
      toast.error(error.response?.data?.error||'oops something went wrong...')
      console.log(error.response?.data,'Error');
      // Handle error
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    isLoading: false,
  },
  reducers: {
    // ... rest of the code

    // Logout reducer
    logoutUser: (state) => {
      console.log(state,'logoutUserlogoutUser')
      state.data = null; // Reset user data to null
      state.isLoading = false; // Reset isLoading to false
      state.error = null; // Reset error to null
      state.loading = false; // Reset error to null
      state.isAuthenticated = false;
      DeleteAuthTokenMaster('begreatFinace:accesskey') // deletes token from storage
      DeleteAuthTokenMaster('begreatFinace:user') 
    },
    logoutUserI: (state) => {
      state.data = null; // Reset user data to null
      state.isLoading = false; // Reset isLoading to false
      state.error = null; // Reset error to null
      state.loading = false; // Reset error to null
      state.isAuthenticated = true;
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = true;
        state.user = null;
        state.loading = false;

        state.error = action.payload ? action.payload.message : "Login failed";
      })
      .addCase(loginUser.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.isAuthenticated = false;
      });
  },
});

export const { logoutUser,logoutUserI } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectLoading = (state) => state.auth;
// export const selectI = (state) => state.auth?.loading;

export default authSlice.reducer;
