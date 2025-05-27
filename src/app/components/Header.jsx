'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-[#1c2481] text-white text-xs sm:text-sm px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
      
      {/* Left section: Location and email */}
      <div className="flex items-center flex-wrap justify-center gap-3">
        <span className="flex items-center gap-1">
          <span className="text-red-500">📍</span> Find A Location
        </span>
        <span className="flex items-center gap-1">
          <span className="text-red-500">📧</span> info@prudenceschools.com
        </span>
      </div>

      {/* Right section: Social Icons */}
      <div className="flex items-center text-red-500 text-lg">
        <a href="#" className="px-3 border-l border-white hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="#" className="px-3 border-l border-white hover:text-white transition">
          <FaTwitter />
        </a>
        <a href="#" className="px-3 border-l border-white hover:text-white transition">
          <FaInstagram />
        </a>
        <a href="#" className="px-3 border-l border-white hover:text-white transition">
          <FaYoutube />
        </a>
        <a href="#" className="px-3 border-l border-r border-white hover:text-white transition">
          <FaPinterestP />
        </a>
      </div>
    </div>
  );
}
