'use client'

const amenities = [
  { title: 'Spacious Digital Classrooms', image: '/about_img/amenity1.jpg' },
  { title: 'Swimming Pool', image: '/about_img/amenity2.jpg' },
  { title: 'GPS Enabled Transport', image: '/about_img/amenity3.jpg' },
  { title: 'Safety & Security', image: '/about_img/amenity4.jpg' },
  { title: 'Excellent Child Care Facilities', image: '/about_img/amenity5.jpg' },
  { title: 'World Class Multipurpose Hall', image: '/about_img/amenity6.jpg' },
  { title: 'State of Art Computer Lab', image: '/about_img/amenity7.jpg' },
  { title: 'Performing Art Studios', image: '/about_img/amenity8.jpg' },
  { title: 'Well Stocked Library', image: '/about_img/amenity9.jpg' },
  { title: 'Excellent Sports Facilities', image: '/about_img/amenity10.jpg' },
  { title: 'Experiential Learning Hubs', image: '/about_img/amenity11.jpg' },
  { title: 'State of Arts Science Labs', image: '/about_img/amenity12.jpg' },
]

export default function AboutSchoolSection4() {
  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="mb-10">
         <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
        School Amenities _________
      </h2>
      <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
        THE BEST A CHILD CAN GET
      </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-pink-500"></div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
