'use client';

import { useRef } from 'react';
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
    <section className="relative py-20 bg-white px-4 md:px-10">
      <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
        Events _________
      </h2>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
        Events at Prudence
      </h1>
     

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6 gap-4 sm:gap-0">
        <div
          ref={prevRef}
          className="swiper-button-prev-custom bg-orange-500 hover:bg-orange-600 text-white p-3 sm:p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110"
        >
          <ArrowLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom bg-orange-500 hover:bg-orange-600 text-white p-3 sm:p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110"
        >
          <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
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
        className="!px-1 sm:!px-4 md:!px-6 lg:!px-8"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl duration-300">
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{event.title}</h3>
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
