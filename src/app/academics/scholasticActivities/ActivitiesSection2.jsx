import Image from 'next/image'

export default function SportsFacilities() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 max-w-7xl mx-auto">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="rounded-xl overflow-hidden shadow-lg max-w-sm">
          <Image
            src="/activities_img/activity2.jpg" 
            alt="Cricket Player"
            width={400}
            height={400}
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4 relative inline-block">
          SPORTS FACILITIES
          <span className="block w-16 h-1 bg-orange-500 mt-1"></span>
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
          School sports facilities are essential for fostering physical education and promoting overall wellness among students. These facilities often include fields for soccer and cricket, courts for basketball and tennis, and tracks for athletics, providing ample space for a variety of sports activities.
          Beyond serving as venues for physical training and interschool competitions, they are also crucial for nurturing teamwork, leadership, and discipline. Well-equipped sports facilities play a vital role in enhancing students’ physical capabilities and inspiring a lasting commitment to health and fitness.
        </p>
        <button className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-pink-600 transition">
          Learn More
        </button>
      </div>
    </section>
  )
}
