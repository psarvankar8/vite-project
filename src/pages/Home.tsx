// src/pages/Home.tsx
import React, { useState } from "react";
import FoodList from "../components/FoodList";
import Cart from "../components/Cart";
import { FoodItem } from "../types/FoodItem";

const foodData: FoodItem[] = [
  { id: 1, name: "Burger", price: 5.99 },
  { id: 2, name: "Pizza", price: 7.99 },
  { id: 3, name: "Sushi", price: 12.99 },
];

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <FoodList foodItems={foodData} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Home;
