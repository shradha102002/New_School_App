// pages/sports.js
'use client';
export default function SportsActivities() {
  const sportsList = [
    { title: 'BASKET BALL', image: '/activities_img/basketball.jpg' },
    { title: 'CHESS', image: '/activities_img/chess.jpg' },
    { title: 'CARROM', image: '/activities_img/carrom.jpg' },
    { title: 'BADMINTON', image: '/activities_img/badminton.jpg' },
    { title: 'YOGA', image: '/activities_img/yoga.jpg' },
    { title: 'CRICKET', image: '/activities_img/cricket.jpg' },
    { title: 'FOOT BALL', image: '/activities_img/football.jpg' },
    { title: 'GOLF', image: '/activities_img/golf.jpg' },
    { title: 'KARATE', image: '/activities_img/karate.jpg' },
    { title: 'SKATING', image: '/activities_img/skating.jpg' },
    { title: 'TABLE TENNIS', image: '/activities_img/tabletennis.jpg' },
    { title: 'ARCHERY', image: '/activities_img/archery.jpg' },
  ];

  return (
    <main className="min-h-screen px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-10">
          <h2 className="text-orange-400 text-lg font-bold uppercase tracking-wide mb-2 px-4 md:px-10 md:text-3xl">
            Sports Activities _________
          </h2>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black px-4 md:px-10">
            Our Unmatched Sports Facilities
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-0">
          {sportsList.map((sport, idx) => (
            <div
              key={idx}
              className="border rounded-lg overflow-hidden shadow hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <img
                src={sport.image}
                alt={sport.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-xs text-gray-500">Prudence School</p>
                <h3 className="text-sm font-semibold text-gray-800 mt-1">{sport.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
