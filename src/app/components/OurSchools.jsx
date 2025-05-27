'use client';

const schools = [
  { name: 'Ashok Vihar', image: 'event1.jpg' },
  { name: 'Dwarka Sec 22', image: 'event2.jpg' },
  { name: 'Dwarka Sec 16B', image: 'event3.jpg' },
  { name: 'Pitampura', image: 'event4.jpg' },
  { name: 'Janak Puri', image: 'event5.jpg' },
  { name: 'Ashok Vihar (Junior)', image: 'event6.jpg' },
  { name: 'Dwarka Sec 8', image: 'event7.jpg' },
  { name: 'Meera Bagh', image: 'event8.jpg' },
];

export default function OurSchools() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="mb-12">
        <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 md:text-3xl px-0">
          Best Schools in Delhi / NCR ________
        </h2>
        <h1 className="text-3xl md:text-6xl font-extrabold text-black">
          Our Schools
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {schools.map((school, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <div className="relative overflow-hidden group rounded-t-xl">
              <img
                src={school.image}
                alt={school.name}
                className="w-full h-[350px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-pink-500"></div>
            </div>
            <div className="px-4 py-3 text-left">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Prudence School</span>
                <span>Click Here</span>
              </div>
              <h3 className="text-lg font-bold mb-3">{school.name}</h3>
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full font-semibold text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
