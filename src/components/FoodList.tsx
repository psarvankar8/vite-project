import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFoodItems } from "../redux/foodslice";
import { addToCart } from "../redux/cartSlice";
import "../styles/FoodList.css";

const FoodList: React.FC = () => {
  const foodItems = useSelector(selectFoodItems);
  const dispatch = useDispatch();
  const handleAddToCart = (item: { id: number; name: string; price: number }) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };
  return (
    <div>
      <h2>Available Food</h2>
      <div className="food-list">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item">
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
