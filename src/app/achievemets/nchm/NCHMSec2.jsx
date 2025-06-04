'use client';

import Image from 'next/image';
import React from 'react';

const NCHMSec2 = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="flex-1">
          <Image
            src="/nchm_img/img2.jpg" // Make sure this image is in /public/jee_img/
            alt="Students writing exam"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-justify">
          <h2 className="text-orange-500 text-xl font-bold uppercase tracking-wide mb-4">
            ABOUT NCHM JEE_________
          </h2>
          <p className="mb-4 text-gray-800">
           The Ministry of Education (MOE) of the Government of India (GOI) set up the National Testing Agency (NTA) as an independent, self-sustaining organization under the Societies Registration Act of 1860. The NTA is responsible for conducting efficient and transparent examinations that adhere to international standards, assessing candidates’ competencies for admission to leading higher education institutions.
          </p>
          <p className="mb-4 text-gray-800">
            Established in 1982, the National Council for Hotel Management & Catering Technology (NCHMCT) functions as an autonomous entity under the Ministry of Tourism, Government of India. Its objective is to promote the coordinated growth and development of hospitality management education nationwide. The Council regulates the academic standards of hospitality education and training at its affiliated institutions. Admission to the courses is determined by the NCHM JEE exam, with NCHM JEE scores recognized by all participating institutes for their B.Sc. (HHA) programs.
          </p>
         

          <button className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NCHMSec2;
