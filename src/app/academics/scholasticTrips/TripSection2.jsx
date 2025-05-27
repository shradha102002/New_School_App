'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';


const trips = [
  {
    title: "TRIP TO MUSSOORIE",
    image: "/trip_img/img1.jpg",
    date: "2022-12-02"
  },
  {
    title: "TRIP TO CHAIL, SHIMLA & KUFRI",
    image: "/trip_img/img2.jpg",
    date: "2023-05-08"
  },
   {
    title: "TRIP FILLED WITH FUN AND ENTHUSIASM AT CHAIL",
    image: "/trip_img/img3.jpg",
    date: "2023-04-10"
  },
  {
    title: "NANITAL TRIP",
    image: "/trip_img/img4.jpg",
    date: "2022-09-30"
  },
  {
    title: "VISIT TO RAIL MUSEUM (GRADE 2)",
    image: "/trip_img/img5.jpg",
    date: "2023-05-18"
  },
  {
    title: "VISIT TO RAIL MUSEUM",
    image: "/trip_img/img6.jpg",
    date: "2023-05-18"
  },
  {
    title: "TRIP TO CHANDIGARH (GRADE 3)",
    image: "/trip_img/img7.jpg",
    date: "2023-05-24"
  },
  {
    title: "TRIP TO CHANDIGARH (GRADE 3)",
    image: "/trip_img/img8.jpg",
    date: "2023-05-24"
  },
  {
    title: "PICNIC: ECO ADVENTURE PARK (GRADE 1 - 3)",
    image: "/trip_img/img9.jpg",
    date: "2023-02-18"
  },
  {
    title: "PICNIC TO ADVENTURE ISLAND (GRADE 9 & 10)",
    image: "/trip_img/img10.jpg",
    date: "2023-03-24"
  },
  {
    title: "PICNIC TO OBSTACLE PARK (GRADE T0 S)",
    image: "/trip_img/img11.jpg",
    date: "2023-02-18"
  },
  {
    title: "PBL THEME: VISIT TO RAIL MUSEUM (GRADE PREP)",
    image: "/trip_img/img12.jpg",
    date: "2023-02-13"
  },
  {
    title: "PICNIC TO FUNDAYS (GRADE NURSERY)",
    image: "/trip_img/img13.jpg",
    date: "2023-02-13"
  },
  {
    title: "PICNIC TO FUNDAYS (GRADE NURSERY & PREP)",
    image: "/trip_img/img14.jpg",
    date: "2023-02-13"
  },
  {
    title: "PICNIC TO ADVENTURE PARK",
    image: "/trip_img/img15.jpg",
    date: "2023-03-03"
  },
  {
    title: "VISIT TO NEHRU PLANETARIUM (GRADE 3)",
    image: "/trip_img/img16.jpg",
    date: "2019-10-28"
  },
  {
    title: "VISIT TO NEHRU PLANETARIUM (GRADE 3)",
    image:"/trip_img/img17.jpg",
    date: "2019-12-12"
  },
  {
    title: "TRIP TO BHOWALI, UTTARAKHAND",
    image: "/trip_img/img18.jpg",
    date: "2019-11-23"
  },
  {
    title: "TRIP TO BHOWALI",
    image: "/trip_img/img19.jpg",
    date: "2019-11-23"
  },
  {
    title: "ITIHAS WALK TO QUTUB COMPLEX (G7)",
    image: "/trip_img/img20.jpg",
    date: "2019-08-30"
  },
  {
    title: "ITIHAS WALK TO QUTUB COMPLEX (G7)",
    image: "/trip_img/img21.jpg",
    date: "2019-08-30"
  },
  {
    title: "TRIP TO CHANDIGARH (G3) - PRUDENCE DWARKA 16B",
    image: "/trip_img/img22.jpg",
    date: "2019-10-28"
  },
  {
    title: "TRIP TO CHANDIGARH (G3) - PRUDENCE ASHOK VIHAR",
    image: "/trip_img/img23.jpg",
    date: "2019-10-29"
  },
  {
    title: "PICNIC TO ROCKSPORT ADVENTURE CAMP (NUR-G3) - PRUDENCE ASHOK VIHAR",
    image: "/trip_img/img24.jpg",
    date: "2019-12-03"
  },

  {
    title: "VISIT TO MOGLI ADVENTURES (G1 - G5) - PRUDENCE DWARKA 16B",
    image: "/trip_img/img25.jpg",
    date: "2019-12-05"
  }
];

export default function TripSection2() {
  return (
    <section className="py-10 px-4 md:px-12 lg:px-20 bg-white">
      <h2 className="text-3xl font-bold text-orange-600 border-b-4 border-orange-400 mb-8 w-fit">
        TRIPS & EXCURSION
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trips.map((trip, idx) => (
          <motion.div
            key={idx}
            className="border rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{trip.title}</h3>
              <p className="text-sm text-gray-600">{trip.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
