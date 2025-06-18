"use client"
import Link from 'next/link';
import React, { useState } from 'react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-4 px-6 md:px-12 flex w-full mt-[-140px]  z-10 fixed items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/"className="flex items-center space-x-2">
          
            {/* Replace with your actual logo image or SVG */}
            <img src="/eYNcgv.png" alt="BellCow Ventures Logo" className="h-14 w-54" />
            {/* <span className="text-yellow-500 font-bold text-xl">BellCow Ventures</span> */}
         
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-white hover:text-[#44c5f8] transition-colors duration-300 font-medium">
          HOME
        </Link>
        <Link href="/about"  className="text-white hover:text-[#44c5f8] transition-colors duration-300 font-medium">
          ABOUT US
        </Link>
        <Link href="/services" className="text-white hover:text-[#44c5f8] transition-colors duration-300 font-medium">
          SERVICES
        </Link>
        <Link href="/portfolio" className="text-white hover:ttext-[#44c5f8] transition-colors duration-300 font-medium">
           PORTFOLIO
        </Link>
        <Link href="/contact" className="text-white hover:text-[#44c5f8] transition-colors duration-300 font-medium">
          CONTACT
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-blue-500 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="/hire-us-1-scaled.jpg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link href="/" className="text-yellow-500 hover:text-white transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-500 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
          ABOUT US
          </Link>
          <Link href="/services" className="text-white hover:text-yellow-500 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
           SERVICES
          </Link>
          <Link href="/portfolio" className="text-white hover:text-yellow-500 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
            PORTFOLIO
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-500 transition-colors duration-300 font-medium" onClick={() => setIsOpen(false)}>
            CONTACT
          </Link>
        </div>
      </div>

      {/* Yellow Circle with text - always visible */}
      
  <button className=' text-white  gredient px-[40px] py-[5px] rounded-2xl cursor-pointer'>Learn more</button>
     

     
    </nav>
  );
};

export default Header;