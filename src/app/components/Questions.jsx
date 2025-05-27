'use client';
import React, { useState } from 'react';

const faqList = [
  "Which is the No 1 school in Delhi for academic excellence?",
  "How do I choose among the top schools in Delhi for my child?",
  "What facilities does the No 1 school in Delhi provide?",
  "Are Prudence Schools ranked among the top schools in Delhi?",
  "How do top schools in Delhi ensure student success?"
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full bg-white px-4 py-12 sm:px-6 lg:px-20">
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-left text-gray-900">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          {faqList.map((question, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className={`cursor-pointer p-4 rounded-md transition-colors duration-300 ${
                activeIndex === idx
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#f84269] text-white hover:bg-blue-600'
              }`}
            >
              <span className="font-medium">{idx + 1}. {question}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Questions;
