// src/redux/productSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// with custom_env;
// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//   const response = await axios.get(`${process.env.API_URL}/products`);
//   return response.data;
// });

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  // without custom_env
    const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
    return response.data;
});

console.log("hi",`${import.meta.env.VITE_API_URL}`)

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
