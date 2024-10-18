// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import store from './redux/store';
import './App.css';
import { ThemeProvider, useTheme } from './common/MultiTheme/BGContext';  
import BGSwitch from './common/MultiTheme/BGSwitch';    

const ThemedApp: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar />
      <BGSwitch />  {/* Theme switcher dropdown */}
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>   {/* Wrap the app with ThemeProvider */}
        <Router>
          <ThemedApp />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
