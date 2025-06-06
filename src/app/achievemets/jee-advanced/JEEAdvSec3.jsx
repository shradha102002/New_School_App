'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

import 'swiper/css';
import 'swiper/css/navigation';

const rankHolderImages = [
  '/jee_img/img3.jpg',
  '/jee_img/img4.jpg',
  '/jee_img/img5.jpg',
  '/jee_img/img6.jpg',
  '/jee_img/img7.jpg',
];

export default function JEEAdvSec3() {
  return (
    <section className="relative py-20 bg-white px-4 md:px-10">
      <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
        OUR JEE (ADVANCED) RANK HOLDERS _________
      </h2>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
        We are proud of our JEE (Advanced) Rank Holders
      </h1>

      <div className="flex justify-between items-center mb-6 px-4 md:px-10">
        <div className="swiper-button-prev-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowLeftIcon className="h-6 w-6" />
        </div>
        <div className="swiper-button-next-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowRightIcon className="h-6 w-6" />
        </div>
      </div>

      <div className="px-4 md:px-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
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
          {rankHolderImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-xl overflow-hidden shadow-md bg-[#f7f9fc] h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
                <img
                  src={src}
                  alt={`Rank Holder ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
                <div className="bg-gray py-10 px-4 text-left">
                  <p className="text-xl font-semibold text-gray-800 group-hover:text-[#722f37] transition-colors duration-300">
                    Rank Holder {index + 1}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
