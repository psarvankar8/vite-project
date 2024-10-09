import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Cart />
        )}
      </div>
    </div>
  );
};

export default CartPage;
