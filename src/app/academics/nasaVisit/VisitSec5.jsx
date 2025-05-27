"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trips = [
  {
    title: "Trip to Melbourne",
    location: "Australia",
    image: "/nasa_img/trip1.jpg",
  },
  {
    title: "Trip to Movie World",
    location: "Australia",
    image: "/nasa_img/trip2.jpg",
  },
  {
    title: "Trip to Gold Coast & Sea World",
    location: "Australia",
    image: "/nasa_img/trip3.jpg",
  },
  {
    title: "Trip to Sydney",
    location: "Australia",
    image: "/nasa_img/trip4.jpg",
  },
  {
    title: "Visit to Paris",
    location: "Europe",
    image: "/nasa_img/trip5.jpg",
  },
];

export default function VisitSec5() {
  return (
    <section className="bg-[#f8f9fa] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-orange-500 font-bold text-xl md:text-3xl mb-8 border-b-2 border-orange-300 inline-block">
          GLOBAL TRIPS & EXCURSIONS
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-52">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-pink-500" />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{trip.location}</p>
                <h3 className="font-semibold text-lg text-gray-800">
                  {trip.title}
                </h3>
                <button className="text-blue-500 text-sm mt-1 hover:underline">
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}