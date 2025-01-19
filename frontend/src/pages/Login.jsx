import React, { useState } from 'react';
import MobileLogin from './MobileLogin';
import { useNavigate } from 'react-router-dom';

const LoginSignupPage = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');



  function handleSubmit(){
    navigate('/mobile-login', { state: { mobileNumber:mobileNumber } });
  }


  return (
    <div className="min-h-full flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg flex max-w-4xl">
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.bewakoof.com/web/rm-login-desk-v2.jpg)' }}
        ></div>
        
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Login / Signup</h2>
          <p className="text-gray-500 mb-6">Join us now to be a part of Bewakoof® family.</p>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Enter Mobile Number</label>
            <div className="flex items-center border border-gray-300 rounded-md">
              <span className="px-3 py-2 bg-gray-100 text-gray-700 border-r border-gray-300">+91</span>
              <input
                type="text"
                className="w-full px-3 py-2 focus:outline-none"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          </div>
          
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md mb-4 hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Continue
          </button>
          
          <div className="flex items-center justify-between mb-4">
            <span className="border-b border-gray-300 w-full"></span>
            <span className="px-3 text-gray-500">OR</span>
            <span className="border-b border-gray-300 w-full"></span>
          </div>
          
          <div className="flex justify-between">
            <button className="flex items-center justify-center w-1/2 bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 mr-2">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              Google
            </button>
            <button className="flex items-center justify-center w-1/2 bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200 ml-2">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook"
                className="w-6 h-6 mr-2"
              />
              Facebook
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-6">
            By creating an account or logging in, you agree with Bewakoof®’s
            <a href="#" className="text-blue-600 hover:underline ml-1">Terms and Conditions</a>
            and
            <a href="#" className="text-blue-600 hover:underline ml-1">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
