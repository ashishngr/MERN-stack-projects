import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './userSlice';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer, 
    product: productReducer
  }, 
})