'use client';
import Image from "next/image";

export default function AboutChairmanSection2() {
  return (
    <section className="w-full bg-white px-4 md:px-10 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/about_chairman/chairman1.jpg"
            alt="Chairman"
            width={400}
            height={500}
            className="rounded-lg border border-pink-200 shadow-md"
          />
        </div>

        {/* Right Side - Heading + First Two Paragraphs */}
        <div>
          <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
       DR. G.S. MATHAROO _________
      </h2>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
        Our Chairman
      </h1>
          <div className="text-gray-700 space-y-4 text-justify">
            <p>
              Dr. G.S. Matharoo, Chairman, Prudence Group of Schools has a great passion for providing the right education system especially for the school going students. There was a deep sense of disquiet about several aspects of our educational system, particularly the school system, which he sincerely wished to set it right. His ardent desire drove him to voluntarily retire from his successful career in the Indian Civil Service when it was at its peak, and take upon himself the responsibility to set up schools on the lines of his principles and beliefs. He was so enamoured with the inclination to serve the nation with his contribution towards facilitating a good education system, that nothing could thwart him from starting a new chain of school by the name of Prudence. With his unparalleled commitment to the cause of education and a dream for a truly educated and self-sufficient nation, he started reforming and practising in his schools, those essential areas that needed urgent attention. He has been pioneering far reaching transformation in the field of School Education through his dynamic and visionary leadership.
            </p>
            <p>
              Dr Matharoo’s ways are very refreshing as he relates from real life situations sharing instances from his own life and leading by examples.  He dwells on the overall development of the students and emphasizes on personalized attention to be given to each student.
            </p>
          </div>
        </div>
      </div>

   {/* Bottom Full-Width Paragraphs */}
<div className="mt-8 text-gray-700 space-y-4 text-justify pl-4 pr-4 md:pl-20 md:pr-20">
  <p>
    He inspires his school heads and team members to focus on the present grooming and nurturing of the students so that their future is taken care of. For more than a decade now, he has successfully delivered amongst others- attainment based learning; personal learning plans; performance-based learning; advanced technologies as tools; and teachers as facilitators.
  </p>
  <p>
    His education system is highly relevant to the present-day needs. He challenges students, parents, teachers to work and think outside the traditional mind set. His success can also be attributed to a determined focus on the holistic development of each student while providing academic rigour so that students score high grades and deliver superior performances. This has been achieved by providing individualized support and a nurturing environment to each student, creating systems that embrace and engage the students and furnishing them with the information, tools and facilities they need at every step of their way ahead. Here students are very proactive and they look forward to come to school.
  </p>
  <p>
    As a leader of the organisation, he has contributed tremendously to its growth and development, bringing innovation in the standards of education in his schools. There is sea change in the schools steered by him.
  </p>
</div>


      {/* Highlight Box */}
      <div className="mt-10 bg-[#F43F5E] text-white text-center py-6 px-4 rounded max-w-7xl mx-auto">
        <p className="text-lg md:text-xl font-semibold">
          Dr. G.S. Matharoo is an educationist par excellence who is prepared to thrive and willing to make a difference.
        </p>
      </div>
    </section>
  );
}
