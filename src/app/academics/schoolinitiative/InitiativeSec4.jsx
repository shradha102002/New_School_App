'use client';
import Image from 'next/image';

const initiatives = [
  {
    title: 'CELEBRATION OF INTERNATIONAL LITERACY DAY',
    image: '/initiative_img/img1.jpg',
  },
  {
    title: 'SPECIAL ASSEMBLY ON INTERNATIONAL LITERACY',
    image: '/initiative_img/img2.jpg',
  },
  {
    title: 'CELEBRATION OF INTERNATIONAL LITERACY DAY',
    image: '/initiative_img/img3.jpg',
  },
  {
    title: 'CELEBRATION OF INTERNATIONAL LITERACY DAY',
    image: '/initiative_img/img4.jpg',
  },
  {
    title: 'VISIT TO NGO – ANGANVADI ON INTERNATIONAL',
    image: '/initiative_img/img5.jpg',
  },
  {
    title: 'INTERNATIONAL LITERACY DAY',
    image: '/initiative_img/img6.jpg',
  },
  {
    title: 'A VISIT TO OLD AGE HOME - SHIV AASHRAY',
    image: '/initiative_img/img7.jpg',
  },
  {
    title: 'WORLD SENIOR CITIZEN’S DAY CELEBRATIONS',
    image: '/initiative_img/img8.jpg',
  },
  {
    title: 'WORLD SENIOR CITIZEN’S DAY CELEBRATIONS',
    image: '/initiative_img/img9.jpg',
  },
  {
    title: 'WORLD SENIOR CITIZEN’S DAY CELEBRATIONS',
    image: '/initiative_img/img10.jpg',
  },
  {
    title: 'NATIONAL SENIOR CITIZEN DAY CELEBRATIONS',
    image: '/initiative_img/img11.jpg',
  },
  {
    title: 'WORLD SENIOR CITIZEN’S DAY CELEBRATIONS',
    image: '/initiative_img/img12.jpg',
  },
];

export default function InitiativeSec4() {
  return (
    
    <section className="w-full bg-white px-4 md:px-10 py-10">
       <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
        Let’s Contribute_________
      </h2>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
       Social Initiatives & NGO Visits
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {initiatives.map((item, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden border border-gray-200 bg-white"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-[120px]">
              <p className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                {item.title}
              </p>
              <button className="bg-[#ff4f6d] hover:bg-[#e0435f] text-white text-sm font-semibold px-4 py-2 rounded-md w-max mx-auto">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
