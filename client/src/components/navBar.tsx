"use client";
import React, { useState } from 'react';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#363636] p-4">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-16">
        {/* Left Section (Links) */}
        <div className="flex space-x-16 px-16 hidden lg:flex">
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
        <div className="relative hidden lg:flex px-16">
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
            className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#363636] md:right-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M9 17a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide Down) */}
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-6 bg-neutral-700 px-4 py-6">
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

          {/* Search input for mobile */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full py-1 px-4 bg-white text-black focus:outline-none w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-700"
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
      )}
    </nav>
  );
};

export default Navbar;
