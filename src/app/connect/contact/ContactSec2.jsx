"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, RotateCcw } from "lucide-react";

export default function ContactSec2() {
  const [captcha, setCaptcha] = useState("");

  function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }

  useEffect(() => {
    // Run only on client side
    setCaptcha(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <section className="bg-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-orange-500 text-2xl font-bold uppercase tracking-wide mb-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us <span className="inline-block w-10 border-t-4 border-orange-400 ml-2 align-middle" />
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          General Enquiry Form
        </motion.h1>

        <div className="bg-[#f5f9ff] rounded-xl shadow-md p-6 md:p-10 grid md:grid-cols-3 gap-8">
          {/* Left Form Section */}
          <motion.form
            className="md:col-span-2 grid gap-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="border rounded px-4 py-2 w-full" />
              <input type="email" placeholder="Your Email" className="border rounded px-4 py-2 w-full" />
              <input type="text" placeholder="Subject" className="border rounded px-4 py-2 w-full" />
              <input type="tel" placeholder="Your Phone" className="border rounded px-4 py-2 w-full" />
            </div>
            <select className="border rounded px-4 py-2 w-full">
              <option>Select School</option>
              <option>Branch 1</option>
              <option>Branch 2</option>
            </select>
            <textarea placeholder="Message" className="border rounded px-4 py-2 w-full h-32"></textarea>

            <input type="text" placeholder="Enter Captcha" className="border rounded px-4 py-2 w-full" />
            {captcha && (
              <div className="flex items-center gap-4">
                <div className="bg-white border px-4 py-2 text-lg font-mono tracking-widest">{captcha}</div>
                <button type="button" onClick={refreshCaptcha} className="text-pink-500 hover:text-pink-700">
                  <RotateCcw />
                </button>
              </div>
            )}

            <p className="text-sm font-semibold">
              NOTE : <span className="text-black">For Admission Related Enquiry </span>
              <a href="#" className="text-pink-500 hover:underline">click here</a>
            </p>

            <button
              type="submit"
              className="bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Right Info Section */}
          <motion.div
            className="space-y-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-3">
              <span className="text-pink-500 text-2xl">🏠</span>
              <p className="font-semibold">Prudence Group of Schools</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink-500 text-2xl">📞</span>
              <p className="text-sm">
                +91 7304-071-071 <br />
                <span className="text-gray-500">(Super Receptionist - 30 Lines)</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink-500 text-2xl">📧</span>
              <p className="text-sm">info@prudenceschools.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-pink-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-pink-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-pink-600">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
