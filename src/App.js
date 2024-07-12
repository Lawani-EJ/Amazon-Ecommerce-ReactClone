import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Login from './components/Login';
import Product from './components/Product';
import Merchant from './components/Merchant'; 
import MerchantSignup from './components/MerchantSignup'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/merchant" element={<Merchant />} /> 
      <Route path="/merchantsignup" element={<MerchantSignup />} /> 
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
