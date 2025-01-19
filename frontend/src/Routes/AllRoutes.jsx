import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductList } from '../components/ProductList';
import LoginSignupPage from '../pages/Login';
import MobileLogin from '../pages/MobileLogin';
import EmptyCartPage from '../pages/Cart';

const AllROutes=() => {
  return (
    <div className='mt-10 mb-5'>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login-start" element={<LoginSignupPage />} />
        <Route path="/mobile-login" element={<MobileLogin />} />
        <Route path="/cart" element={<EmptyCartPage />} />
      </Routes>
    </div>
    );
};

export default AllROutes;
