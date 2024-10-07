// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { FoodItem } from "./types/FoodItem";

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
