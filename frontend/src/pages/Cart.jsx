import React from 'react';
import {Link} from "react-router-dom"
const EmptyCartPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">

      <div className="text-center">
        <img
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          alt="Cart Icon"
          className="mx-auto mb-6"
        />
        <h1 className="text-2xl font-semibold mb-2">Hey, your bag feels so light!</h1>
        <p className="text-gray-600 mb-6">Let’s add some items in your bag</p>
      </div>

    <Link to="/">
      <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
        START SHOPPING
      </button>
    </Link>
    </div>
  );
};

export default EmptyCartPage;
