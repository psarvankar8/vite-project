// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

type Props = {
  cartCount: number;
};

const Navbar: React.FC<Props> = ({ cartCount }) => {
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
