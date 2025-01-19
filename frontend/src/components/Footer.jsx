import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-2">CUSTOMER SERVICE</h5>
            <ul>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Return Order</li>
              <li>Cancel Order</li>
            </ul>
            <div className="mt-4">
              <p>15 Days Return Policy*</p>
              <p>Cash On Delivery*</p>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-2">COMPANY</h5>
            <ul>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>We are Hiring</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-2">CONNECT WITH US</h5>
            <ul className="flex flex-wrap space-x-4">
              <li>Facebook Icon</li>
              <li>Instagram Icon</li>
              <li>Twitter Icon</li>
              <li>Pinterest Icon</li>
              <li>Snapchat Icon</li>
              <li>Apple Icon</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-2">KEEP UP TO DATE</h5>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter Email Id"
                className="px-4 py-2 w-full sm:w-auto text-black"
              />
              <button className="bg-yellow-500 px-4 py-2 text-white">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            <div>
              <h5 className="font-bold mb-2">Men's Clothing</h5>
              <ul>
                <li>Top Wear</li>
                <li>Men's New Arrivals</li>
                <li>Men's T-Shirts</li>
                <li>Men's Hoodies & Sweatshirts</li>
                <li>Oversized T-Shirts for Men</li>
                <li>Men's Long Sleeve T-shirts</li>
                <li>Men's White T-shirts</li>
                <li>Men's Crew Neck T-shirts</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-2">Women's Clothing</h5>
              <ul>
                <li>Women's Top Wear</li>
                <li>Women's New Arrivals</li>
                <li>Women's T-Shirts</li>
                <li>Women's Fashion Tops</li>
                <li>Women's Tank Tops</li>
                <li>Women's Hoodies & Sweatshirts</li>
                <li>Women's Dresses</li>
                <li>Women's 3/4 Sleeve T-Shirts</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-2">Mobile Covers</h5>
              <ul>
                <li>Apple</li>
                <li>iPhone 16 Back Covers</li>
                <li>iPhone 15 Pro Max Back Covers</li>
                <li>iPhone 15 Pro Back Covers</li>
                <li>iPhone 15 Plus Back Covers</li>
                <li>iPhone 15 Back Covers</li>
                <li>iPhone 14 Pro Max Back Covers</li>
                <li>iPhone 14 Pro Back Covers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-wrap justify-between">
          <div className="flex flex-wrap items-center space-x-4">
            <p>100% Secure Payment</p>
            <div className="flex space-x-2">
              <span>GPay</span>
              <span>Paytm</span>
              <span>Visa</span>
              <span>Rupay</span>
              <span>Mastercard</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 space-x-4">
            <span>FANBOOK</span>
            <span>OFFERS</span>
            <span>SITEMAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
