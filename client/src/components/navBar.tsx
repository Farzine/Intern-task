import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-4 flex items-center justify-between">
      <div className="flex space-x-16 px-16">
        <div className="text-white hover:text-gray-300 cursor-pointer flex">
          Home
          <FaAngleDown className="mt-1 ml-2" />
        </div>
        <div className="text-white hover:text-gray-300 cursor-pointer flex">
          Event
          <FaAngleDown className="mt-1 ml-2" />
        </div>
        <div className="text-white hover:text-gray-300 cursor-pointer flex">
          Contact
          <FaAngleDown className="mt-1 ml-2" />
        </div>
        <div className="text-white hover:text-gray-300 cursor-pointer flex">
          Blog
          <FaAngleDown className="mt-1 ml-2" />
        </div>
      </div>

      {/* Right Section with Search */}
      <div className="flex px-16">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full py-1 px-4 bg-white text-black focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M9 17a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
