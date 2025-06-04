"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "/apply_img/img1.jpg",
  "/apply_img/img2.jpg",
  "/apply_img/img3.jpg",
  "/apply_img/img4.jpg",

];

const ApplySec2 = () => {
  return (
    <div className="w-full h-[90vh]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[90vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ApplySec2;
