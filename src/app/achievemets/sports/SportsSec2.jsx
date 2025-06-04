'use client';

import Image from 'next/image';
import React from 'react';

const achievements = [
  {
    id: 1,
    title:
      '“Chess is the gymnasium of the mind.” – Blaise Pascal Prudence School, Dwarka-16B, proudly secured 2nd position in the Zonal Chess Championships 2024-25, held at Abhinav Global School, Dwarka, Sector-13',
    date: 'August 27 to 30, 2024',
    description:
      'Chess is the gymnasium of the mind." — Blaise Pascal Prudence School, Dwarka-16B, proudly secured 2nd position in the Zonal Chess Championships 2024-25, held at Abhinav Global School, Dwarka, Sector-13, from August 27 to 30, 2024. Organized by the DOE, the competition saw participation from 27 schools. Both the girls and boys teams clinched 2nd place, showcasing exceptional talent and teamwork. Congratulations to all the participants and their mentor for their remarkable achievement! .',
    image: '/sports_img/img1.jpg',
  },
  {
    id: 2,
    title:
      '“Champions are made from something they have deep inside them - a desire, a dream, a vision.” - Muhammad Ali Prudence School Dwarka 16B secured the Second position in the Zonal Table Tennis Boys Championships 2024, held at Mount Carmel School, Dwarka Sector 22 from August 20 to 22, 2024',
    date: 'August 20 to 22, 2024',
    description:
      'Champions are made from something they have deep inside them - a desire, a dream, a vision."- Muhammad Ali Prudence School Dwarka 16B secured the Second position in the Zonal Table Tennis Boys Championships 2024, held at Mount Carmel School, Dwarka Sector 22 from August 20 to 22, 2024, organised by DOE. The team excelled among 36 participating schools. The outstanding players included Kanav Chugh (XIA), Amulya Sharma (XIIB), and Hardik Kumar (XB). The school is proud of the teams dedication and sportsmanship! .',
    image: '/sports_img/img2.jpg',
  },
];

const SportsSec2 = () => {
  return (
    <section className="px-6 md:px-28 lg:px-36 py-12 bg-white">
      <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-10 text-center md:text-left text-2xl md:text-5xl">
        SPORT ACHIEVEMENTS _________
    
      </h2>
      <div className="space-y-12">
        {achievements.map(({ id, title, date, description, image }) => (
          <div
            key={id}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-12"
          >
            <div className="w-full md:w-1/3">
              <Image
                src={image}
                alt="Achievement"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-md font-bold text-gray-800">{title}</h3>
              <p className="text-orange-500 font-semibold mt-2">{date}</p>
              <p className="mt-4 text-gray-600">{description}</p>
              <button className="mt-4 px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SportsSec2;
