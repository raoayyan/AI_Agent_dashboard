"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <Image src="/logo.png" alt="logo" width={32} height={32} />
            </Link>
          </div>

          <div className=" flex flex-row items-center w-auto">
          <Link href="/" className="block text-white  hover:text-yellow-400">Home</Link>
          <Link href="/dashboard" className="block p-4 text-white hover:text-yellow-400">Dashboard</Link>
          
          
          </div>

          <div className="hidden lg:block">
            <Link href=""
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
            >
              Join Now
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-gray-400 transition-all duration-200 rounded-md lg:hidden focus:bg-gray-700 hover:bg-gray-700 hover:text-white"
            onClick={toggleMenu}
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        
      </div>
    </header>
  );
};

export default Header;