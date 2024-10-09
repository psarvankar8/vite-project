import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartItems, selectTotalPrice } from "../redux/cartSlice";
import "../styles/Cart.css";

const Cart: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
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
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
