import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postSlice';
import singlePostReducer from './slices/singlePostSlice';
import signInReducer from './slices/signInSlice';
import signUpReducer from './slices/registerSlice';


export const store = configureStore({
  reducer: {
      post : postReducer,
      singlePost : singlePostReducer,
      signIn : signInReducer,
      signUp: signUpReducer,
  },
})