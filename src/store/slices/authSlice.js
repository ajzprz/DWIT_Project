import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const api = "http://localhost:8000";

export const getLoginData = createAsyncThunk(
  "user/getLoginData",
  async ({ email, password }) => {
    try {
      console.log(email, password);
      const response = await axios.post(api + `/user/login`, {
        email,
        password,
      });
      return response.data;
      //   console.log(response.json())
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState : {isLoggedIn : false},
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions

export default authSlice.reducer;
