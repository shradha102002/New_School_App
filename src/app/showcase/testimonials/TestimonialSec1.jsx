import Image from "next/image";

const TestimonialSec1 = () => {
  return (
    <div className="w-full">
      {/* Video Gallery Banner */}
      <div className="relative w-full">
        <Image
          src="/videoGallery_img/img1.jpg" // Make sure to move the image into public/images/
          alt="Video Gallery"
          width={1200}
          height={600}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-orange-600 drop-shadow-md">VIDEO GALLERY</h2>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-rose-500 text-white text-center py-10 px-4">
        <h3 className="text-2xl md:text-3xl font-bold underline">TESTIMONIALS</h3>
        <p className="mt-2 text-lg md:text-xl font-semibold">Reviews of our schools</p>
      </div>
    </div>
  );
};

export default  TestimonialSec1;
