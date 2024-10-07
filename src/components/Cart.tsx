// src/components/Cart.tsx
import React from "react";
import { FoodItem } from "../types/FoodItem";
import "../styles/Cart.css";

type Props = {
  cartItems: FoodItem[];
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
