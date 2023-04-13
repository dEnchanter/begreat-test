//authActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { setAuthToken, setToken, setUserDataS } from "../../helper";
import { BASE_URL } from "../api/baseUrl";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
     
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${BASE_URL}users/signin`,
        { email, password, strategy: "local" },
        config
      );
      // store user's token in local storage
    console.log(data, "userInfoLoginData");
      setToken(data?.accessToken)
      setUserDataS(data)
      toast.success(data?.message);
      // localStorage.setItem('userToken', data.userToken)
      return data;
    } catch (error) {
      // return custom error message from API if any
      console.log(error?.response?.data?.error,'dataError');
      toast.error(error.response.data.error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
