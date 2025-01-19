import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const MobileLogin = () => {
  const location = useLocation();
  const mobileNumber = location.state?.mobileNumber || '';

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: mobileNumber,
    email: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleGenderSelect = (gender) => {
    setFormData((prev) => ({ ...prev, gender }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bewakoof-web.onrender.com/user/register', formData);
      
      if (response.status === 201) {
        alert('user registered successfully!');
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error(error);
    }
  };
  return (
    <div className="min-h-full flex flex-col md:flex-row items-center bg-gray-100">
      <div className="flex-1 bg-blue-900 text-white flex items-center justify-center">
        <div className="text-center">
          <img
            src="https://images.bewakoof.com/web/ik-signup-desktop-v2.jpg"
            alt="Bewakoof Logo"
            className="mx-auto mb-4"
          />
        </div>
      </div>

      <div className="flex-1 p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Just a few more details</h2>
        <p className="text-gray-600 mb-6">
          We need a few more details to personalize your experience.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ex - Jhon Sharma"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className="block text-gray-700">
              Mobile Number
            </label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="px-4 bg-gray-200">+91</span>
              <input
                type="text"
                id="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="7898556878"
                className="w-full px-4 py-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ex: yourmailid@gmail.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Gender</label>
            <div className="flex gap-4">
              {['Male', 'Female', 'Other'].map((gender) => (
                <button
                  type="button"
                  key={gender}
                  onClick={() => handleGenderSelect(gender)}
                  className={`flex-1 py-2 border rounded-md text-center ${
                    formData.gender === gender
                      ? 'bg-yellow-500 text-white'
                      : 'focus:outline-none focus:ring-2 focus:ring-yellow-500'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MobileLogin;