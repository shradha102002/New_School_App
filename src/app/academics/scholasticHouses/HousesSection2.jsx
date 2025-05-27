'use client';

import Image from 'next/image';

export default function ScholarHouses() {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src="/houses_img/houses2.jpg"
              alt="House Activities"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">SCHOLAR HOUSES</h2>
          <h3 className="text-xl font-semibold text-pink-600 mb-6">TagLines:</h3>

          <ul className="text-base md:text-lg font-medium text-gray-800 mb-6 space-y-2">
            <li><span className="font-bold">INNOVATORS</span> : <span className="text-orange-600">We Embrace Change</span></li>
            <li><span className="font-bold">CREATORS</span> : <span className="text-orange-600">We Nurture Creativity</span></li>
            <li><span className="font-bold">PIONEERS</span> : <span className="text-orange-600">We Pave the Way</span></li>
            <li><span className="font-bold">EXPLORERS</span> : <span className="text-orange-600">We Exceed Limits</span></li>
          </ul>

          <p className="text-sm md:text-base text-gray-700 mb-4">
            The Prudence Group of Schools’ house system offers students extensive opportunities to participate in a
            diverse array of activities, both academic and extracurricular.
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            These activities encompass sports tournaments, drama productions, music concerts, community service initiatives, and more.
          </p>
          <p className="text-sm md:text-base text-gray-700">
            Every student is assigned to one of the four houses — <strong>INNOVATORS, CREATORS, PIONEERS, or EXPLORERS</strong> — each of which competes in various inter-house challenges spanning academic and co-curricular events.
          </p>
        </div>
      </div>
    </section>
  );
}
