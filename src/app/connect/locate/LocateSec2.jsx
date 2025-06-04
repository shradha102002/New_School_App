// components/OurBranches.tsx
import Image from 'next/image';

const LocateSec2 = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left - Logo */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="border border-gray-200 rounded-xl p-4 shadow-md">
            <Image
              src="/locate/img2.jpg"
              alt="Prudence School Logo"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h4 className="text-orange-500 font-semibold uppercase text-sm tracking-widest">
            Find the best CBSE school near you_________
          </h4>
          <h2 className="text-pink-600 text-3xl font-bold">
            Our Branches,
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            We Educate. Innovate. Create
          </h3>
          <p className="text-gray-600">
            The Prudence Group of Schools have currently <strong>08 Branches</strong> and expanding to
            spread value education to our students for their bright career.
          </p>
          <p className="text-gray-600">
            Parents may connect with the nearest Prudence School branch for their child’s academic
            guidance and admission counselling on a convenient time during working hours except holidays.
          </p>
          <p className="text-gray-600">
            In addition, our Counselling Team is available on phone to address your queries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocateSec2;
