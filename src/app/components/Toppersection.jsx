'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import 'swiper/css';
import 'swiper/css/navigation';

const toppers = [
  {
    src: 'topper1.jpg',
    alt: 'Stream Toppers',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Stream Toppers | Grade XII',
  },
  {
    src: 'topper2.jpg',
    alt: 'Perfect 100',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Scored Perfect 100 marks | Grade XII',
  },
  {
    src: 'topper3.jpg',
    alt: 'School Toppers',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'School Toppers | Grade X',
  },
  {
    src: 'topper4.jpg',
    alt: 'AI Toppers',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Perfect 100 in AI, French, Social Science',
  },
  {
    src: 'topper5.jpg',
    alt: 'Commerce Topper',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Commerce Stream Topper with 98%',
  },
  {
    src: 'topper6.jpg',
    alt: 'Science Topper',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Science Topper Achieved 99%',
  },
  {
    src: 'topper7.jpg',
    alt: 'Maths Genius',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Perfect 100 in Mathematics | Grade X',
  },
  {
    src: 'topper8.jpg',
    alt: 'Artistic Achiever',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Top score in Fine Arts | Grade XII',
  },
  {
    src: 'topper9.jpg',
    alt: 'Best in Humanities',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Humanities Stream Topper | Grade XII',
  },
  {
    src: 'topper10.jpg',
    alt: 'All-Rounder',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Academic + Sports Champion',
  },
  {
    src: 'topper11.jpg',
    alt: 'Language Master',
    title: 'PRUDENCE DWARKA SEC 22',
    subtitle: 'Perfect 100 in English & Hindi',
  },
];

export default function Toppersection() {
 return (
  <section className="relative py-20 px-4 md:px-10 bg-[#f9f9f9]">
    <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
        Our Result _________
      </h2>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
        Our School Toppers
      </h1>

      <div className="flex justify-between items-center mb-6 px-4 md:px-16">
        <div className="swiper-button-prev-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowLeftIcon className="h-6 w-6" />
        </div>
        <div className="swiper-button-next-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowRightIcon className="h-6 w-6" />
        </div>
      </div>

      <div className="px-2 md:px-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {toppers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-md bg-white h-full flex flex-col justify-between border border-gray-200 transition-transform duration-500 hover:scale-105">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[400px] object-cover"
                />
                <div className="bg-white py-6 px-4 text-left">
                  <h3 className="text-pink-700 font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-base mb-4">{item.subtitle}</p>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full font-semibold text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
