import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  singlePost: [],
  isLoading: false,
  error:null,
};

const url = "http://localhost:8000/posts/"

export const getSinglePostData = createAsyncThunk("singlePost/getSinglePostData", async (id) => {
    try{
      let res = await axios(url +`${id}` );
      return res.data;
    } catch(err){
      console.error(err)
    }
  });

export const singlePostSlice = createSlice({
    name:'singlePost',
    initialState,
    extraReducers:{
      [getSinglePostData.fulfilled]: (state) => {
        state.isLoading = true;
      },
        [getSinglePostData.fulfilled]: (state, action) => {
          state.singlePost = action.payload;
          state.isLoading = false;
          },
          [getSinglePostData.rejected]: (state) => {
            state.isLoading = false;
            state.error = true;
          }
    }
  
  })

  export default singlePostSlice.reducer;
