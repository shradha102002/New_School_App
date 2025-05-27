'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const leadershipData = [
  {
    name: 'Dr. C.B. Mishra',
    role: 'Principal',
    location: 'Ashok Vihar',
    image: '/schoolLeadership/img2.jpg',
  },
  {
    name: 'Mr Vivek Thapliyal',
    role: 'Vice Principal',
    location: 'Ashok Vihar',
    image: '/schoolLeadership/img3.jpg',
  },
  {
    name: 'Mr Ritesh Sharma',
    role: ' Principal',
    location: 'Dwarka Sec 22',
    image: '/schoolLeadership/img5.jpg',
  },
  {
    name: 'Ms. Neena Newar',
    role: 'Principal',
    location: 'Dwarka Sec 16B',
    image: '/schoolLeadership/img1.jpg',
  },
  {
    name: 'Mrs Smriti Nanda',
    role: 'Vice Principal',
    location: 'Ashok Vihar',
    image: '/schoolLeadership/img4.jpg',
  },
];

export default function SchoolLeadershipSection() {
  return (
    <section className="relative py-20 px-4 md:px-10 bg-white">
      <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2">
        SCHOOL LEADERSHIP TEAM _________
      </h2>
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-black">
        Our School Leadership
      </h1>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="swiper-button-prev-leader bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowLeftIcon className="h-6 w-6" />
        </div>
        <div className="swiper-button-next-leader bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowRightIcon className="h-6 w-6" />
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next-leader',
          prevEl: '.swiper-button-prev-leader',
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {leadershipData.map((leader, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <Image
                src={leader.image}
                alt={leader.name}
                width={400}
                height={300}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {leader.name}
                </h3>
                <p className="text-gray-500">{leader.role} - {leader.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
