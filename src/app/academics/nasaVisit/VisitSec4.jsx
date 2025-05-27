'use client';
import Image from 'next/image';

const nasaPhotos = [
  '/nasa_img/img1.jpg',
  '/nasa_img/img2.jpg',
  '/nasa_img/img3.jpg',
  '/nasa_img/img4.jpg',
  '/nasa_img/img5.jpg',
  '/nasa_img/img6.jpg',
  '/nasa_img/img7.jpg',
  '/nasa_img/img8.jpg',
];

// Image Card Component (JS version)
function ImageCard({ src, index }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-sm bg-white border border-gray-200">
      <Image
        src={src}
        alt={`NASA Visit ${index + 1}`}
        width={300}
        height={200}
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />

      {/* Dot */}
      <div className="absolute top-2 right-2 w-3 h-3 bg-pink-500 rounded-full z-10" />

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/70 text-xs flex items-center justify-between px-2 py-1">
        <span className="font-medium text-gray-700">NASA Visit</span>
        <span className="text-blue-500 font-semibold cursor-pointer hover:underline">View</span>
      </div>
    </div>
  );
}

export default function VisitSec4() {
  return (
   <section className="w-full bg-white px-4 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h3 className="text-[#FF6400] font-semibold uppercase text-sm tracking-wide border-b-2 border-[#FF6400] inline-block mb-1">
          Rememberable Memories
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">NASA Visit Photo Gallery</h2>

        {/* Custom Layout: 3 - 3 - 2 */}
        <div className="grid gap-4">
          {/* Row 1 - 3 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {nasaPhotos.slice(0, 3).map((src, i) => (
              <ImageCard key={i} src={src} index={i} />
            ))}
          </div>

          {/* Row 2 - 3 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {nasaPhotos.slice(3, 6).map((src, i) => (
              <ImageCard key={i + 3} src={src} index={i + 3} />
            ))}
          </div>

          {/* Row 3 - 2 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:w-2/3 mx-auto">
            {nasaPhotos.slice(6, 8).map((src, i) => (
              <ImageCard key={i + 6} src={src} index={i + 6} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
