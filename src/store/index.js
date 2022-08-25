import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postSlice';
import singlePostReducer from './slices/singlePostSlice';
import AuthReducer from './slices/authSlice';
import signUpReducer from './slices/registerSlice';


export const store = configureStore({
  reducer: {
      post : postReducer,
      singlePost : singlePostReducer,
      auth : AuthReducer,
      signUp: signUpReducer,
  },
})