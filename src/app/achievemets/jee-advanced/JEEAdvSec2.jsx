'use client';

import Image from 'next/image';
import React from 'react';

const JEEAdvSec2 = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="flex-1">
          <Image
            src="/jee-adv_img/img2.jpg" // Make sure this image is in /public/jee_img/
            alt="Students writing exam"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-justify">
          <h2 className="text-orange-500 text-xl font-bold uppercase tracking-wide mb-4">
            ABOUT JEE (ADVANCED) EXAMINATION_________
          </h2>
          <p className="mb-4 text-gray-800">
            The Joint Entrance Examination – Advanced (JEE-Advanced), previously known as the Indian Institute of
            Technology – Joint Entrance Examination (IIT-JEE), is a rigorous annual exam in India that assesses
            candidates’ proficiency in physics, chemistry, and mathematics. Administered by one of the seven zonal
            IITs—namely IIT Roorkee, IIT Kharagpur, IIT Delhi, IIT Kanpur, IIT Bombay, IIT Madras, and IIT
            Guwahati—under the supervision of the Joint Admission Board (JAB), this exam rotates among these
            institutions yearly. It is specifically designed for candidates who qualify through the JEE-Main, with an
            exception made for foreign applicants.
          </p>
          <p className="mb-4 text-gray-800">
            Traditionally, JEE-Advanced was the exclusive criterion for entry into undergraduate programs at the Indian
            Institutes of Technology (IITs). While recent additions such as UCEED, Online B.S., and Olympiad-based
            admissions have introduced alternative pathways, the number of seats available through these methods remains
            limited.
          </p>
          <p className="mb-4 text-gray-800">
            Several other prestigious institutions also rely solely on JEE-Advanced scores for their admissions. These
            include the Marine Engineering and Research Institute, the Indian Institute of Petroleum and Energy (IIPE),
            the Rajiv Gandhi Institute of Petroleum Technology, the Indian Institute of Space Technology (IIST), and
            the Indian Institute of Science (IISc). Additionally, prominent international universities like the
            University of Cambridge and the National University of Singapore consider JEE-Advanced scores for Indian
            applicants.
          </p>
          <p className="text-gray-800">
            JEE-Advanced is consistently ranked among the world’s most challenging examinations, reflecting its rigorous
            standards and the high level of knowledge and skill required to succeed.
          </p>

          <button className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default JEEAdvSec2;
