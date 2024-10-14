// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '../style/navbar.css'; // Ensure you have the CSS file for styling

const Navbar: React.FC = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <nav>
      <ul>
        <li><Link to="/">Products</Link></li>
        <li>
          <Link to="/cart" className="cart-icon">
            {/* SVG Cart Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              fill="white"
            >
              <path d="M7 4v2h14l-1.6 7H9.5l-.5 2H19l1-2H8l1-2H20l2-9H7z" />
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* Show count if greater than 0 */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
