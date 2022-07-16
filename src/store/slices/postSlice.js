import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error:null,
};

const url = "http://localhost:8000/posts/post"

export const getPostsData = createAsyncThunk("posts/getPostData", async () => {
  try{
    let res = await axios(url);
    return res.data;
  } catch(err){
    console.error(err)
  }
});

export const postsSlice = createSlice({
    name:'posts',
    initialState,
    extraReducers:{
      [getPostsData.pending]: (state) => {
        state.isLoading = true;
        state.error = false;
      },
        [getPostsData.fulfilled]: (state, action) => {
          state.posts = action.payload;
          state.isLoading = false;
          },
          [getPostsData.rejected]: (state) => {
            state.isLoading = false;
            state.error = true;
          }
    }

})


// export const {isLoading, posts, error} = counterSlice.actions;
export default postsSlice.reducer;
