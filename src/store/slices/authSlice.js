import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isLoggedIn :false,
  isAuthenticated : false,
  user: [],
  data:null,
  isLoading:null,
  token:null,
}

const api = "http://localhost:8000";

export const getLoginData = createAsyncThunk(
  "user/getLoginData",
  async ({ email, password }) => {
    try {
      // console.log(email, password);
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers:{
    [getLoginData.pending]: (state) => {
      state.isLoading = true
    },
    [getLoginData.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.isLoading = false;
      state.data = action.payload;
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    [getLoginData.rejected]: (state) => {
      state.isLoading = false
      state.isAuthenticated = false;
    },
  }
});

export const authActions = authSlice.actions

export default authSlice.reducer;
