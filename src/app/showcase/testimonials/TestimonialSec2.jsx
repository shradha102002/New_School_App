
import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Mrs Sonali Gupta",
    role: "M/O Aarav Gupta (Nur-A)",
    message:
      "Prudence school has proved to be a pioneer in all the fields. The exposure children receive is exceptional. I am highly impressed with the school’s curriculum and also the teaching methods which are used in the classroom which make learning fun for my child. I take this opportunity to congratulate the school management for its endless efforts. I feel that my decision in sending my child to Prudence was accurate. Wish you a great success Prudence School.",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Ms Punita Bagadia BAGADIA",
    role: "M/O Prikaa Bagadia (6E) & Saanish Bagadia (Prep B)",
    message:
      "Schools are the first place to build confidence & prepare the child for the best of his future. To begin with I would like to share that PRUDENCE (Ashok Vihar) is a school providing the best of education. The school with right teachers, best administrators & friendly student environment makes it comfortable for a child to learn more & gain the utmost knowledge in every field be it academics, sports, dance, music. Prudence has it all..!! The interclass & interschool competitions make the children more confident & prepare them for future stage presentations as well. The medical facility available keeps us parents at peace. I am therefore happy with the functioning of the school!!",
    image: "/testimonial-logo.jpg",
  },

  // add more testimonials as needed...
    {
    name: "Ms Shilpa Kumar",
    role: "Parent of Syra Kumar (Prep A)",
    message:
      "Prudence school’s curriculum is well planned and organised. I am impressed with the interactive methods...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Ms Swati Aggarwal",
    role: "Parent of Bhumikk Aggarwal (Nur-C)",
    message:
      "Thank you Anika Ma’am and the ever supporting staff of Prudence School for your hard work, support, patience...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Ms Divya Arora",
    role: "Parent of Ahaan Arora (K.G)",
    message:
      "As a parent, my experience with PRUDENCE SCHOOL has been overwhelmingly positive. Dedicated staff, excellent care...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Ms Deepali Rastogi",
    role: "Parent of Taanush Rastogi (Prep-C)",
    message:
      "My child has been a part of Prudence school since last 5 years. The school nurtured and guided my child beautifully...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Ms Ritika Charma",
    role: "Parent of Amira Charma (1C)",
    message:
      "I am super thrilled with the experience my twins are having at Prudence School. The nurturing environment and engaging curriculum...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Ms Neha Garg",
    role: "Parent of Reyansh Garg (2B)",
    message:
      "My gratitude for the incredible work done by school and the teachers is boundless. The dedication, passion, and commitment...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Ms Kiran Singh",
    role: "M/O Srishti Singh (3B)",
    message:
      "I want to express my immense gratitude to the school authorities for the top class educational facilities and co-curricular activities...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Dr. Shweta Nakra",
    role: "M/O Dhairya Nakra (2B) & Sanreet Nakra (6A)",
    message:
      "It is very rightly said that the teachers are the guiding light in children's life. My heartfelt thanks to the faculty...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Mrs. and Dr. Amita Kushi Mehrotra",
    role: "Parents of Ekansya Mehrotra (1C)",
    message:
      "We would like to share an appreciation note for the class teacher of 1 C. There is a special bond with every child...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Deepali Rastogi",
    role: "M/O Taarush Rastogi (Prep-C)",
    message:
      "With Taarush being my first child, I was a really scared and apprehensive mother who found it difficult to make choices...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Devyani Mohan",
    role: "M/O Yash Mohan (1A)",
    message:
      "Prudence school is one of the best schools in Delhi. Its approach is practical and student-centric. I am very happy...",
    image: "/testimonial-logo.jpg",
  },
  {
    name: "Mr. Ankur",
    role: "F/O Vihaan Chadda (V-C)",
    message:
      "Being part of Prudence family gives me immense level of satisfaction. It offers a great deal of co-scholastic activities...",
    image: "/testimonial-logo.jpg",
  },
];

const TestimonialSec2 = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Parents Say About Us
      </h2>

      <div className="flex flex-col items-center gap-10">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white w-full max-w-3xl p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border border-gray-300"
            />
            <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
            <p className="text-sm text-gray-500 mb-2">{t.role}</p>
            <div className="flex justify-center mb-3 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSec2;