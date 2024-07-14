import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-xl font-bold mb-2">Book Bazaar</h2>
            <address className="not-italic text-gray-400">
              1234 Katraj, Pune, Maharashtra, 12345<br />
              Email: <a href="mailto:info@company.com" className="hover:underline">info@company.com</a><br />
              Phone: <a href="tel:+11234567890" className="hover:underline">(123) 456-7890</a>
            </address>
          </div>
          {/* Navigation Links */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="text-gray-400">
              <li className="mb-1"><Link to="/" className="hover:underline">Home</Link></li>
              <li className="mb-1"><Link to="/aboutus=page" className="hover:underline">About Us</Link></li>
              <li className="mb-1"><Link to="/services" className="hover:underline">Services</Link></li>
              <li className="mb-1"><Link to="/contactus=page" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white" rel="noopener noreferrer" target="_blank" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.595 0 0 .585 0 1.304v21.392C0 23.415.595 24 1.325 24h11.495V14.708h-3.13v-3.707h3.13V8.507c0-3.1 1.896-4.788 4.666-4.788 1.325 0 2.466.098 2.798.142v3.24l-1.919.001c-1.504 0-1.794.713-1.794 1.76v2.31h3.587l-.467 3.707h-3.12V24h6.116C23.405 24 24 23.415 24 22.696V1.304C24 .585 23.405 0 22.675 0z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white" rel="noopener noreferrer" target="_blank" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.86 9.86 0 01-3.127 1.184 4.917 4.917 0 00-8.384 4.482 13.94 13.94 0 01-10.11-5.132 4.93 4.93 0 001.523 6.573 4.902 4.902 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.889a4.935 4.935 0 01-2.224.084 4.932 4.932 0 004.6 3.42 9.868 9.868 0 01-6.1 2.104c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 007.557 2.213c9.054 0 14.002-7.503 14.002-14.002 0-.213-.005-.426-.014-.637A10.004 10.004 0 0024 4.557z"/>
                </svg>
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white" rel="noopener noreferrer" target="_blank" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.524 0-10 4.477-10 10 0 4.418 2.865 8.167 6.839 9.49.5.092.682-.218.682-.483 0-.237-.008-.865-.013-1.699-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.109-1.464-1.109-1.464-.906-.62.069-.607.069-.607 1.003.071 1.532 1.032 1.532 1.032.89 1.525 2.337 1.085 2.904.83.091-.645.348-1.085.635-1.336-2.222-.253-4.556-1.111-4.556-4.944 0-1.092.39-1.985 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025a9.56 9.56 0 012.5-.336 9.53 9.53 0 012.5.336c1.91-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.683 0 3.842-2.337 4.687-4.565 4.934.357.308.675.917.675 1.85 0 1.335-.012 2.415-.012 2.743 0 .268.18.579.688.481C19.136 20.207 22 16.457 22 12.04c0-5.523-4.478-10-10-10z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © 2024 Book Bazaar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
