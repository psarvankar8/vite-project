// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '../style/navbar.css'; // Ensure you have the CSS file for styling

const Navbar: React.FC = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <nav aria-label="Main navigation">
    <ul>
      <li>
      <Link to="/">Products {`${import.meta.env.VITE_APP_MODE}`}</Link>
      </li>
      <li>
        <Link to="/cart" className="cart-icon" aria-label={`Cart with ${cartCount} items`}>
        <span className="cart-text">Cart</span><span role="img" aria-hidden="true">🛒</span>  
          {cartCount > 0 && (
            <span className="cart-count" aria-live="polite" aria-atomic="true">
              {cartCount}
            </span>
          )} 
        </Link>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;
