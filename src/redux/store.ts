import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import foodReducer from './foodslice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    food:foodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;