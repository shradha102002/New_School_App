'use client';

import Image from 'next/image';

export default function JEEAdvSec1() {
  return (
    <section className="w-full bg-white">
      {/* Top Section with Image and Students */}
      <div className="relative w-full h-auto bg-white">
        <div className="relative w-full h-auto">
          <Image
            src="/jee-adv_img/img1.jpg"
            alt="Students Awards"
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Bottom Section with Contact */}
      <div className="bg-[#F43F5E] py-6 px-4 text-center text-white">
        <p className="text-lg md:text-xl font-medium">
          For Admissions, <span className="font-semibold">connect us</span>{' '}
          <a
            href="tel:+917304071071"
            className="inline-flex items-center font-bold ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h2l3.6 7.59L5.25 17h13.5l-3.35-4.41L19 5H3z"
              />
            </svg>
            +91 7304-071-071
          </a>
        </p>
      </div>
    </section>
  );
}
