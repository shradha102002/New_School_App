// pages/about.js
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div  style={{ background:"white"}}>
    <div className="px-8 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* 👉 Image with slide-in-left and hover effect */}
        <div className="relative w-full h-80 md:h-full animate-slide-in-left transform transition duration-300 hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden">
          <Image
            src="/about_2.jpg"
            alt="Prudence School Student"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* 👉 Text content with slide-in-right and hover effects */}
        <div className="animate-slide-in-right">
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-2">
            Educate. Innovate. Create
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 transition duration-300 transform hover:text-pink-700 hover:-translate-y-1">
            About Prudence Schools
          </h1>
          <p className="text-gray-700 text-justify mb-4 transition duration-300 hover:text-gray-900 hover:underline">
            Prudence Group of Schools are English medium, co-educational Schools affiliated to Central Board of School Education (CBSE). It has within a very short period of time established as one of the most prestigious upcoming schools in Delhi and NCR, pioneering a new paradigm of excellence in school education through a learner-centric educational system...
          </p>
          <p className="text-gray-700 text-justify mb-4 transition duration-300 hover:text-gray-900 hover:underline">
            Teachers at the best school in Delhi are very creative persons, needing the freedom and opportunity to discover their own hidden depths, which flower and blossom, given a positive climate...
          </p>
          <p className="text-gray-700 text-justify mb-4 transition duration-300 hover:text-gray-900 hover:underline">
            Our schools are nurturing places where everyone - teachers, students, management and also the parents feel equally responsible to grow together as a team and attain greater heights...
          </p>
          <p className="text-gray-700 text-justify transition duration-300 hover:text-gray-900 hover:underline">
            The vibrant walls, the laughter and sounds in the corridors, the sparkling eyes of the children, the confident deliverance of their performances on various platforms...
          </p>
        </div>
      </div>

      {/* 👉 Additional content with same right-slide and hover effects */}
      <div className="mt-8 text-gray-700 space-y-4 text-justify animate-slide-in-right">
        <p className="transition duration-300 hover:text-gray-900 hover:underline">
          Teachers at the best school in Delhi are very creative persons, needing the freedom and opportunity to discover their own hidden depths, which flower and blossom, given a positive climate. As one of the top schools in Delhi, here we try and create an environment that nurtures the creativity and growth of not just our students but our teachers too. We believe a coordinated effort is needed among the students, teachers and the parents to ensure we get all positive outcomes.
        </p>
        <p className="transition duration-300 hover:text-gray-900 hover:underline">
          Our schools are nurturing places where everyone - teachers, students, management and also the parents feel equally responsible to grow together as a team and attain greater heights. Here each of the team members feel supported, cared for and respected. Teachers are all very creative persons, needing the freedom and opportunity to discover their own hidden depths, which flower and blossom, given a positive climate. Here we try and create an environment that nurtures the creativity and growth of not just our students but our teachers too.
        </p>
        <p className="transition duration-300 hover:text-gray-900 hover:underline">
          Students are continually encouraged to develop concern and respect for the environment, appreciate diverse community, different convictions. Traditional and modern values are respected and encouraged to coexist and thus they evolve to become global citizens.
        </p>
        <p className="transition duration-300 hover:text-gray-900 hover:underline">
          The vibrant walls, the laughter and sounds in the corridors, the sparkling eyes of the children, the confident deliverance of their performances on various platforms, manoeuvring of the technological equipment and they adapting so beautifully and effectively to the online virtual mode as and when needed, bear testimony to the positive school climate that we have for our students. Learners are motivated to think, practice, evolve and develop futuristic skills and metamorphose into holistically beautiful human beings.
        </p>
      </div>
    </div>
    </div>
  );
}
