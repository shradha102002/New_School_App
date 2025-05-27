'use client';
import Image from 'next/image';

export default function VisitSec2() {
  return (
    <section className="py-9 px-4 bg-white max-w-8xl mx-auto">
  {/* Aligned heading block */}
  <div className="mb-6 px-4 md:px-10">
    <div className="w-fit">
      <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide md:text-3xl">
        Beyond Academics _________
      </h2>
      <h2 className="text-2xl md:text-3xl font-bold">
        <span className="text-[#ff4f6d]">NASA Visit</span>, a lifetime exposure
      </h2>
    </div>
      </div>

      {/* First half with image and first few paragraphs */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Image */}
        <div className="w-full lg:w-[40%]">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/nasa_img/visit.jpg"
              alt="NASA Visit"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Text Block */}
        <div className="w-full lg:w-[60%]">
          <h3 className="text-xl font-semibold mb-4">
            OUR STUDENTS AT NASA ON RESEARCH VISIT
          </h3>
          <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
            <p>
              On 19th June 2019, a group which comprised of 84 students and senior management members, departed for New York, where the students began their dream tour to USA. They visited the much-revered United Nations Head Quarters and also learnt about how the United Nations addresses issues such as disarmament, peace and security, human rights, and sustainable development.
            </p>
            <p>
              Beyond serving as venues for physical training and interschool competitions, they are also crucial for nurturing teamwork, leadership, and discipline. Well-equipped sports facilities play a vital role in enhancing students’ physical capabilities and inspiring a lasting commitment to health and fitness.
            </p>
            <p>
              They indulged in shopping at the Times Square, and enjoyed a majestic 360-aerial view of the New York City from the 102nd floor of One World Observatory.
            </p>
          </div>
        </div>
      </div>

      {/* Remaining paragraphs below full width */}
      <div className="mt-10 text-gray-700 space-y-4 text-sm leading-relaxed">
        <p>
          Students had an amazing time at Madame Tussauds Wax Museum, New York and The Statue of Liberty. They also went for a city tour where they saw the Rockefeller Centre, Empire State Building, Brooklyn Bridge and other famous landmarks of New York like the site of 9/11 attacks and the Ground Zero. The visit to Columbia State University left the students in awe and amazement.
        </p>
        <p>
          The group also got the privilege to experience the majestic Niagara Falls, and the famous Maid of the Mist boat ride. It was indeed enchanting to have a view of Niagara Falls in colourful lights and the spectacular fireworks.
        </p>
        <p>
          The visit to the Kennedy Space Centre, Orlando was a life time experience where the team explored the Visitor’s complex, Vehicle Assembly Building, Saturn V Rocket, Space Shuttle Atlantis Complex and Rocket garden. It was indeed an honour to meet Veteran Astronaut Winston Scott, who shared his experiences to ensure the mission’s success.
        </p>
        <p>
          The tour concluded with a visit to the much awaited theme parks of Disney’s Hollywood Studios and Universal’s Islands of Adventure, where the students cherished the thrilling rides and shows.
        </p>
        <p>
          The 12 day trip was a great learning experience for all, where they made new friends along with acquiring life skills and created memories they would cherish for life.
        </p>
        <p>
          Prudence has yet again reiterated its core values of innovation and creation of global citizens with this superbly organised learning experience for the students. Indeed, the world is a book and those who do not travel read only one page! And this is just a beginning for International Exposure at the Prudence School.
        </p>
      </div>

      <button className="mt-6 bg-[#ff4f6d] hover:bg-[#e0435f] text-white font-semibold text-sm px-6 py-3 rounded-full">
        Learn More
      </button>
    </section>
  );
}
