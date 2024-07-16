import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import Product from './components/Product';
import Merchant from './components/Merchant';
import MerchantSignup from './components/MerchantSignup';
import MerchantRegister from './components/MerchantRegister';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (quantity) => {
    setCartCount(cartCount + quantity);
  };

  return (
    <Routes>
      <Route path="/" element={<Homepage cartCount={cartCount} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<Product onAddToCart={handleAddToCart} cartCount={cartCount} />} />
      <Route path="/merchant" element={<Merchant />} />
      <Route path="/merchantsignup" element={<MerchantSignup />} />
      <Route path='/merchantregister' element={<MerchantRegister/>}/>
    </Routes>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
