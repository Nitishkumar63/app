import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold text-white">Biskut Shop</h3>
          <p className="mt-2 text-sm">
            The best biscuits in town, made with love and the finest
            ingredients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-rose-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-rose-600">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-rose-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-rose-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-bold text-white">Customer Service</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-rose-600">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-rose-600">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-rose-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-rose-600">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-white">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-rose-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-300 hover:text-rose-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-300 hover:text-rose-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-300 hover:text-rose-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © 2025 Biskut Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
