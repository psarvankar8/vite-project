// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

// Configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Define and export AppDispatch

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Export the store as default
export default store;
