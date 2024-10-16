// src/components/CartPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, CartItem, addToCart } from '../redux/cartSlice';
import '../style/CartPage.css'; // Ensure you have appropriate styles

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items); // You can replace 'any' with your RootState type

 
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item: CartItem) => ( // Type 'item' as CartItem
            <div key={item.id} className="cart-item">
              <img src={item.image}  className="cart-item-image" />
              <div className="cart-item-details">
                {/* <h2>{item.price}</h2> */}
                <p>Quantity: {item.quantity}</p>
                <p>price:${item.totalPrice}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
