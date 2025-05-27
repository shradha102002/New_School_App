'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const events = [
  { title: 'Sports Day', subtitle: 'Annual sports meet celebration.', image: '/ev1.jpg' },
  { title: 'Farewell', subtitle: 'Wishing our seniors the best.', image: '/ev2.jpg' },
  { title: 'Citation Ceremony', subtitle: 'Honoring academic excellence.', image: '/ev3.jpg' },
  { title: 'Yoga Day', subtitle: 'Celebrating health & mindfulness.', image: '/ev4.jpg' },
  { title: 'Science Exhibition', subtitle: 'Exploring innovative ideas.', image: '/ev5.jpg' },
  { title: 'Cultural Fest', subtitle: 'A showcase of talents.', image: '/ev6.jpg' },
  { title: 'Independence Day', subtitle: 'Celebrating our freedom.', image: '/ev7.jpg' },
  { title: 'Annual Day', subtitle: 'A look back at our achievements.', image: '/ev8.jpg' },
];

const EventsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative py-20 px-6 md:px-16 bg-white">
      {/* Headings */}
      <div className="mb-8 text-center md:text-left">
        <h4 className="text-orange-500 text-base md:text-lg font-semibold tracking-widest uppercase">
          Events_________
        </h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2">
          Events at Prudence
        </h2>
      </div>

      {/* Navigation Buttons Positioned Left and Right */}
      <div className="flex justify-between items-center mb-6 px-2 md:px-0">
        <div
          ref={prevRef}
          className="swiper-button-prev-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110"
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110"
        >
          <ArrowRightIcon className="h-6 w-6" />
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-2 sm:px-4 md:px-6 lg:px-8"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{event.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EventsSection;
