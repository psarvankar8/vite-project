// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { FoodItem } from "./types/FoodItem";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";

const App: React.FC = () => {
  // const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  // const addToCart = (item: FoodItem) => {
  //   setCartItems([...cartItems, item]);
  // };

  // const removeFromCart = (id: number) => {
  //   setCartItems(cartItems.filter((item) => item.id !== id));
  // };

  return (
    <Provider store={store}>
       
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/cart"
          element={<CartPage/>}
        />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
