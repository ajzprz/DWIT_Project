import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: true,
  error: null,
  status:null,
  isAuthenticated: false,
};

const api = "http://localhost:8000";

export const getSignUpData = createAsyncThunk(
  "user/getSignUpData",
  async ({ firstName, lastName, email, password }) => {
    try {
      const response = await axios.post(api + `/user/register`, {
        firstName,
        lastName,
        email,
        password,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*", 
        },
        withCredentials :true,
      });
      return (response.data);
    //   console.log(response.json())
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getSignUpData.pending]: (state) => {
      state.isAuthenticated = false;
      state.status = null;
      state.loading = true;
      state.error = null;
    },
    [getSignUpData.fulfilled]: (state, action) => {
      state.users = action.payload.user;
      state.status = action.payload.status;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = false;
    },
    [getSignUpData.rejected]: (state,action) => {
      state.status = action.paylaod.status;
      state.loading = false;
      state.error = true;
    },
  },
});

export default loginSlice.reducer;
