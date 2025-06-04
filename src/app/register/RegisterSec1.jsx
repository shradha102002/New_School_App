"use client";
import React from "react";
import Link from "next/link";
import { PhoneCall, Globe } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function RegisterSec1() {
  return (
    <div className="w-full">
      {/* Top Blue Bar */}
      <div className="bg-[#0056b3] text-white text-sm px-4 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-5">
            <PhoneCall size={30} />
            <span>+91 9625921518</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={30} />
            <span>info@prudenceschools.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>Follow Us :</span>
          <a href="#" className="hover:text-gray-200"><FaFacebookF size={16} /></a>
          <a href="#" className="hover:text-gray-200"><FaTwitter size={16} /></a>
          <a href="#" className="hover:text-gray-200"><FaInstagram size={16} /></a>
        </div>
      </div>

      {/* Logo + Nav Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Nav Buttons with Routing */}
        <div className="mt-4 md:mt-0 flex gap-6 text-sm font-semibold text-gray-700">
          <Link href="/enquiry/new" className="hover:text-pink-600">NEW ENQUIRY</Link>
          <Link href="/enquiry/already-enquired" className="hover:text-pink-600">ALREADY ENQUIRED</Link>
          <Link href="/enquiry/already-registered" className="hover:text-pink-600">ALREADY REGISTERED</Link>
        </div>
      </div>
    </div>
  );
}
