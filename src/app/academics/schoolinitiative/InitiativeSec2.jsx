'use client';
import Image from 'next/image';

export default function SocialInitiativesSection() {
  return (
    <section className="w-full px-4 py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/initiative_img/social.jpg"
            alt="Social Initiatives"
            width={800}
            height={600}
            className="rounded-xl w-full h-auto object-cover shadow-md"
            priority
          />
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-orange-500 font-bold text-3xl md:text-4xl mb-4 relative inline-block">
            SOCIAL INITIATIVES
            <span className="absolute bottom-0 left-0 w-14 h-1 bg-orange-400 block mt-1"></span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Social initiatives are collective endeavors designed to enhance community welfare and tackle pressing societal issues. These programs typically target areas like education, healthcare, environmental conservation, and poverty reduction. By uniting the efforts of individuals, organizations, and governments, social initiatives aim to generate lasting change and uplift disadvantaged groups. We, at Prudence, groom our students to cultivate solidarity and a sense of responsibility among participants, promoting active citizenship and community involvement. Ultimately, these initiatives play a crucial role in fostering a more equitable and just world, ensuring that everyone has the chance to succeed.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold py-3 px-6 rounded-full transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
