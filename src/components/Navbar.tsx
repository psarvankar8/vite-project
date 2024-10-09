// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Food Delivery</h1>
      </Link>
      <Link to="/cart">
        <div className="cart-icon">
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
