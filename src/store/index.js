import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postSlice';
import singlePostReducer from './slices/singlePostSlice';


export const store = configureStore({
  reducer: {
      post : postReducer,
      singlePost : singlePostReducer,
  },
})