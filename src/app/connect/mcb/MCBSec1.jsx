'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const sliderImages = [
  '/mcb_img/img2.jpg',
  '/mcb_img/img3.jpg',
  '/mcb_img/img4.jpg',
];

export default function MCBSec1() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // 3 seconds delay
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <Image src="/mcb_img/img1.jpg" alt="MCB Logo" width={120} height={120} />
          <h1 className="text-lg font-semibold">Enter The Smart School Era, Go Digital....</h1>
        </div>
        <div className="text-right text-orange-600 text-sm">
          <p className="font-semibold">Support</p>
          <p>(+91) 40-48584444</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-between bg-orange-500 p-6 md:p-12">
        
        {/* Left Section - Auto Slider */}
        <div className="relative w-full md:w-2/3 h-[300px] flex justify-center items-center mb-6 md:mb-0">
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={300}
                height={300}
                className="rounded-md shadow-md object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Section - Login Form */}
        <div className="bg-orange-100 rounded-lg p-6 md:w-1/3 w-full">
          <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>

          <label className="block mb-2 font-medium">Username / Email</label>
          <input
            type="email"
            placeholder="Username / Email"
            className="w-full px-4 py-2 mb-4 border rounded"
          />

          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 mb-4 border rounded"
          />

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded mb-4">
            Login
          </button>

          <div className="text-center text-sm text-gray-600 mb-4">---------------- OR ----------------</div>

          <div className="flex justify-center space-x-4 mb-4">
            <Image src="/mcb_img/img7.jpg" alt="Google" width={30} height={30} />
            <Image src="/mcb_img/img8.jpg" alt="Apple" width={30} height={30} />
            <Image src="/mcb_img/img9.jpg" alt="Microsoft" width={30} height={30} />
          </div>

          <div className="text-right text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot Password ?</a>
          </div>

          <p className="text-xs text-center text-gray-600 mt-4">
            By Logging in, you agree to MyClassboard's{' '}
            <a href="#" className="text-blue-600 underline">Conditions of Use</a> and{' '}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
