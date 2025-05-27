'use client';
import Image from 'next/image';

export default function InitiativeSec1() {
  return (
    <section className="w-full">
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/initiative_img/celebration.jpg"
          alt="School Celebration"
          width={1920}
          height={750}
          className="w-full h-auto object-cover"
          priority
        />

        {/* Contact Bar */}
        <div className="bg-[#ff4f6d] text-white py-6 text-center">
          <p className="text-lg sm:text-xl">
            For admissions, <span className="font-semibold">connect</span> with us
            <a
              href="tel:+917304071071"
              className="ml-2 inline-flex items-center font-bold hover:underline"
            >
              <svg
                className="w-5 h-5 mr-1 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.24 1.05z" />
              </svg>
              +91 7304-071-071
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
