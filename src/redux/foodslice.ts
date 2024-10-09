import { createSlice } from '@reduxjs/toolkit';
import { FoodItem } from '../types/FoodItem';

interface FoodState {
  items: FoodItem[];
}
const initialState: FoodState = {
  items: [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Pasta', price: 8 },
  ],
};
const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {},
});

export const selectFoodItems = (state: { food: FoodState }) => state.food.items;
export default foodSlice.reducer;
