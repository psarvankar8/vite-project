// src/components/FoodList.tsx
import React from "react";
import { FoodItem } from "../types/FoodItem";
import "../styles/FoodList.css";

type Props = {
  foodItems: FoodItem[];
  addToCart: (item: FoodItem) => void;
};

const FoodList: React.FC<Props> = ({ foodItems, addToCart }) => {
  return (
    <div>
      <h2>Available Food</h2>
      <div className="food-list">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
