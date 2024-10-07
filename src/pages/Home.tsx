// src/pages/Home.tsx
import React from "react";
import FoodList from "../components/FoodList";
import Navbar from "../components/Navbar";
import { FoodItem } from "../types/FoodItem";

type Props = {
  cartItems: FoodItem[];
  addToCart: (item: FoodItem) => void;
};

const foodData: FoodItem[] = [
  { id: 1, name: "Burger", price: 5.99 },
  { id: 2, name: "Pizza", price: 7.99 },
  { id: 3, name: "Sushi", price: 12.99 },
];

const Home: React.FC<Props> = ({ cartItems, addToCart }) => {
  return (
    <div style={{width: "1024px"}}>
      <Navbar cartCount={cartItems.length} />
      <div className="container">
        <h2>Available Food</h2>
        <FoodList foodItems={foodData} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Home;
