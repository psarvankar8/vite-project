// src/pages/CartPage.tsx
import React from "react";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import { FoodItem } from "../types/FoodItem";

type Props = {
  cartItems: FoodItem[];
  removeFromCart: (id: number) => void;
};

const CartPage: React.FC<Props> = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <div className="container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        )}
      </div>
    </div>
  );
};

export default CartPage;
