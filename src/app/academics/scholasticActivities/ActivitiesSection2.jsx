import Image from 'next/image'

export default function SportsFacilities() {
  return (
    <section className="bg-[#f8f9fa] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16 gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg max-w-md md:max-w-lg">
            <Image
              src="/activities_img/activity2.jpg"
              alt="Cricket Player"
              width={500}
              height={500}
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 relative inline-block">
            SPORTS FACILITIES
            <span className="block w-20 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
            School sports facilities are essential for fostering physical education and promoting overall wellness among students. These facilities often include fields for soccer and cricket, courts for basketball and tennis, and tracks for athletics, providing ample space for a variety of sports activities.
            <br /><br />
            Beyond serving as venues for physical training and interschool competitions, they are also crucial for nurturing teamwork, leadership, and discipline. Well-equipped sports facilities play a vital role in enhancing students’ physical capabilities and inspiring a lasting commitment to health and fitness.
          </p>
          <button className="bg-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-pink-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
