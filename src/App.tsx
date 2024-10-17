// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import store from './redux/store';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      {/* <ProductPage /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
