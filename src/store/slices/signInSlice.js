import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: true,
  token : null,
  error: null,
  isAuthenticated: false,
};

const api = "http://localhost:8000";

export const getLoginData = createAsyncThunk(
  "user/getLoginData",
  async ({ email, password }) => {
    try {
      console.log(email, password);
      const response = await axios.post(api + `/user/login`, {
        email,
        password,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*", 
        },
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
    [getLoginData.pending]: (state) => {
      state.isAuthenticated = false;
      state.loading = true;
      state.error = null;
    },

    [getLoginData.fulfilled]: (state, action) => {
      console.log('test');
      localStorage.setItem('isAuthenticated',true)
      state.users = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      state.error = false;
    },
    [getLoginData.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default loginSlice.reducer;
