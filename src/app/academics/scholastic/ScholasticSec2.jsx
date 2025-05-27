'use client';
import React from 'react';
import Image from 'next/image';

const rightPoints = [
  {
    color: 'bg-purple-300',
    text: 'An Academic Advisory Board comprising eminent educationists, bureaucrats and sportspersons is being constituted to guide and monitor excellence in education.',
  },
  {
    color: 'bg-green-300',
    text: 'Well researched scientific curriculum based on best practices of renowned educationists and scholars with emphasis on academic rigor and experiential learning throughout.',
  },
  {
    color: 'bg-sky-200',
    text: 'Providing state of the art support for the Curriculum through latest technologies - digital classrooms, e-learning and virtual reality.',
  },
  {
    color: 'bg-yellow-300',
    text: 'A dynamic and well rounded assessment system based on latest guidelines of CBSE. Personalized learning solution to address individual needs, skills and interest of each student provided in collaboration with Genius Corner.',
  },
  {
    color: 'bg-pink-300',
    text: 'Trained and passionate teaching faculty empowered through workshops, seminars, conclaves and transformation labs.',
  },
  {
    color: 'bg-yellow-200',
    text: 'Project & Inquiry based learning for developing life skills to empower child to handle real life challenges.',
  },
];

const ScholasticSec2 = () => {
  return (
     <section className="bg-[#f8f9fa] py-10 px-4">
      <div className="max-w-7xl mx-auto"></div>
   
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Section: One Image */}
        <div className="lg:w-1/2 w-full">
          <Image
            src="/scolastic_img/scolastic2.jpg" // Place your image here
            alt="Scholastic Visual"
            width={600}
            height={800}
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-2 uppercase">
            Scholastic - Excellence in Academics
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-6">
            <span className="text-pink-600 font-bold">We Shape students</span>, for better career and future:
          </h3>
          <ol className="space-y-4">
            {rightPoints.map((item, index) => (
              <li
                key={index}
                className={`${item.color} p-4 rounded-md shadow-md border-l-4 border-gray-700`}
              >
                <div className="flex items-start">
                  <span className="text-lg font-bold mr-2">{index + 1}.</span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholasticSec2;
