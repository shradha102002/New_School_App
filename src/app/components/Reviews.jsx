'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const reviews = [
  {
    name: 'DEVYANI MOHAN',
    relation: 'M/O TARSH MOHAN (I A)',
    content:
      'Prudence School is truly one of the best educational institutions in Delhi. Its CBSE curriculum is balanced with modern teaching methods...',
    image: '/testimonial-logo.png',
  },
  {
    name: 'MR. ANKUR',
    relation: 'F/O VANYA CHADHA (IV C)',
    content:
      'Being part of the Prudence family gives me immense satisfaction. The school provides an ideal blend of academics, co-curricular activities...',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Mrs Sonali Gupta',
    relation: 'M/O Arhana Gupta (Nur-A)',
    content:
      'Prudence School has proven to be a pioneer in nurturing young minds. The environment is caring, the teaching methods are innovative, and the exposure children receive is exceptional. My daughter loves going to school every day.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Rahul Sinha',
    relation: 'F/O Kunal Sinha (II B)',
    content:
      'The school focuses not just on academics but also on personality development and leadership skills. My son’s communication and social skills have greatly improved thanks to interactive classrooms and school events.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Nikita Arora',
    relation: 'M/O Anaya Arora (V D)',
    content:
      'We’re extremely happy with the school’s commitment to overall development. The extracurricular programs are well-structured and the digital learning support ensures continuity even during unforeseen times.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Amit Mehra',
    relation: 'F/O Priya Mehra (III A)',
   content: "I truly appreciate the teachers' dedication and their ability to connect with each child personally. They create a safe and supportive environment where my daughter feels comfortable and excited to learn.",
    image: '/testimonial-logo.png',
  },
  {
    name: 'Sangeeta Verma',
    relation: 'M/O Tushar Verma (Nursery)',
    content:
      'Prudence feels like a second home for our child. The nurturing atmosphere, safety measures, and loving staff make us feel confident that our child is in good hands.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Kavita Sharma',
    relation: 'M/O Nikhil Sharma (IV B)',
    content:
      'The school instills discipline and strong moral values. My son has become more responsible and respectful, and that’s the kind of foundation every parent dreams of for their child.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Deepak Yadav',
    relation: 'F/O Preeti Yadav (II D)',
    content:
      'The infrastructure is top-notch and digital classrooms provide an engaging experience for kids. The school uses modern tools to make learning fun and effective.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Meena Rathi',
    relation: 'M/O Aarav Rathi (KG)',
    content:
      'I love how the school strikes a perfect balance between fun activities and serious academic learning. My child is always excited to share what he learned at school.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Rajeev Kumar',
    relation: 'F/O Nisha Kumar (I B)',
    content:
      'Prudence’s staff is excellent and always keeps parents informed. There’s a strong collaboration between home and school, which makes a big difference in our daughter’s progress.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Pooja Sen',
    relation: 'M/O Riya Sen (III C)',
    content:
      'The school has played a crucial role in transforming my daughter into a confident public speaker. She has started participating in events, which was never the case before.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Anjali Taneja',
    relation: 'M/O Raghav Taneja (UKG)',
    content:
      'Caring teachers, a vibrant learning atmosphere, and constant innovation in teaching practices make Prudence School stand out. I am grateful for the joy it brings to my child’s learning.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Rohit Arora',
    relation: 'F/O Diya Arora (V A)',
    content:
      'The school’s management of events, curriculum, and communication is top class. Diya eagerly participates in various inter-school competitions with full confidence and enthusiasm.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Sneha Chauhan',
    relation: 'M/O Kartik Chauhan (I C)',
    content:
      'What sets Prudence apart is its focus on moral values and interactive learning. My son is learning how to be kind, respectful, and curious – values that matter most.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Mahesh Joshi',
    relation: 'F/O Krish Joshi (II A)',
    content:
      'The school offers ample opportunities for children to explore their hidden talents – be it music, dance, sports, or public speaking. Krish has flourished in ways I never imagined.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Priyanka Goyal',
    relation: 'M/O Tanya Goyal (KG)',
    content:
      'We feel extremely proud and fortunate to be a part of the Prudence community. The school’s emphasis on foundational skills and happy learning is commendable.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Manish Kapoor',
    relation: 'F/O Ansh Kapoor (III B)',
    content:
      'What I love most is their real-world teaching approach. They relate concepts to everyday situations, making learning more relatable and impactful for children.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Renu Bansal',
    relation: 'M/O Ishita Bansal (Nursery)',
    content:
      'Our daughter loves going to school every morning. That alone speaks volumes about how welcoming and child-friendly the school is. She feels valued and loved.',
    image: '/testimonial-logo.png',
  },
  {
    name: 'Aakash Jain',
    relation: 'F/O Aanya Jain (UKG)',
    content:
      'I highly recommend Prudence School to parents seeking holistic development for their children. It fosters creativity, curiosity, and a lifelong love of learning.',
    image: '/testimonial-logo.png',
  },
];

export default function ReviewsSection() {
  return (
    <section className="relative py-20 bg-white px-4 md:px-10">
      <h2 className="text-orange-500 text-xl md:text-2xl font-extrabold uppercase tracking-wide mb-3">
        School Reviews <span className="inline-block w-20 h-1 bg-orange-500 ml-2 align-middle" />
      </h2>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-black">
        Reviews for our schools
      </h1>

      {/* Arrows */}
      <div className="flex justify-between items-center mb-6">
        <div className="swiper-button-prev-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowLeftIcon className="h-6 w-6" />
        </div>
        <div className="swiper-button-next-custom bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full cursor-pointer shadow-lg transition transform hover:scale-110">
          <ArrowRightIcon className="h-6 w-6" />
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
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
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-md bg-white h-[430px] md:h-[470px] flex flex-col justify-between border border-gray-200 transition-transform duration-500 hover:scale-105 text-center px-6 py-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt="testimonial"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div className="px-2 md:px-6">
                <h3 className="text-gray-800 font-bold uppercase text-sm md:text-base">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-2">{item.relation}</p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto md:max-w-md">
                  {item.content}
                </p>
              </div>
              <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 px-5 rounded-full font-semibold text-sm">
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
