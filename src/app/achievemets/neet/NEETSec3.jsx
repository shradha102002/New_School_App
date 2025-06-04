'use client';

import Image from 'next/image';
import React from 'react';

const NEETSec3 = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2">
          NEET Qualifiers <span className="text-orange-400">_________</span>
        </h2>
        <h1 className="text-3xl md:text-6xl font-extrabold mb-12 text-black">
          We are proud of our NEET Qualifiers
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="shadow-md rounded-lg overflow-hidden">
            <Image
              src="/neet_img/img3.jpg"
              alt="NEET Qualifier Poster 1"
              width={400}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Card 2 */}
          <div className="shadow-md rounded-lg overflow-hidden">
            <Image
              src="/neet_img/img4.jpg"
              alt="NEET Qualifier Poster 2"
              width={400}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Card 3 */}
          <div className="shadow-md rounded-lg overflow-hidden">
            <Image
              src="/neet_img/img5.jpg"
              alt="NEET Qualifier Poster 3"
              width={400}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NEETSec3;
