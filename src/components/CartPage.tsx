// src/components/CartPage.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, CartItem, addToCart } from '../redux/cartSlice';
import '../style/CartPage.css'; // Ensure you have appropriate styles

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items); // You can replace 'any' with your RootState type
  const [liveMsg, setLiveMsg] = useState<string | null>(null);

  const handleRemove = (item: CartItem) => {
    dispatch(removeFromCart(item.id));
    setLiveMsg(`${item.title} has been removed from your cart.`); 
    setTimeout(() => setLiveMsg(null), 3000);
  };

 
  return (
    <div className="cart-page" aria-labelledby="cart-heading">
      <h1 id="cart-heading">Your Cart</h1>
      <div
        aria-live="assertive"
        aria-atomic="true"
        style={{ position: 'absolute', left: '-9999px' }}>
        {liveMsg}
      </div>
      <div className="cart-items" role="list" aria-label="Cart items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems?.map((item: CartItem) => (
            <article
              key={item.id}
              className="cart-item"
              role="listitem"
              aria-labelledby={`cart-item-${item.title}-name`}
              tabIndex={0} 
            >
              <img
                src={item.image}
                alt={`Image of ${item.title}`}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2 id={`cart-item-${item.id}-name`}>{item.title}</h2>
                <p>Quantity: {item?.quantity || '1'}</p>
                <button
                  onClick={() => handleRemove(item)}
                  aria-label={`Remove ${item.title} from cart`}
                  tabIndex={0} 
                >
                  Remove
                </button>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
