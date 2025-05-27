'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white pt-10 pb-6 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Why Prudence */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Why Prudence !</h3>
          <p className="text-sm leading-relaxed">
            "Empowering minds, shaping futures: Where learning meets excellence at Prudence Schools.
            Explore, discover, and thrive with us!".
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Prudence Group of Schools</p>
          <p className="text-sm mt-1">+91 7304071071</p>
          <p className="text-sm mt-1">info@prudenceschools.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>About School</li>
            <li>Values & Attributes</li>
            <li>Scholastic</li>
            <li>Social Initiatives</li>
            <li>Awards & Accolades</li>
            <li>Faculty Awards</li>
            <li>News & Updates</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Our Motto */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Motto</h3>
          <p className="text-sm mb-4">Educate - Innovate - Create</p>
          <button className="bg-[#f84269] hover:bg-blue-600 transition px-6 py-2 rounded-full text-white text-sm font-medium">
            Post Your Query
          </button>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p>
          <span className="underline">Prudence Schools</span>, All right reserved.
        </p>
        <p className="mt-3 md:mt-0">
          Designed By <span className="underline">Prudence IT Team</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
