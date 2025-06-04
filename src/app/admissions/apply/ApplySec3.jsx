"use client";

import React from "react";

const ApplySec3 = () => {
  return (
    <section className="py-16 px-4 md:px-20 text-center bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
        WELCOME TO PRUDENCE SCHOOL
      </h2>
      <div className="flex justify-center items-center my-6">
        <hr className="w-20 border-t-2 border-gray-300 mr-4" />
        <span className="text-2xl">🎓</span>
        <hr className="w-20 border-t-2 border-gray-300 ml-4" />
      </div>

      <div className="text-gray-700 max-w-4xl mx-auto text-justify space-y-4">
        <p>
          Prudence is a school dedicated to honing and nurturing the intellectual, social and emotional growth of each student.
          We aspire to attain academic excellence through a rigorous academic programme which encourages inquiry, creativity
          and innovation so as to tap the rich human potential of each student and prepare them to successfully compete in a global environment.
        </p>

        <p>
          The school firmly believes and imparts its core values i.e. Excellence, Integrity, Respect & Responsibility, Leadership,
          Community, Creativity & Innovation to help students thrive in today&aposs world.
        </p>

        <p>
          Prudence Group of Schools are amongst the most prestigious schools in Delhi/NCR, having 10000 students across 8 campuses
          and is spreading its wings across the country.
        </p>

        <p>
          Prudence is pioneering a new Paradigm of Excellence in Secondary Education through a learner centred educational system
          aimed at awakening and fostering the latent capacity of each student. It has been successful in providing the best possible
          physical, intellectual, moral and cultural training to its students in order that they may realise their true potential.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
        <button
          onClick={() => alert("New Enquiry clicked")}
          className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded w-full md:w-auto"
        >
          NEW ENQUIRY
        </button>
        <button
          onClick={() => alert("Already Enquired clicked")}
          className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded w-full md:w-auto"
        >
          ALREADY ENQUIRED
        </button>
        <button
          onClick={() => alert("Already Registered clicked")}
          className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded w-full md:w-auto"
        >
          ALREADY REGISTERED
        </button>
      </div>
    </section>
  );
};

export default ApplySec3;
