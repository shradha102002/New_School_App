'use client';

import Image from 'next/image';
import React from 'react';

const NEETSec2 = () => {
  return (
    <section className="px-6 md:px-20 lg:px-32 py-12 bg-white">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/neet_img/img2.jpg" // Replace with your actual image path
            alt="NEET Students"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2">
           <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-6 px-4 md:px-10 md:text-3xl">
       About NEET Examination _______
      </h2>

          <p className="text-gray-700 text-justify mb-4">
            The Ministry of Human Resource Development (MHRD), now known as the Ministry of Education (MoE), Government of India (GOI), has set up the National Testing Agency (NTA) as an independent and autonomous body to conduct high-quality, transparent, and internationally standardized tests. These tests are designed to evaluate the competency of candidates seeking admission to prestigious higher education institutions.
          </p>

          <p className="text-gray-700 text-justify mb-4">
            The National Testing Agency (NTA) administers the National Eligibility cum Entrance Test [NEET (UG)] in a Pen and Paper format across 13 languages. NEET (UG) serves as a unified and standardized examination for entry into undergraduate medical programs at all medical institutions. In accordance with Section 14 of the National Commission for Indian System of Medicine Act, 2020, NEET (UG) also provides a uniform admission process for undergraduate courses in BAMS, BUMS, and BSMS under the Indian System of Medicine. Additionally, the NEET (UG) is mandated for admission to the BHMS course as per the National Commission for Homeopathy Act, 2020.
          </p>

          <p className="text-gray-700 text-justify mb-6">
            NEET Examinations is generally conducted in the following languages: English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu. Aspiring candidates for the Military Nursing Service (MNS) seeking admission to the BSc Nursing course at Armed Forces Medical Service Hospitals must also qualify through NEET. The NEET score will be used to shortlist candidates for the four-year BSc Nursing program.
          </p>

          <button className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default NEETSec2;
