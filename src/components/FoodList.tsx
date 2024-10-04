// src/components/FoodList.tsx
import React from "react";
import { FoodItem } from "../types/FoodItem";

type Props = {
  foodItems: FoodItem[];
  addToCart: (item: FoodItem) => void;
};

const FoodList: React.FC<Props> = ({ foodItems, addToCart }) => {
  return (
    <div>
      <h2>Available Food</h2>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
